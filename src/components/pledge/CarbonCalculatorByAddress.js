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
import { Z_VERSION_ERROR } from 'zlib'

const cryptocurrencies = {
  btc: 'Bitcoin (BTC)',
  bth: 'Bitcoin Cash (BTH)',
  eth: 'Ethereum (ETH)'
}

const defaultItem = { cryptocurrency: 'btc', address: '' }

export default class CarbonCalculatorByAddress extends React.Component {
  state = {
    items: [Object.assign({}, defaultItem)]
  }
  updateItem = i => key => event => {
    const { items } = this.state
    const newItems = [...items]
    newItems[i][key] = event.target.value
    this.setState({ items: newItems })
  }
  removeItem = i => {
    const { items } = this.state
    this.setState({
      items: items.filter((item, index) => index !== i)
    })
  }
  addItem = () => {
    this.setState(prevState => {
      return {
        items: [...prevState.items].concat(Object.assign({}, defaultItem))
      }
    })
  }
  render() {
    return (
      <React.Fragment>
        {this.state.items.map((item, i) => {
          return (
            <CarbonCalculatorByAddressItem
              cryptocurrencies={cryptocurrencies}
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
                <Button isColor="light" onClick={this.addItem}>
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
