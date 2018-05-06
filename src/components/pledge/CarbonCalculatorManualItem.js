import React from 'react'
import PropTypes from 'prop-types'
import {
  Field,
  FieldLabel,
  FieldBody,
  Label,
  Input,
  Control,
  Select
} from 'bloomer'
import CarbonCalculatorCryptocurrencyField from './CarbonCalculatorCryptocurrencyField'
import DatePicker from '../DatePicker'
import ReactDatePicker from 'react-datepicker'
import moment from 'moment'
import TrashButton from '../TrashButton'

export default class CarbonCalculatorManual extends React.Component {
  static propTypes = {}
  updateDate = w => {
    console.log(w)
    // updateItem('transactionDate')
  }
  render() {
    const { cryptocurrencies, index, updateItem, removeItem, item } = this.props
    return (
      <React.Fragment>
        <Field isHorizontal>
          <FieldLabel isNormal>
            <Label>Cryptocurrency*</Label>
          </FieldLabel>
          <FieldBody>
            <Field isGrouped>
              <CarbonCalculatorCryptocurrencyField
                cryptocurrencies={cryptocurrencies}
                onChange={updateItem('cryptocurrency')}
              />
              {index > 0 && <TrashButton onClick={() => removeItem(index)} />}
            </Field>
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
                  onChange={updateItem('numberOfTransactions')}
                  placeholder="Number of transactions"
                  value={item.numberOfTransactions}
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
            <ReactDatePicker
              className="input"
              dateFormat="L"
              selected={item.transactionDate}
              onChange={this.updateDate}
            />
          </FieldBody>
        </Field>
      </React.Fragment>
    )
  }
}
