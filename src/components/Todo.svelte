<script>
    import { Doc, Collection } from "sveltefire";
    export let uid;

    let todoText = 'some task';
    let commentText = 'some comment for task';

</script>

<div class="px-4 py-5 sm:px-6">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      TASK
    </h3>
    <p class="mt-1 max-w-2xl text-sm text-gray-500">
      Task information and comments
    </p>
  </div>

<Doc path={`todos/${uid}`} let:data={todo} let:ref={todoRef} log>

    <input type="text" bind:value={todoText} />
    <p>Your task: {todo.text}</p>
    <button on:click={() => todoRef.set({ text:todoText, complete: false})}>
                    Update Task
    </button>

    <br> <br> <hr> <br>


    <h2>TODO:</h2>
    <ul>
        {todo.text}
    </ul>

    <span slot="loading">Loading...</span>
    <span slot="fallback">
        <input type="text" bind:value={todoText} />
        <p>Your task: {todoText}</p>
        <button on:click={() => todoRef.set({ text:todoText, complete: false})}>
                        Create Task
        </button>
    </span>

    <br> <hr> <br>

    <Collection path={todoRef.collection('comments')} query={ref => ref.orderBy('createdAt')} let:data={comments} let:ref={commentsRef} log>
        {#if !comments.length}
            No comments yet...
        {:else}
            <h2>COMMENTS:</h2>
        {/if}

        {#each comments as comment}
            <p class="hidden">ID: {comment.ref.id}</p>
            <p>{comment.text}
            <button on:click={() => comment.ref.delete()}>🚮</button>
            <button on:click={() => comment.ref.update({text:'BOOM MAGIC!'})}>MAGIC!</button>
            </p>
        {/each}

        <br> <hr> <br>

        <input type="text" bind:value={commentText} />
        <p>Your comment: {commentText}</p>
        <button on:click={() => commentsRef.add({
                text:commentText,
                createdAt:Date.now()
                })}>
            Add Comment to Task
        </button>

        <span slot="loading">Loading comments....</span>
    </Collection>

</Doc>
