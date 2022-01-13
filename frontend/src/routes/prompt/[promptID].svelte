<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    export const load: Load = async ({ params, fetch }) => {
        const res = await fetch(process.env.CMS_API_URL+'prompts/'+params.promptID);
        const data = await res.json();
        return { props: { prompt: data.data } };
    };
</script>

<script lang="ts">
    //export let prompts: Prompt[];
    export let prompt: any;
    console.log(prompt);
</script>

<div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 bg-white border-b border-gray-200">
                <h1>{prompt.attributes.content}</h1>
                <form method="POST" action="action.php">
                    <div class="mb-8 w-auto">
                        <textarea name="content" class="border-2 border-gray-500 resize rounded-md w-full h-1/2">
                            
                        </textarea>
                    </div>

                    <div class="flex p-1">
                        <button role="submit" class="p-3 bg-blue-500 text-white hover:bg-blue-400" required>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>