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
