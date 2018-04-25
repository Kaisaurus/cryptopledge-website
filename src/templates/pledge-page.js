import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import OrganizationsTable from '../components/OrganizationsTable'
import CarbonCalculator from '../components/CarbonCalculator'
import { PlainPageTemplate } from './plain-page'

export const PledgePageTemplate = ({
  title,
  content,
  organizations,
  contentComponent
}) => {
  const PageContent = contentComponent || Content
  const pledgeContent = (
    <React.Fragment>
      <CarbonCalculator />
      <PageContent className="content" content={content} />
      <OrganizationsTable organizations={organizations} />
    </React.Fragment>
  )
  return <PlainPageTemplate title={title} reactContent={pledgeContent} />
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PledgePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      organizations={post.frontmatter.organizations}
      content={post.html}
    />
  )
}

export const pledgePageQuery = graphql`
  query PledgePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        organizations {
          name
          url
          donation
          effectiveness
        }
      }
    }
  }
`
