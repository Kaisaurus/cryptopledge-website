import moment from 'moment'
import {
  cryptocurrenciesByAddress,
  cryptocurrenciesManual
} from '../util/static'
export const defaultAddressItem = {
  cryptocurrency: Object.keys(cryptocurrenciesByAddress)[0],
  address: ''
}
export const defaultManualItem = {
  cryptocurrency: Object.keys(cryptocurrenciesManual)[0],
  numberOfTransactions: 0,
  transactionDate: moment()
}
export const defaultState = {
  addressItems: [Object.assign({}, defaultAddressItem)],
  manualItems: [Object.assign({}, defaultManualItem)],
  CO2Data: {},
  pledgeOrganizations: [],
  CO2DataStatus: 'init'
}
