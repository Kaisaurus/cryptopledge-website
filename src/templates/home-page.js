import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import styled from 'styled-components'
import home_bg from '../img/cryptopledge-home-1344.jpg'
import { Container, Title, Subtitle, Hero, HeroBody } from 'bloomer'
import MainNavbar from '../components/MainNavbar'
import Link from 'gatsby-link'

const HomeHero = styled(Hero)`
  background-image: url(${home_bg});
  background-size: cover;
  background-position: center;
`
const HomeContent = styled.section`
  padding: 1em;
`
const PledgeHeader = styled.h1`
  line-height: 1.8em;
`
const PledgeBtn = styled(Link)`
  margin: 0 15px;
`
const HomeSubtitle = styled(Subtitle)`
  margin: 50px 0 0 0;
`

export const HomePageTemplate = ({
  title,
  subtitle,
  content,
  contentComponent,
  card1,
  card2,
  card3
}) => {
  const PageContent = contentComponent || Content

  return (
    <React.Fragment>
      <HomeHero isFullHeight>
        <MainNavbar />
        <HeroBody>
          <Container hasTextAlign="centered">
            <Title isSize={1} className="has-text-white-bis">
              {title}
            </Title>
            <HomeSubtitle isSize={3} className="has-text-white-ter">
              {subtitle}
            </HomeSubtitle>
          </Container>
        </HeroBody>
        <Hero className="is-primary" isSize="small">
          <HeroBody>
            <Container>
              <PledgeHeader className="title has-text-centered">
                Join others and offset your crypto carbon footprint today{' '}
                <PledgeBtn className="button is-link is-large" to="/pledge">
                  Pledge
                </PledgeBtn>
              </PledgeHeader>
            </Container>
          </HeroBody>
        </Hero>
      </HomeHero>
      <div className="container section ">
        <div className="columns">
          <div className="column is-4">
            <div className="card">
              <div className="card-image has-text-centered">
                <i className="fa fa-paw" />
              </div>
              <div className="card-content">
                <div className="content">
                  {card1}
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card">
              <div className="card-image has-text-centered">
                <i className="fa fa-id-card-o" />
              </div>
              <div className="card-content">
                <div className="content">
                  {card2}
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card">
              <div className="card-image has-text-centered">
                <i className="fa fa-rocket" />
              </div>
              <div className="card-content">
                <div className="content">
                  {card3}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

// TODO: Is this actually necessary? Given that index.js imports non default export above.
export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <React.Fragment>
      <HomePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        content={post.html}
        card1={post.frontmatter.card1}
        card2={post.frontmatter.card2}
        card3={post.frontmatter.card3}
      />
    </React.Fragment>
  )
}

export const HomePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        card1
        card2
        card3
      }
    }
  }
`
