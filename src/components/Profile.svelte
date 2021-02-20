<script>
    import firebase from "firebase/app";
    const db = firebase.firestore();

    import { Doc, Collection } from "sveltefire";

    export let user;

    let profile={};

    const {email,  displayName} = user;
    let photoURL = user.photoURL;

        const generateProfile = (ref) => {
            if(photoURL == null)
                photoURL = `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`;
            ref.set({email, photoURL, fullName: displayName}).then(() => console.log('userProfile created!')).catch(error => console.log(error.code, error.message));
        };
</script>


 <div class="px-4 py-5 sm:px-6">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      User Profile
    </h3>
    <p class="mt-1 max-w-2xl text-sm text-gray-500">
      Information about the user's profile
    </p>

    <hr>

  </div>


  <Doc path={`userProfile/${user.email}`} let:data={userProfile} let:ref={userProfileRef} on:data={e => profile=e.detail.data} log>

    <h2>User Profile</h2>
    <h3>Full Name</h3>
    <p>{profile.fullName}</p>
    <h3>email</h3>
    <p>{profile.email}</p>
    <h3>photoURL</h3>
    <img src="{profile.photoURL}" alt="user picture">



    <span slot="loading">Loading...</span>
    <span slot="fallback">
        <button on:click={generateProfile(userProfileRef)}>
            Generate User Profile
        </button>

    </span>
</Doc>
