import * as types from '../actions/types'
import moment from 'moment'
import { defaultState, defaultAddressItem, defaultManualItem } from './defaults'

function setMaxDate(item, CO2DataRange) {
  // this sets date to maxdate if the current date is beyond the date range of which we have data
  const maxDate = CO2DataRange[item.cryptocurrencyData].maxDate
  if (item.transactionDate.diff(maxDate) >= 0)
    return { ...item, transactionDate: maxDate }
  return item
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_CO2_DATA:
      return {
        ...state,
        CO2DataStatus: 'getting'
      }
    case types.GET_CO2_DATA_FULFILLED: {
      const CO2Data = action.payload
      const CO2DataRange = {}
      // this sets date to maxdate if the current date is beyond the date range of which we have data
      Object.keys(CO2Data).map(key => {
        const dates = CO2Data[key].map(item => moment(item.date, 'DD-MM-YYYY'))
        CO2DataRange[key] = {
          maxDate: moment.max(dates),
          minDate: moment.min(dates)
        }
      })
      return {
        ...state,
        CO2DataStatus: 'fulfilled',
        CO2DataRange,
        manualItems: state.manualItems.map(item =>
          setMaxDate(item, CO2DataRange)
        ),
        CO2Data
      }
    }
    case types.GET_CO2_DATA_FAILED:
      return {
        ...state,
        CO2DataStatus: 'failed'
      }

    case types.SET_PLEDGE_ORGANIZATIONS:
      return {
        ...state,
        pledgeOrganizations: action.payload
      }
    // case types.SET_ADDRESS_ITEMS:
    //   return {
    //     ...state,
    //     addressItems: action.payload
    //   }
    // case types.ADD_ADDRESS_ITEM:
    //   return {
    //     ...state,
    //     addressItems: [...state.addressItems].concat(
    //       Object.assign({}, defaultAddressItem)
    //     )
    //   }
    case types.SET_MANUAL_ITEMS:
      return {
        ...state,
        manualItems: action.payload
      }
    case types.ADD_MANUAL_ITEM: {
      const newItem = Object.assign({}, defaultManualItem)
      return {
        ...state,
        manualItems: [...state.manualItems].concat(
          setMaxDate(newItem, state.CO2DataRange)
        )
      }
    }
    case types.CLEAR_PLEDGE_DATA: {
      return defaultState
    }
    default:
      return state
  }
}
