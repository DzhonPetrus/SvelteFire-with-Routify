  import firebase from "firebase/app";
  import "firebase/firestore";

  const firebaseConfig = {
  // Insert Firebase Credentials here
    apiKey: "AIzaSyCMTYkmPlOHB9pLZv-xPm3KsknTV4mXk0Q",
    authDomain: "sveltefire-70ed5.firebaseapp.com",
    projectId: "sveltefire-70ed5",
    storageBucket: "sveltefire-70ed5.appspot.com",
    messagingSenderId: "680146669188",
    appId: "1:680146669188:web:56d33e057fd46e59dc7cd1",
    measurementId: "G-KJ5CJ0X6CG"
  };

  firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
