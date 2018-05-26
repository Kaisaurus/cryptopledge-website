import * as types from './types'
import { db } from '../firebase'
import moment from 'moment'

function CO2DataObjToArr(CO2DataObj) {
  return Object.entries(CO2DataObj).reduce((acc, entry) => {
    const entryObj = {
      date: moment(entry[0], 'MM-DD-YYYY').format('L'),
      value: entry[1]
    }
    acc.push(entryObj)
    return acc
  }, [])
}

export function getCO2Data() {
  return dispatch => {
    dispatch({ type: types.GET_CO2_DATA })
    db
      .getAllKgCO2eData()
      .then(snapshot => {
        const data = snapshot.val()
        let formattedData = {}
        Object.keys(data).map(key => {
          formattedData[key] = CO2DataObjToArr(data[key])
        })
        // formattedData = Object.keys(data).reduce((acc, crypto) => {
        //   acc[crypto] = Object.entries(data[crypto]).reduce((acc2, entry) => {
        //     formattedData.push({
        //       date: moment(entry[0], 'MM-DD-YYYY').format('L'),
        //       value: entry[1]
        //     })
        //   }, [])
        // }, {})
        dispatch({
          type: types.GET_CO2_DATA_FULFILLED,
          payload: formattedData
        })
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: types.GET_CO2_DATA_FAILED, payload: error })
      })
  }
}
export function setPledgeOrganizations(data) {
  return dispatch => {
    dispatch({ type: types.SET_PLEDGE_ORGANIZATIONS, payload: data })
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
