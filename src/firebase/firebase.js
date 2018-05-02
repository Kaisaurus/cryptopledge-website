import * as firebase from 'firebase'

const prodConfig = {
  apiKey: 'AIzaSyAPLMQclGQI-pbZFK_Y6m2N58U8lmllD9I',
  authDomain: 'carboncryptopledge.firebaseapp.com',
  databaseURL: 'https://carboncryptopledge.firebaseio.com',
  projectId: 'carboncryptopledge',
  storageBucket: 'carboncryptopledge.appspot.com',
  messagingSenderId: '639042661594'
}

// const devConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTH_DOMAIN,
//   databaseURL: YOUR_DATABASE_URL,
//   projectId: YOUR_PROJECT_ID,
//   storageBucket: '',
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID
// }

// const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig
const config = prodConfig

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.database()
const auth = firebase.auth()

export { db, auth }
