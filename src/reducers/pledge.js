import * as types from '../actions/types'
import { defaultState, defaultAddressItem, defaultManualItem } from './defaults'

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_CO2_DATA:
      return {
        ...state,
        CO2DataStatus: 'getting'
      }
    case types.GET_CO2_DATA_FULFILLED: {
      return {
        ...state,
        CO2DataStatus: 'fulfilled',
        CO2Data: action.payload
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
    case types.SET_ADDRESS_ITEMS:
      return {
        ...state,
        addressItems: action.payload
      }
    case types.SET_MANUAL_ITEMS:
      return {
        ...state,
        manualItems: action.payload
      }
    case types.ADD_ADDRESS_ITEM:
      return {
        ...state,
        addressItems: [...state.addressItems].concat(
          Object.assign({}, defaultAddressItem)
        )
      }
    case types.ADD_MANUAL_ITEM:
      return {
        ...state,
        manualItems: [...state.manualItems].concat(
          Object.assign({}, defaultManualItem)
        )
      }
    case types.CLEAR_PLEDGE_DATA: {
      return defaultState
    }
    default:
      return state
  }
}
