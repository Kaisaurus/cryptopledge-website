import React from 'react'
import {
  Field,
  FieldLabel,
  FieldBody,
  Label,
  Input,
  Control,
  Select,
  Button,
  Icon
} from 'bloomer'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTrashAlt from '@fortawesome/fontawesome-free-regular/faTrashAlt'
import PropTypes from 'prop-types'
import CarbonCalculatorCryptocurrencyField from './CarbonCalculatorCryptocurrencyField'

export default class CarbonCalculatorByAddressItem extends React.Component {
  state = {
    address: this.props.item.address
  }
  static propTypes = {
    updateItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    cryptocurrencies: PropTypes.object.isRequired,
    index: PropTypes.number
  }
  componentWillReceiveProps = nextProps =>
    this.setState({ address: nextProps.item.address })
  render() {
    const { index, removeItem, item, cryptocurrencies, updateItem } = this.props
    const { address } = this.state
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
              {index > 0 && (
                <Button onClick={() => removeItem(index)}>
                  <Icon>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </Icon>
                </Button>
              )}
            </Field>
          </FieldBody>
        </Field>
        <Field isHorizontal>
          <FieldLabel isNormal>
            <Label>Address*</Label>
          </FieldLabel>
          <FieldBody>
            <Field>
              <Control>
                <Input
                  type="text"
                  onChange={this.props.updateItem('address')}
                  placeholder="Address"
                  value={address}
                />
              </Control>
            </Field>
          </FieldBody>
        </Field>
      </React.Fragment>
    )
  }
}
