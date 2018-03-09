import React, { Component } from 'react'
import Content, { HTMLContent } from '../components/Content'

export class MediumPageTemplate extends Component {
  state = {
    posts: []
  }
  componentDidMount(posts) {
    getMediumFeed(this.appendResp)
    // getMediumFeed()
    //   .then(data => this.setState({ posts: data.items }))
    //   .catch(error => console.log(`error :${error}`))
  }
  appendResp = fetchPromise => {
    fetchPromise.then(posts => this.setState({ posts: posts.items }))
  }
  renderPost(post, index) {
    const { title, pubDate, link, content, description } = post
    return (
      <div className="content" key={index}>
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
          {title}
        </h1>
        <HTMLContent content={description} />
      </div>
    )
  }

  render() {
    const { title } = this.props
    const { posts } = this.state
    return (
      <section className="section section--gradient">
        <div className="container">
          <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
            {title}
          </h2>
          {posts.length > 0
            ? posts.map((post, index) => this.renderPost(post, index))
            : 'Loading posts from Medium...'}
        </div>
      </section>
    )
  }
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return <MediumPageTemplate title={post.frontmatter.title} />
}

export const mediumPageQuery = graphql`
  query MediumPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
// using async causes error on build
// async function getMediumFeed(username = '@kaigotoh') {
//   const mediumUrl = `https://medium.com/feed/${username}`
//   const resp = await fetch(
//     `https://api.rss2json.com/v1/api.json?rss_url=${mediumUrl}`
//   )
//   return await resp.json()
// }
function getMediumFeed(appendResp, username = '@kaigotoh') {
  const mediumUrl = `https://medium.com/feed/${username}`
  fetch(`https://api.rss2json.com/v1/api.json?rss_url=${mediumUrl}`).then(
    resp => appendResp(resp.json())
  )
}
