import React from 'react'
import PropTypes from 'prop-types'
import ChooseOrganisation from './ChooseOrganisation'
import { Field, Control, Select } from 'bloomer'
import CarbonCalculatorCryptocurrencyField from './CarbonCalculatorCryptocurrencyField'
import { cryptocurrenciesManual } from '../../util/static'

const ChooseOrganisationRow = ({
  organizations,
  organization,
  setOrganization,
  setCryptocurrency
}) => {
  return (
    <tr>
      <td>
        <Control>
          <Select onChange={e => setOrganization(e.target.value)}>
            {organizations.map((organization, i) => {
              return (
                <option key={i} value={i}>
                  {organization.name}
                </option>
              )
            })}
          </Select>
        </Control>
      </td>
      <td>
        <CarbonCalculatorCryptocurrencyField
          onChange={e => setCryptocurrency(e.target.value)}
          cryptocurrencies={cryptocurrenciesManual}
        />
      </td>
      <td>{organization.effectiveness}</td>
      <td>{organization.donation}</td>
    </tr>
  )
}

ChooseOrganisationRow.propTypes = {}

export default ChooseOrganisationRow
