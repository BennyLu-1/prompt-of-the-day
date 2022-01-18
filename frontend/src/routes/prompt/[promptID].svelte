<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    export const load: Load = async ({ params, fetch }) => {
        const res = await fetch(import.meta.env.VITE_CMS_API_URL+'prompts/'+params.promptID+'?populate=author,posts,posts.author');
        const data = await res.json();
        return { props: { prompt: data.data } };
    };
</script>

<script lang="ts">
import { set_attributes } from "svelte/internal";

    //export let prompts: Prompt[];
    export let prompt: any;
    let buttonText = "Submit";
    const submitPost = (e) => {
        buttonText = "Posting...";
        e.currentTarget.classList.add("loading");
    }
</script>

<div class="py-5">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 bg-white border-b border-gray-200">
                <h2 class="card-title text-gray-500">{prompt.attributes.content}</h2>
                <p class="text-gray-500 text-sm">Prompt by: {prompt.attributes.author.data.attributes.username} {new Date(prompt.attributes.createdAt).toDateString()}</p>
                <div class="divider"></div>
                <div class="form-control">
                    <textarea name="post" class="textarea h-24" placeholder="Use the prompt to write something here..."></textarea>
                </div>
                <div class="card-actions">
                    <button role="button" id="submit" class="btn btn-primary" on:click|once|preventDefault={submitPost} required>{buttonText}</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="py-5">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            {#each prompt.attributes.posts.data as post}
                <div class="p-6 bg-white border-b border-gray-200">
                    <p class="card-boddy text-gray-500">{post.attributes.Content}</p>
                    <p class="text-gray-500 text-sm">Post by: {post.attributes.author.data.attributes.username} {new Date(post.attributes.createdAt).toDateString()}</p>
                </div>
            {/each}
        </div>
    </div>
</div>