import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, Control, Checkbox } from 'bloomer'

export default class OrganizationPicker extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    const { organzations } = this.props
    return (
      <div>
        <Select onChange={}>
        {Object.entries(cryptocurrencies).map((cryptocurrency, i) => (
          <option key={i} value={cryptocurrency[0]}>
            {cryptocurrency[1]}
          </option>
        ))}
      </Select>
      </div>
    )
  }
}
