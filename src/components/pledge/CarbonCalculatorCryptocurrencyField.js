import React from 'react'
import PropTypes from 'prop-types'
import { Control, Select } from 'bloomer'
const CarbonCalculatorCryptocurrencyField = ({
  cryptocurrencies,
  onChange
}) => {
  return (
    <Control>
      <Select onChange={onChange}>
        {Object.entries(cryptocurrencies).map((cryptocurrency, i) => (
          <option key={i} value={cryptocurrency[0]}>
            {cryptocurrency[1]}
          </option>
        ))}
      </Select>
    </Control>
  )
}

CarbonCalculatorCryptocurrencyField.propTypes = {
  cryptocurrencies: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}
export default CarbonCalculatorCryptocurrencyField
