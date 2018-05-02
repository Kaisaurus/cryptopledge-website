import React from 'react'
import { Section, Columns, Column, Container, Title, Content } from 'bloomer'
import MainNavbar from '../components/MainNavbar'

export const PlainPageTemplate = ({ title, content, children }) => {
  return (
    <React.Fragment>
      <MainNavbar />
      <Section>
        <Container>
          <Columns>
            <Column isOffset={1}>
              {title && <Title isSize={3}>{title}</Title>}
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

  return (
    <PlainPageTemplate title={post.frontmatter.title} content={post.html} />
  )
}

export const plainPageQuery = graphql`
  query PlainPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
