import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, Control, Checkbox, Select } from 'bloomer'
import OrganizationsTable from '../OrganizationsTable'
import CarbonCalculatorCryptocurrencyField from './CarbonCalculatorCryptocurrencyField'
import { Button } from 'bloomer/lib/elements/Button'
import { cryptocurrenciesManual } from '../../util/static'
import ChooseOrganisationRow from './ChooseOrganisationRow'

export default class ChooseOrganisation extends Component {
  static propTypes = {
    organizations: PropTypes.array.isRequired,
    setPledgeOrganizations: PropTypes.func.isRequired,
    pledgeOrganizations: PropTypes.array.isRequired
  }
  handlePledge = () => {}
  onChange = e => console.log(e.target.value)
  addOrganization = () => {
    const {
      setPledgeOrganizations,
      pledgeOrganizations,
      organizations
    } = this.props
    setPledgeOrganizations([...pledgeOrganizations, organizations[0]])
  }
  setOrganization = i => organizationNo => {
    const {
      setPledgeOrganizations,
      pledgeOrganizations,
      organizations
    } = this.props
    const newPledgeOrganizations = [...pledgeOrganizations]
    newPledgeOrganizations[i] = organizations[organizationNo]
    setPledgeOrganizations([...newPledgeOrganizations])
  }

  setCryptocurrency = i => cryptocurrency => {
    const { setPledgeOrganizations, pledgeOrganizations } = this.props
    const newPledgeOrganizations = [...pledgeOrganizations]
    newPledgeOrganizations[i].cryptocurrency = cryptocurrency
    setPledgeOrganizations([...newPledgeOrganizations])
  }
  render() {
    const {
      organizations,
      handlePledge,
      setPledgeOrganizations,
      pledgeOrganizations
    } = this.props
    // initiate pledge organizations
    pledgeOrganizations.length === 0 &&
      setPledgeOrganizations([organizations[0]])
    return (
      <React.Fragment>
        {/* <OrganizationsTable
          organizations={organizations}
        /> */}
        <table className="table is-narrower is-hoverable">
          <thead>
            <tr>
              <th>Organization</th>
              <th>Cryptocurrency</th>
              <th>Offsetting effectiveness tonnes of CO2 offset per euro</th>
              <th>Suggested donation per transaction (euro)</th>
            </tr>
          </thead>
          <tbody>
            {pledgeOrganizations ? (
              pledgeOrganizations.map((pledgeOrganization, i) => {
                return (
                  <ChooseOrganisationRow
                    key={i}
                    organizations={organizations}
                    organization={pledgeOrganization}
                    setOrganization={this.setOrganization(i)}
                    setCryptocurrency={this.setCryptocurrency(i)}
                  />
                )
              })
            ) : (
              <tr>
                <td>Loading..</td>
              </tr>
            )}
            <tr>
              <td colSpan="5">
                <Button onClick={this.addOrganization}>
                  + Add a Organization
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}
