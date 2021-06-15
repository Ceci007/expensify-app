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

const database = firebase.database();

database.ref().set({
  name: 'Cecilia Benitez',
  age: 25,
  isSingle: false,
  location: {
    city: 'Asuncion',
    country: 'Paraguay'
  }
}).then(() => {
  console.log('Data was saved');
}).catch((error) => {
  console.log('This failed', error);
});

/*
database.ref('age').set(22);
database.ref('location/city').set('Aregua');
database.ref('attributes').set({
  height: 62,
  weight: 100
});
*/