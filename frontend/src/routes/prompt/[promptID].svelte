<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    export const load: Load = async ({ params, fetch }) => {
        const res = await fetch(import.meta.env.VITE_CMS_API_URL+'prompts/'+params.promptID);
        const data = await res.json();
        return { props: { prompt: data.data } };
    };
</script>

<script lang="ts">
    //export let prompts: Prompt[];
    export let prompt: any;
</script>

<div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 bg-white border-b border-gray-200">
                <h2 class="card-title">{prompt.attributes.content}</h2>
                <form method="POST" action="action.php">
                    <div class="form-control">
                        <textarea name="post" class="textarea h-24" placeholder="Use the prompt to write something here..."></textarea>
                    </div>
                    <div class="card-actions">
                        <button id="submit" class="btn btn-primary" required>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>