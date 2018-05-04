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
  state = {
    selectedDay: undefined
  }
  handleDayChange(day) {
    this.setState({ selectedDay: day })
  }
  removeItem = i => {
    const { manualItems, setManualItems } = this.props
    setManualItems(manualItems.filter((item, index) => index !== i))
  }
  updateItem = i => key => event => {
    const { setManualItems, manualItems } = this.props
    const newItems = [...manualItems]
    newItems[i][key] = event.target.value
    setManualItems(newItems)
  }
  render() {
    const { addManualItem, manualItems } = this.props
    const { selectedDay } = this.state
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
            <Field isGrouped>
              <Control>
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
