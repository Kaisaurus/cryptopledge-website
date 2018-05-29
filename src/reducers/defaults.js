import moment from 'moment'
import {
  cryptocurrenciesByAddress,
  cryptocurrenciesManual
} from '../util/static'
export const defaultAddressItem = {
  cryptocurrency: cryptocurrenciesByAddress[0],
  address: ''
}
export const defaultManualItem = {
  cryptocurrencyLabel: cryptocurrenciesManual[0].label,
  cryptocurrencyData: cryptocurrenciesManual[0].data,
  numberOfTransactions: 0,
  CO2eOutput: 0,
  transactionDate: moment()
}
export const defaultState = {
  addressItems: [Object.assign({}, defaultAddressItem)],
  manualItems: [Object.assign({}, defaultManualItem)],
  CO2Data: {},
  pledgeOrganizations: [],
  CO2DataStatus: 'init',
  CO2DataRange: {}
}
