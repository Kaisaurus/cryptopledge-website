import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import styled from 'styled-components'
import home_bg from '../img/cryptopledge-home-1344.jpg'
import { Container, Title, Subtitle, Hero, HeroBody } from 'bloomer'
import MainNavbar from '../components/MainNavbar'

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
const PledgeBtn = styled.a`
  margin: 0 15px;
`

export const HomePageTemplate = ({
  title,
  subtitle,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <React.Fragment>
      <HomeHero isFullHeight>
        <MainNavbar />
        <HeroBody>
          <Container hasTextAlign="centered">
            <Title isSize={2} className="has-text-white-bis">
              {title}
            </Title>
            <Subtitle isSize={5} className="has-text-white-ter">
              {subtitle}
            </Subtitle>
          </Container>
        </HeroBody>
        <Hero className="is-primary" isSize="small">
          <HeroBody>
            <Container>
              <PledgeHeader className="title has-text-centered">
                <PledgeBtn className="button is-link is-large">
                  Pledge
                </PledgeBtn>
                Join others and offset your crypto carbon footprint today{' '}
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
                  <h4>Tristique senectus et netus et. </h4>
                  <p>
                    Purus semper eget duis at tellus at urna condimentum mattis.
                    Non blandit massa enim nec. Integer enim neque volutpat ac
                    tincidunt vitae semper quis. Accumsan tortor posuere ac ut
                    consequat semper viverra nam.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
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
                  <h4>Tempor orci dapibus ultrices in.</h4>
                  <p>
                    Ut venenatis tellus in metus vulputate. Amet consectetur
                    adipiscing elit pellentesque. Sed arcu non odio euismod
                    lacinia at quis risus. Faucibus turpis in eu mi bibendum
                    neque egestas cmonsu songue. Phasellus vestibulum lorem sed
                    risus.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
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
                  <h4> Leo integer malesuada nunc vel risus. </h4>
                  <p>
                    Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce
                    ut placerat orci nulla pellentesque dignissim enim. Libero
                    id faucibus nisl tincidunt eget nullam. Commodo viverra
                    maecenas accumsan lacus vel facilisis.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <React.Fragment>
      <HomePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        content={post.html}
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
      }
    }
  }
`
