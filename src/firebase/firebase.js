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

database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 8962360
});

database.ref('expenses').push({
  description: 'Phone bill',
  note: '',
  amount: 300,
  createdAt: 8962360
});

database.ref('expenses').push({
  description: 'Food',
  note: '',
  amount: 1200,
  createdAt: 8962360
});

/*
const notes = [
  {
    id: '1',
    title: 'Node.Js',
    body: 'This a course on Node.Js'
  },
  {
    id: '2',
    title: 'React Fundamentals',
    body: 'This is a course on React fundamentals'
  },
  {
    id: '3',
    title: 'Third Note',
    body: 'This is my third note'
  }
];

const onValueChange = database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(val);
  console.log(`${val.name} is a ${val.job}!`);
}, (error) => {
  console.log('Failed to cancel subscription', error);
});

setTimeout(() => {
  database.ref('age').set(25);
}, 4000);

setTimeout(() => {
  database.ref().off(onValueChange);
}, 8000);

setTimeout(() => {
  database.ref('age').set(30);
}, 12000);
*/
/*
database.ref().once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((error) => {
    console.log('Error fetching data', error);
  });
*/
/*
database.ref('isSingle')
  .remove()
  .then(() => {
    console.log('Data was removed');
  }).catch((error) => {
    console.log('Data did not changed', error);
  });
*/

/*
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

database.ref().update({
  name: 'Ceci',
  age: 23,
  job: 'Software Developer',
  isSingle: null,
  'location/city': 'Lambare'
}).then(() => {
  console.log('Data was updated');
}).catch((error) => {
  console.log('This failed', error);
});
*/