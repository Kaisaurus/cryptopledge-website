import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, Control, Checkbox } from 'bloomer'

export default class ChooseOrganisation extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    return (
      <div>
        choose org
        <Field>
          <Control>
            <Checkbox> Org 1 </Checkbox>
          </Control>
        </Field>
      </div>
    )
  }
}
