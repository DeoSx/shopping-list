import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

firebase.initializeApp({
  apiKey: 'AIzaSyBJ2TxUvt3JLSuqHmdvcJMYHxyFssEJKuQ',
  authDomain: 'shopping-list-a1e78.firebaseapp.com',
  projectId: 'shopping-list-a1e78',
  storageBucket: 'shopping-list-a1e78.appspot.com',
  messagingSenderId: '845594953838',
  appId: '1:845594953838:web:b38c59b8c43485091cfe7f',
  measurementId: 'G-Z3DGH3HH40'
})

ReactDOM.render(<App />, document.getElementById('root'))
