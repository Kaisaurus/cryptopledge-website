import React from 'react'
import {
  Field,
  FieldLabel,
  FieldBody,
  Label,
  Input,
  Control,
  Select,
  Button
} from 'bloomer'
import DatePicker from '../DatePicker'

export default class CarbonCalculatorManual extends React.Component {
  state = {
    selectedDay: undefined
  }
  handleDayChange(day) {
    this.setState({ selectedDay: day })
  }
  render() {
    const { selectedDay } = this.state
    return (
      <React.Fragment>
        <Field isHorizontal>
          <FieldLabel isNormal>
            <Label>Cryptocurrency*</Label>
          </FieldLabel>
          <FieldBody>
            <Control>
              <Select>
                <option>Bitcoin (BTC)</option>
                <option>Bitcoin Cash (BTH)</option>
                <option>Ethereum (ETH)</option>
              </Select>
            </Control>
          </FieldBody>
        </Field>
        <Field isHorizontal>
          <FieldLabel isNormal>
            <Label>Number of Transactions*</Label>
          </FieldLabel>
          <FieldBody>
            <Field>
              <Control>
                <Input
                  type="text"
                  // onChange={this.props.updateItem('address')}
                  placeholder="Number of transactions"
                  // value={address}
                />
              </Control>
            </Field>
          </FieldBody>
        </Field>

        <Field isHorizontal>
          <FieldLabel isNormal>
            <Label>Transaction Date</Label>
          </FieldLabel>
          <FieldBody>
            <DatePicker />
          </FieldBody>
        </Field>
      </React.Fragment>
    )
  }
}
