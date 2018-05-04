import React from 'react'
import {
  Field,
  FieldBody,
  FieldLabel,
  Label,
  Input,
  Control,
  Select,
  Button
} from 'bloomer'
import CarbonCalculatorByAddressItem from './CarbonCalculatorByAddressItem'
import PropTypes from 'prop-types'
import { cryptocurrenciesByAddress } from '../../util/static'

export default class CarbonCalculatorByAddress extends React.Component {
  static propTypes = {
    addressItems: PropTypes.array.isRequired,
    setAddressItems: PropTypes.func.isRequired
  }
  updateItem = i => key => event => {
    const { setAddressItems, addressItems } = this.props
    const newItems = [...addressItems]
    newItems[i][key] = event.target.value
    setAddressItems(newItems)
  }
  removeItem = i => {
    const { addressItems, setAddressItems } = this.props
    setAddressItems(addressItems.filter((item, index) => index !== i))
  }
  render() {
    const { addressItems, addAddressItem } = this.props
    return (
      <React.Fragment>
        {addressItems.map((item, i) => {
          return (
            <CarbonCalculatorByAddressItem
              cryptocurrencies={cryptocurrenciesByAddress}
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
                <Button isColor="light" onClick={addAddressItem}>
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
