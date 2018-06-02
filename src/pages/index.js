import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import home_bg from '../img/cryptopledge-home-1344.jpg'
import { HomePageTemplate } from '../templates/home-page'

const HomeHero = styled.section`
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
export default class IndexPage extends React.Component {
  render() {
    const { edges } = this.props.data.allMarkdownRemark
    const home = edges.filter(
      edge => edge.node.frontmatter.templateKey === 'home-page'
    )[0].node.frontmatter
    const { title, subtitle } = home
    return <HomePageTemplate title={title} subtitle={subtitle} card1={home.card1} card2={home.card2} card3={home.card3} />
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          # frontmatter(templateKey: "home-page") {
          # I don't know why I can't get this query to work well so getting all data for now...
          frontmatter {
            title
            templateKey
            subtitle
            card1
            card2
            card3
          }
        }
      }
    }
    # unused code to pull generate a image
    # data.
    # file(relativePath: { eq: "../img/geran-de-klerk-136351-unsplash.jpg" }) {
    #   childImageSharp {
    #     # Specify the image processing specifications right in the query.
    #     # Makes it trivial to update as your page's design changes.
    #     sizes(maxWidth: 1250) {
    #       ...GatsbyImageSharpSizes
    #     }
    #   }
    # }
  }
`
