### Access Locally

```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ yarn run develop
```

To test the CMS locally, you'll need run a production build of the site:

```
$ yarn run build
$ yarn run serve
```

## How to add a page (Example)

open 'static/admin/config.yml' and add a [collection](https://www.netlifycms.org/docs/collection-types/#collection-types).

```
- name: "pages"
    label: "Pages"
  - file: "src/pages/research/index.md"
      label: "Research"
      name: "research"
      fields:
        - {label: "Template Key", name: "templateKey", widget: "hidden", default: "research-page"}
        - {label: "Title", name: "title", widget: "string"}
        - {label: "Title", name: "title", widget: "markdown"}
```

Create the page specified in as `file` (`src/pages/research/index.md`)
[Gatsby automatically turns React components in `src/pages` into pages](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/)

```
---
templateKey: research-page
title: The Reasearch
---
This is some content
```

Create the template specified as `templateKey` (`src/pages/templates/research-page.js`)
If you know react most of it should be familiar the graphql part is using the [gatsby-transformer-remark](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark)

```
import React from 'react'

export const ResearchPageTemplate = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ResearchPageTemplate title={post.frontmatter.title} content={post.html} />
  )
}

export const researchPageQuery = graphql`
  query ResearchPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
```

Create a page preview using the template (`src/cms/preview-templates/ResearchPagePreview.js`) and add it to `src/cms/cms.js`

```
import React from 'react'
import { ResearchPageTemplate } from '../../templates/research-page'

const ResearchPagePreview = ({ entry, widgetFor }) => (
  <ResearchPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

export default ResearchPagePreview
```

You're done!

## Credits

* Front page photo by Geran de Klerk on Unsplash
* Based on [Gatsby + Netlify CMS Starter](https://github.com/AustinGreen/gatsby-starter-netlify-cms)

## Help! Site isn't updating after code git or cms commits

Updates can take a few minutes, you can check the deploy status/log on [netlify](https://app.netlify.com)
