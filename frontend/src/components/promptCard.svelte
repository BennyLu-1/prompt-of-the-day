<script>
    export let prompt;

</script>
<a href="/prompt/{prompt.id}">
    <div class="w-full p-4">
        <div class="p-8 rounded-xl shadow-md bg-white">
            <p class="text-base">"{prompt.attributes.content}"</p>
            <hr class="my-4">
            <div class="flex flex-wrap items-center"><img class="w-12 h-12 rounded-full" alt="{prompt.attributes.author.data.attributes.username}" src="https://tailwindcomponents.com/storage/avatars/baG0wMQUtoTOZOOmStaUBVQsa7LAwc5HjiGZMjdB.png">
                <p class="mx-2 text-gray-500 text-sm">
                    {prompt.attributes.author.data.attributes.username}
                    <br>
                    {new Date(prompt.attributes.createdAt).toDateString()}
                </p>
            </div>
        </div>
    </div>
</a>