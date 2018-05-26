import React from 'react'
import { Section, Columns, Column, Container, Title, Content } from 'bloomer'
import MainNavbar from '../components/MainNavbar'
import MyHero from '../components/MyHero'
import test_bg from '../img/cryptopledge-home-1344.jpg'

export const PlainPageTemplate = ({ title, content, children, bg }) => {
  return (
    <React.Fragment>
      <MainNavbar />
      {bg && <MyHero isSize="medium" bg={test_bg} title={title} />}
      <Section>
        <Container>
          <Columns>
            <Column isOffset={1}>
              {/* {title && <Title isSize={3}>{title}</Title>} */}
              {content && (
                <Content dangerouslySetInnerHTML={{ __html: content }} />
              )}
              {children}
            </Column>
          </Columns>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data
  console.log(post.frontmatter)
  return (
    <PlainPageTemplate
      title={post.frontmatter.title}
      // bg={post.frontmatter.bg}
      content={post.html}
    />
  )
}

export const plainPageQuery = graphql`
  query PlainPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        # bgImage
      }
    }
  }
`
