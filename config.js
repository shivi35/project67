import firebase from 'firebase';

// add SDK Firebase
 {const firebaseConfig = {
    apiKey: "AIzaSyClGjXjPBrgFqhtjo3NJ3TSvQU3B-2ikHM",
    authDomain: "project68-bf007.firebaseapp.com",
    databaseURL: "https://project68-bf007-default-rtdb.firebaseio.com",
    projectId: "project68-bf007",
    storageBucket: "project68-bf007.appspot.com",
    messagingSenderId: "300891759241",
    appId: "1:300891759241:web:df32373e291d1e7ee79c58"
  };

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();