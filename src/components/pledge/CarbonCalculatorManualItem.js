import React from 'react'
import PropTypes from 'prop-types'
import {
  Field,
  FieldLabel,
  FieldBody,
  Label,
  Input,
  Button,
  Control,
  Select
} from 'bloomer'
import CarbonCalculatorCryptocurrencyField from './CarbonCalculatorCryptocurrencyField'
import DatePicker from '../DatePicker'
import ReactDatePicker from 'react-datepicker'
import TrashButton from '../TrashButton'
import { onKeyPressOnlyNumbers } from '../../util/utils'

export default class CarbonCalculatorManual extends React.Component {
  static propTypes = {
    cryptocurrencies: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    updateItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    removeItem: PropTypes.func.isRequired,
    CO2DataRange: PropTypes.object.isRequired
  }
  updateInputItem = key => event => {
    this.props.updateItem(key)(event.target.value)
  }
  handleCryptocurrencyChange = e => {
    const { updateItem } = this.props
    const label = e.target.value
    const datakey = Array.from(e.target.children)
      .find(option => option.value === label)
      .getAttribute('data-datakey')
    updateItem('cryptocurrencyLabel')(label)
    updateItem('cryptocurrencyData')(datakey)
  }
  render = () => {
    const {
      cryptocurrencies,
      index,
      CO2DataRange,
      updateItem,
      removeItem,
      item
    } = this.props

    return (
      <React.Fragment>
        <Field isHorizontal>
          <FieldLabel isNormal>
            <Label>Record {index + 1}</Label>
          </FieldLabel>
          <FieldBody />
        </Field>
        <Field isHorizontal>
          <FieldLabel isNormal>
            <Label>Cryptocurrency*</Label>
          </FieldLabel>
          <FieldBody>
            <Field isGrouped>
              <CarbonCalculatorCryptocurrencyField
                cryptocurrencies={cryptocurrencies}
                onChange={this.handleCryptocurrencyChange}
                // onChange={this.updateInputItem('cryptocurrency')}
              />
              {index > 0 && <TrashButton onClick={removeItem} />}
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
                  onKeyPress={onKeyPressOnlyNumbers}
                  type="number"
                  onChange={this.updateInputItem('numberOfTransactions')}
                  placeholder="0"
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
            {Object.keys(CO2DataRange).length > 0 ? (
              <ReactDatePicker
                className="input"
                dateFormat="L"
                selected={item.transactionDate}
                onChange={updateItem('transactionDate')}
                maxDate={CO2DataRange[item.cryptocurrencyData].maxDate}
                minDate={CO2DataRange[item.cryptocurrencyData].minDate}
                readOnly
              />
            ) : (
              <Button isColor="link" isLoading />
            )}
          </FieldBody>
        </Field>
        {item.CO2eOutput > 0 && (
          <Field isHorizontal>
            <FieldLabel>
              <Label>CO2e Output:</Label>
            </FieldLabel>
            <FieldBody> {item.CO2eOutput}</FieldBody>
          </Field>
        )}
      </React.Fragment>
    )
  }
}
