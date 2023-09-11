import { getFirestore } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfiguration = {
  apiKey: 'AIzaSyCwFsLf4kmWdfI9Hi-D5GowXXL_EYd1NFI',
  authDomain: 'gpc-coffee.firebaseapp.com',
  projectId: 'gpc-coffee',
  storageBucket: 'gpc-coffee.appspot.com',
  messagingSenderId: '64663194752',
  appId: '1:64663194752:web:fd22e85c1c9c64afea2a65',
  measurementId: 'G-810G84CMXY',
}

export const app = initializeApp(firebaseConfiguration)
export const db = getFirestore(app)
