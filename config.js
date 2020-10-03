import firebase from 'firebase';
require('@firebase/firestore')

// var firebaseConfig = {
//     apiKey: "AIzaSyDBlxQC_aEgVkQUk4fXGfpMSl6JVBrww-8",
//     authDomain: "booksanta-de328.firebaseapp.com",
//     databaseURL: "https://booksanta-de328.firebaseio.com",
//     projectId: "booksanta-de328",
//     storageBucket: "booksanta-de328.appspot.com",
//     messagingSenderId: "452667017573",
//     appId: "1:452667017573:web:67e70ff87128448c18b98c"
// };

var firebaseConfig = {
  apiKey: "AIzaSyDRHN618iWEIgjRHmJIFClGQ_0RGOVNh74",
  authDomain: "booksanta-app.firebaseapp.com",
  databaseURL: "https://booksanta-app.firebaseio.com",
  projectId: "booksanta-app",
  storageBucket: "booksanta-app.appspot.com",
  messagingSenderId: "104553584552",
  appId: "1:104553584552:web:4139acdd438f3e31af6f9d"
};


firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
