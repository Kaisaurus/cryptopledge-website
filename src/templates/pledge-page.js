import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import OrganizationsTable from '../components/OrganizationsTable'
import PledgeWalkthrough from '../components/pledge/PledgeWalkthrough'
import { PlainPageTemplate } from './plain-page'
import { db } from '../firebase'
import { connect } from 'react-redux'
import CarbonCalculatorByAddress from '../components/pledge/CarbonCalculatorByAddress'
import CarbonCalculatorManual from '../components/pledge/CarbonCalculatorManual'
import {
  setAddressItems,
  addAddressItem,
  setManualItems,
  addManualItem,
  clearPledgeData
} from '../actions/pledgeActions'

// const Counter = ({ count, increment }) => (
//   <div>
//     <p>Count: {count}</p>
//     <button onClick={increment}>Increment</button>
//   </div>
// )

// Counter.propTypes = {
//   count: PropTypes.number.isRequired,
//   increment: PropTypes.func.isRequired
// }

// const cmapStateToProps = ({ count }) => {
//   return { count }
// }

// const cmapDispatchToProps = dispatch => {
//   return { increment: () => dispatch({ type: `INCREMENT` }) }
// }

// const ConnectedCounter = connect(cmapStateToProps, cmapDispatchToProps)(Counter)

// connecting components to redux
const connectedCarbonCalculatorByAddress = connect(
  ({ pledge }) => ({ addressItems: pledge.addressItems }),
  {
    setAddressItems,
    addAddressItem,
    clearPledgeData
  }
)(CarbonCalculatorByAddress)

const connectedCarbonCalculatorManual = connect(
  ({ pledge }) => ({ manualItems: pledge.manualItems }),
  {
    setManualItems,
    addManualItem,
    clearPledgeData
  }
)(CarbonCalculatorManual)

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
      <PledgeWalkthrough
        CarbonCalculatorByAddress={connectedCarbonCalculatorByAddress}
        CarbonCalculatorManual={connectedCarbonCalculatorManual}
      />
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
