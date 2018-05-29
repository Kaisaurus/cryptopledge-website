import React from 'react'
import PropTypes from 'prop-types'
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
import CarbonCalculatorManualItem from './CarbonCalculatorManualItem'
import { cryptocurrenciesManual } from '../../util/static'

export default class CarbonCalculatorManual extends React.Component {
  static propTypes = {
    addManualItem: PropTypes.func.isRequired,
    manualItems: PropTypes.array.isRequired,
    CO2Data: PropTypes.object,
    CO2DataRange: PropTypes.object
  }
  removeItem = i => () => {
    const { manualItems, setManualItems } = this.props
    setManualItems(manualItems.filter((item, index) => index !== i))
  }
  updateItem = i => key => value => {
    const { setManualItems, manualItems } = this.props
    const newItems = [...manualItems]
    newItems[i][key] = value
    setManualItems(newItems)
  }
  handleCalculate = () => {
    const { manualItems, setManualItems, CO2Data } = this.props
    const nonEmptyItems = manualItems.filter(
      item => item.numberOfTransactions > 0
    )
    if (nonEmptyItems.length > 0) {
      // setManualItems(nonEmptyItems)
      manualItems.map((item, i) => this.calculateItem(item, i))
    }
  }
  calculateItem = (item, i) => {
    const { CO2Data } = this.props
    const matchedDataEntry = CO2Data[item.cryptocurrencyData].find(dataItem =>
      item.transactionDate.isSame(dataItem.date, 'day')
    )
    if (!matchedDataEntry) return console.log('error: no matched entry')
    const CO2eOutput = matchedDataEntry.value * item.numberOfTransactions
    this.updateItem(i)('CO2eOutput')(CO2eOutput)
  }
  render() {
    const { addManualItem, manualItems, CO2Data, CO2DataRange } = this.props
    const CO2DataIsLoaded = !Object.keys(CO2DataRange).length > 0
    const totalCO2eOutput = manualItems.reduce(
      (acc, item) => acc + item.CO2eOutput,
      0
    )
    return (
      <React.Fragment>
        {manualItems.map((item, i) => {
          return (
            <CarbonCalculatorManualItem
              cryptocurrencies={cryptocurrenciesManual}
              key={i}
              index={i}
              updateItem={this.updateItem(i)}
              item={item}
              removeItem={this.removeItem(i)}
              CO2DataRange={CO2DataRange}
            />
          )
        })}
        {totalCO2eOutput > 0 && (
          <Field isHorizontal>
            <FieldLabel>
              <Label>Total CO2eOutput</Label>
            </FieldLabel>
            <FieldBody>
              <strong>{totalCO2eOutput}</strong>
            </FieldBody>
          </Field>
        )}
        <Field isHorizontal>
          <FieldLabel />
          <FieldBody>
            <Control>
              <Button
                isColor="primary"
                onClick={this.handleCalculate}
                isLoading={CO2DataIsLoaded}
              >
                Calculate
              </Button>

              <Button onClick={addManualItem} isLoading={CO2DataIsLoaded}>
                + Add address
              </Button>
            </Control>
          </FieldBody>
        </Field>
      </React.Fragment>
    )
  }
}
