import React from 'react'
import { Control, Select } from 'bloomer'
import { cryptocurrenciesManual } from '../util/static'
import { Button } from 'bloomer/lib/elements/Button'
import PropTypes from 'prop-types'

const OrganizationsTable = ({ organizations, handlePledge }) => {
  return (
    <table className="table is-narrower is-hoverable">
      <thead>
        <tr>
          <th />
          <th>Organization</th>
          <th>Offsetting effectiveness tonnes of CO2 offset per euro</th>
          <th>Suggested donation per transaction (euro)</th>
          <th>Accepted Cryptocurrency</th>
        </tr>
      </thead>
      <tbody>
        {organizations ? (
          organizations.map((organization, i) => {
            return (
              <tr key={i}>
                <td>
                  {' '}
                  {handlePledge && <Button isColor="primary">Pledge</Button>}
                </td>

                <td>
                  <a href={organization.url}>{organization.name}</a>
                </td>
                <td>{organization.effectiveness}</td>
                <td>{organization.donation}</td>
                <td>
                  {Object.values(cryptocurrenciesManual).map(
                    item => `${item},`
                  )}
                </td>
              </tr>
            )
          })
        ) : (
          <tr>
            <td>Loading data..</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default OrganizationsTable

OrganizationsTable.propTypes = {
  organizations: PropTypes.array.isRequired
}
