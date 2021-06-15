import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCTeoNwXPapveWsaDCOBX8pSnnXH9AtkVg",
  authDomain: "expensify-b188b.firebaseapp.com",
  databaseURL: "https://expensify-b188b-default-rtdb.firebaseio.com",
  projectId: "expensify-b188b",
  storageBucket: "expensify-b188b.appspot.com",
  messagingSenderId: "821801296832",
  appId: "1:821801296832:web:3c0ca99b1397ffc02ade25"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Cecilia Benitez'
});