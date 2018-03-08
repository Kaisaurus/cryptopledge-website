import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import home_bg from '../img/cryptopledge-home-1344.jpg'

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
    // I know this line isn't ideal but I couldn't figure out the graphql query...
    const home = edges.filter(
      edge => edge.node.frontmatter.templateKey === 'home-page'
    )[0].node.frontmatter
    const { title, subtitle } = home
    return (
      <React.Fragment>
        <HomeHero className="hero is-large is-bg-white-ter">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title has-text-white-bis">{title}</h1>
              <h2 className="subtitle has-text-white-ter">{subtitle}</h2>
            </div>
          </div>
        </HomeHero>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container ">
              {/* <div className="section "> */}
              <PledgeHeader className="title has-text-centered">
                <PledgeBtn className="button is-link is-large">
                  Pledge
                </PledgeBtn>
                Join others and offset your crypto carbon footprint today{' '}
              </PledgeHeader>
            </div>
            {/* <div className="columns">
                <div className="column has-text-centered">
                  <h1 className="title">4 Singups</h1>
                </div>
                <div className="column">
                  <h2 className="subtitle">Primary bold subtitle</h2>
                </div>
                <div className="column">Stats</div>
              </div> */}
          </div>
          {/* </div> */}
        </section>
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
                      Purus semper eget duis at tellus at urna condimentum
                      mattis. Non blandit massa enim nec. Integer enim neque
                      volutpat ac tincidunt vitae semper quis. Accumsan tortor
                      posuere ac ut consequat semper viverra nam.
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
                      neque egestas cmonsu songue. Phasellus vestibulum lorem
                      sed risus.
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
                      Imperdiet dui accumsan sit amet nulla facilisi morbi.
                      Fusce ut placerat orci nulla pellentesque dignissim enim.
                      Libero id faucibus nisl tincidunt eget nullam. Commodo
                      viverra maecenas accumsan lacus vel facilisis.
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
