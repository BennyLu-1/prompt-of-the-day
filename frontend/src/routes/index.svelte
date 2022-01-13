<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    import PromptCard from '../components/promptCard.svelte';

    export const load: Load = async ({ fetch }) => {
        const res = await fetch('/prompts');
        const data = await res.json();
        
        return { props: { prompts: data.data } };
    };
</script>

<script lang="ts">
    //import type { Prompt } from '$lib/types';
    import { goto } from "$app/navigation"

    //export let prompts: Prompt[];
    export let prompts: any;
</script>
<svelte:head>
    <title>Prompt of the Day</title>
</svelte:head>

<div class="container mx-auto mt-4">
    {#each prompts as prompt}
        <PromptCard prompt={prompt}/>
    {/each}
</div>