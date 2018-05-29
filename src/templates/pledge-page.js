import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import OrganizationsTable from '../components/OrganizationsTable'
import PledgeWalkthrough from '../components/pledge/PledgeWalkthrough'
import { PlainPageTemplate } from './plain-page'
import { connect } from 'react-redux'
import CarbonCalculatorByAddress from '../components/pledge/CarbonCalculatorByAddress'
import CarbonCalculatorManual from '../components/pledge/CarbonCalculatorManual'
import CO2PerTransactionGraph from '../components/pledge/CO2PerTransactionGraph'
// import ChooseOrganisation from '../components/pledge/ChooseOrganisation'
import {
  setPledgeOrganizations,
  setAddressItems,
  addAddressItem,
  setManualItems,
  addManualItem,
  clearPledgeData,
  getCO2Data
} from '../actions/pledgeActions'

// const ConnectedCarbonCalculatorByAddress = connect(
//   ({ pledge }) => ({
//     addressItems: pledge.addressItems,
//     CO2Data: pledge.CO2Data
//   }),
//   {
//     setAddressItems,
//     addAddressItem,
//     clearPledgeData
//   }
// )(CarbonCalculatorByAddress)

const ConnectedCarbonCalculatorManual = connect(
  ({ pledge }) => ({
    manualItems: pledge.manualItems,
    CO2DataRange: pledge.CO2DataRange,
    CO2Data: pledge.CO2Data
  }),
  {
    setManualItems,
    addManualItem,
    clearPledgeData
  }
)(CarbonCalculatorManual)

const ConnectedCO2PerTransactionGraph = connect(
  ({ pledge }) => ({
    CO2Data: pledge.CO2Data,
    CO2DataStatus: pledge.CO2DataStatus
  }),
  { getCO2Data }
)(CO2PerTransactionGraph)

// const ConnectedChooseOrganisation = connect(
//   ({ pledge }) => ({
//     pledgeOrganizations: pledge.pledgeOrganizations
//   }),
//   { setPledgeOrganizations }
// )(ChooseOrganisation)

export const PledgePageTemplate = ({
  title,
  content,
  organizations,
  contentComponent
}) => {
  const PageContent = contentComponent || Content
  return (
    <PlainPageTemplate title={title}>
      <PledgeWalkthrough
        // CarbonCalculatorByAddress={ConnectedCarbonCalculatorByAddress}
        CarbonCalculatorManual={ConnectedCarbonCalculatorManual}
        // ChooseOrganisation={ConnectedChooseOrganisation}
        organizations={organizations}
      />
      <ConnectedCO2PerTransactionGraph />
      <PageContent className="content" content={content} />
      <OrganizationsTable organizations={organizations} id="organizations" />
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
