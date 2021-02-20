<script>
    import { Router } from '@sveltech/routify';
    import { routes } from '@sveltech/routify/tmp/routes';
    import { currentUser } from '../stores.js'

    import Nav from './Nav.svelte';
    import Todo from './Todo.svelte';
    import Post from './Post.svelte';
    import Profile from './Profile.svelte';

    export let auth;
    export let user;


    $: currentUser.set(user);
    console.log('user',user);
    console.log('currentUser',$currentUser);
</script>

<Nav {auth} {user}/>

<Router { routes } />



<!--

<br> <br> <br>

<div class="place-self-center w-full bg-white shadow px-8 py-12 md:px-12 lg:w-1/2">
  <Profile { user }></Profile>
</div>

<br> <br> <br>

<br> <br> <br>

<div class="place-self-center w-full bg-white shadow px-8 py-12 md:px-12 lg:w-1/2">
  <Post uid={user.uid}/>
</div>

<br> <br> <br>

<div class="place-self-center w-full bg-white shadow px-8 py-12 md:px-12 lg:w-1/2">
  <Todo uid={user.uid}/>
</div>

<br> <br> <br>



{#if file && filename}
    <UploadTask {file} {path} let:task let:snapshot let:downloadURL={url}>
        Uploading your file...

        Progress: {(snapshot.bytesTransferred / snapshot.totalBytes) * 100} %

        <div slot="complete">
            Success! Download here
            <a href={url}>here</a>
                <img src={url} alt="uploaded picture">
        </div>

        <div slot="fallback">
            Error or cancelled
        </div>

    </UploadTask>
{:else}
    <div class="col-span-6 sm:col-span-3">
        <label for="filename" class="block text-sm font-medium text-gray-700">File Name</label>
        <input bind:value={filename} type="text" name="filename" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">File</label>
      <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div class="space-y-1 text-center">
          <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="flex text-sm text-gray-600">
            <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <span>Upload a file</span>
              <input bind:files={files} id="file-upload" name="file-upload" type="file" class="sr-only" >
            </label>
          </div>
          <p class="text-xs text-gray-500">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      </div>
    </div>
{/if}

<br> <br> <br>



{#if showDownload}
    <StorageRef path={downloadPath} let:downloadURL let:ref meta let:metadata >

        <img src="{downloadURL}" alt="file"/>

        <div slot="loading">
            loading...
        </div>

        <div slot="fallback">
            Error,
            <a on:click={() => showDownload=false} href="#">Try again!</a>
        </div>

    </StorageRef>
{:else}
    <div class="col-span-6 sm:col-span-3">
        <label for="fileDownload" class="block text-sm font-medium text-gray-700">File Name to Download</label>
        <input bind:value={downloadFilename} type="text" name="fileDownload" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
    </div>
    <div class="mt-8">
        <button on:click={() => showDownload=true}  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Download</button>
        </div>
{/if}


-->
