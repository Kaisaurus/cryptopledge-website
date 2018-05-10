import * as types from './types'
import { db } from '../firebase'
import moment from 'moment'

export function getCO2Data() {
  return dispatch => {
    dispatch({ type: types.GET_CO2_DATA })
    db
      .getAllKgCO2eData()
      .then(snapshot => {
        const data = snapshot.val()
        const formattedData = {}

        Object.keys(data).map(crypto => {
          // formattedData[crypto] = data[crypto]
          // console.log(crypto, data[crypto])
          Object.keys(data[crypto]).map(
            date => console.log(date, data[crypto][date])
            // console.log(item, moment(item[0]).format('MMM Do YY'))
          )
        })
        // console.log(formattedData, data)
        dispatch({
          type: types.GET_CO2_DATA_FULFILLED,
          payload: snapshot.val()
        })
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: types.GET_CO2_DATA_FAILED, payload: error })
      })
  }
}
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
