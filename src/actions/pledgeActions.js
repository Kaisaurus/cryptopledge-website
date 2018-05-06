import * as types from './types'

export function setAddressItems(data) {
  return dispatch => {
    dispatch({ type: types.SET_ADDRESS_ITEMS, payload: data })
  }
}
export function addAddressItem() {
  return dispatch => {
    dispatch({ type: types.ADD_ADDRESS_ITEM })
  }
}
export function setManualItems(data) {
  return dispatch => {
    dispatch({ type: types.SET_MANUAL_ITEMS, payload: data })
  }
}
export function addManualItem() {
  return dispatch => {
    dispatch({ type: types.ADD_MANUAL_ITEM })
  }
}
export function clearPledgeData() {
  return dispatch => {
    dispatch({ type: types.CLEAR_PLEDGE_DATA })
  }
}
