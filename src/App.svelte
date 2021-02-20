<script>

  import { FirebaseApp, User } from "sveltefire";
  import Login from './components/Login.svelte';
  import Dashboard from './components/Dashboard.svelte';

  import firebase from "firebase/app";
  import "firebase/firestore";
  import "firebase/auth";
  import "firebase/performance";
  import "firebase/analytics";
  import 'firebase/storage';

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
    let email='';
    let password='';
</script>



<FirebaseApp {firebase}>
  <User persist={sessionStorage} let:user let:auth>
    <div slot="signed-out">
      <Login {auth}/>
    </div>

    <Dashboard {user} {auth} />

  </User>
</FirebaseApp>
