import { db } from './firebase'

// User API

// export const doCreateUser = (id, username, email) =>
//   db.ref(`users/${id}`).set({
//     username,
//     email,
//   });

// export const onceGetUsers = () =>
//   db.ref('users').once('value');

export const getAllKgCO2eData = type =>
  db.ref(`KgCO2PerTransaction`).once('value')

export const getKgCO2e = type =>
  db.ref(`KgCO2PerTransaction/${type}`).once('value')

export const getBitcoinKgCO2e = () =>
  db.ref('BitcoinBitcoinCashKgCO2ePerTransaction').once('value')

export const getBitcoinCashKgCO2e = () =>
  db.ref('BitcoinCashKgCO2ePerTransaction').once('value')

export const getEthereumCashKgCO2e = () =>
  db.ref('EthereumKgCO2ePerTransaction').once('value')

export const getDonorLeaderBoard = () =>
  db.ref('DonorLeaderBoard').once('value')
