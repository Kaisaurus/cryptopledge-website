import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Control, Select } from 'bloomer'

class CarbonCalculatorCryptocurrencyField extends Component {
  static propTypes = {
    cryptocurrencies: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }
  render = () => {
    const { cryptocurrencies, onChange } = this.props
    return (
      <Control>
        <Select onChange={onChange}>
          {cryptocurrencies.map((cryptocurrency, i) => (
            <option
              key={i}
              value={cryptocurrency.label}
              data-datakey={cryptocurrency.data}
            >
              {cryptocurrency.label}
            </option>
          ))}
        </Select>
      </Control>
    )
  }
}

export default CarbonCalculatorCryptocurrencyField
