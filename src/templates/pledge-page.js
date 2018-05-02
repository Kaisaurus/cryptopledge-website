import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import OrganizationsTable from '../components/OrganizationsTable'
import PledgeWalkthrough from '../components/pledge/PledgeWalkthrough'
import { PlainPageTemplate } from './plain-page'
import { db } from '../firebase'

export const PledgePageTemplate = ({
  title,
  content,
  organizations,
  contentComponent
}) => {
  const PageContent = contentComponent || Content
  const btc = db.getBitcoinKgCO2e()
  // .then(snapshot => console.log(snapshot.val()))
  const bth = db.getBitcoinCashKgCO2e()
  // .then(snapshot => console.log(snapshot.val()))
  const eth = db.getEthereumCashKgCO2e()
  // .then(snapshot => console.log(snapshot.val()))
  // const donor = db
  //   .getDonorLeaderBoard()
  //   .then(snapshot => console.log(snapshot.val()))
  return (
    <PlainPageTemplate title={title}>
      <PledgeWalkthrough />
      <PageContent className="content" content={content} />
      <OrganizationsTable organizations={organizations} />
    </PlainPageTemplate>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PledgePageTemplate
      contentComponent={HTMLContent}
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
