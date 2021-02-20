<script>
    import { Doc, Collection } from "sveltefire";
    export let uid;

    let postText = 'some post';
    let commentText = 'some comment on post';

</script>

 <div class="px-4 py-5 sm:px-6">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      POST
    </h3>
    <p class="mt-1 max-w-2xl text-sm text-gray-500">
      Post information and comments
    </p>
  </div>

<Doc path={`posts/${uid}`} let:data={post} let:ref={postRef} log>

    <input type="text" bind:value={postText} />
    <p>Your post: {post.text}</p>
    <button on:click={() => postRef.set({ text:postText, complete: false})}>
                    Update Post
    </button>

    <br> <br> <hr> <br>


    <h2>POST:</h2>
    <ul>
        {post.text}
    </ul>

    <span slot="loading">Loading...</span>
    <span slot="fallback">
        <input type="text" bind:value={postText} />
        <p>Your post: {postText}</p>
        <button on:click={() => postRef.set({ text:postText, complete: false})}>
                        Create Post
        </button>
    </span>

    <br> <br> <hr> <br>

    <Collection path={postRef.collection('comments')} query={ref => ref.orderBy('createdAt')} let:data={comments} let:ref={commentsRef} log>
        {#if !comments.length}
            No comments yet...
        {/if}

        <h2>COMMENTS:</h2>
        {#each comments as comment}
            <p class="hidden">ID: {comment.ref.id}</p>
            <p>{comment.text}
            <button on:click={() => comment.ref.delete()}>Delete</button></p>
        {/each}


        <br> <br> <hr> <br>

        <input type="text" bind:value={commentText} />
        <p>Your comment: {commentText}</p>
        <button on:click={() => commentsRef.add({
                text:commentText,
                createdAt:Date.now()
                })}>
            Add Comment
        </button>

        <span slot="loading">Loading comments....</span>
    </Collection>

</Doc>
