<script>
    import firebase from "firebase/app";
    import { currentUser } from '../stores.js'
    const db = firebase.firestore();

    import { Doc, Collection } from "sveltefire";

    const user = $currentUser;

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


  <Doc path={`userProfile/${email}`} let:data={userProfile} let:ref={userProfileRef} on:data={e => profile=e.detail.data} log>

    <div class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img class="object-cover object-center w-full h-56" src={profile.photoURL} alt="avatar">


                <div class="px-6 py-4">
                  <h1 class="text-xl font-semibold text-gray-800 dark:text-white">{profile.fullName}</h1>


                    <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"/>
                        </svg>

                        <h1 class="px-2 text-sm">{profile.email}</h1>
                    </div>
                </div>
            </div>


    <span slot="loading">Loading...</span>
    <span slot="fallback">
        <button on:click={generateProfile(userProfileRef)}>
            Generate User Profile
        </button>

    </span>
</Doc>
