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
import CarbonCalculatorManualItem from './CarbonCalculatorManualItem'
import { cryptocurrenciesManual } from '../../util/static'
export default class CarbonCalculatorManual extends React.Component {
  removeItem = i => {
    const { manualItems, setManualItems } = this.props
    setManualItems(manualItems.filter((item, index) => index !== i))
  }
  // updateDate = i => key => event => {
  // }
  updateItem = i => key => event => {
    const { setManualItems, manualItems } = this.props
    const newItems = [...manualItems]
    newItems[i][key] = event.target.value
    setManualItems(newItems)
  }
  handleCalculate = () => {
    const { manualItems } = this.props
    const filledManualItems = manualItems.filter(
      item => item.numberOfTransactions !== 0
    )
    console.log(filledManualItems)
  }
  render() {
    const { addManualItem, manualItems } = this.props
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
              removeItem={this.removeItem}
            />
          )
        })}
        <Field isHorizontal>
          <FieldLabel />
          <FieldBody>
            <Field>
              <Control>
                <Button isColor="primary" onClick={this.handleCalculate}>
                  Calculate
                </Button>

                <Button isColor="light" onClick={addManualItem}>
                  + Add address
                </Button>
              </Control>
            </Field>
          </FieldBody>
        </Field>
      </React.Fragment>
    )
  }
}
