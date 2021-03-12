import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDMEv_k_56xWn3mq_-9mEynRVnEtLAt-IA',
  authDomain: 'pwc---hr-survey.firebaseapp.com',
  projectId: 'pwc---hr-survey',
  storageBucket: 'pwc---hr-survey.appspot.com',
  messagingSenderId: '342451220483',
  appId: '1:342451220483:web:1f5bebe7c8d605753c9e36',
};

firebase.initializeApp(firebaseConfig);

export const fb = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
