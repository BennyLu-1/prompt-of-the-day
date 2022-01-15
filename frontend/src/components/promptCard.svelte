<script>
    export let prompt;

</script>
<a href="/prompt/{prompt.id}">
    <div class="py-5">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <h2 class="card-title">{prompt.attributes.content}</h2>
                    <hr class="my-4">
                    <div class="flex flex-wrap items-center">
                        <p class="mx-2 text-gray-500 text-sm">
                            By: {prompt.attributes.author.data.attributes.username}
                            <br>
                            {new Date(prompt.attributes.createdAt).toDateString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</a>