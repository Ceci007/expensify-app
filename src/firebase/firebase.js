import firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase }
export default database;

/*
// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

const onValueChange = database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });

  console.log(expenses);
}, (error) => {
  console.log('Failed to cancel subscription', error);
});
*/
/*
database.ref('expenses').once('value')
  .then((snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    console.log(expenses);
  })
  .catch((error) => {
    console.log('error: ', error);
  });
*/
/*
database.ref('expenses').push({
  description: 'Food',
  note: '',
  amount: 1200,
  createdAt: 8962360
});
*/
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