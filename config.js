import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyDBlxQC_aEgVkQUk4fXGfpMSl6JVBrww-8",
    authDomain: "booksanta-de328.firebaseapp.com",
    databaseURL: "https://booksanta-de328.firebaseio.com",
    projectId: "booksanta-de328",
    storageBucket: "booksanta-de328.appspot.com",
    messagingSenderId: "452667017573",
    appId: "1:452667017573:web:67e70ff87128448c18b98c"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
