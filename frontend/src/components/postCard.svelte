<script>
    export let prompt;

</script>
<div class="py-5">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <a href="/prompt/{prompt.id}">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg border-2 hover:border-2 hover:border-sky-500">
                <div class="p-6 bg-white border-b border-gray-200">
                    <h2 class="card-title text-gray-500">{prompt.attributes.content}</h2>
                    <div class="divider"></div>
                    <div class="flex flex-wrap items-center">
                        <p class="text-gray-500 text-sm">
                            Prompt by: {prompt.attributes.author.data.attributes.username} {new Date(prompt.attributes.createdAt).toDateString()}
                        </p>
                    </div>
                </div>
            </div>
        </a>
    </div>
</div>