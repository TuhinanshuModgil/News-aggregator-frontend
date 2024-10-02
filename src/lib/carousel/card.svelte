<script>
    export let cardData = []
</script>
<div class="w-full h-full flex-shrink-0 p-4 overflow-auto">

    <h3 class="mb-2">
        {cardData.article_date}
</h3>
<h1 class="text-5xl font-semibold mb-2">
    {cardData.article_title}
</h1>
<a href={cardData.article_url} target="_blank">

    <div class="flex items-center mb-2 gap-2 text-blue-600">
        <h5>Visit Source</h5> <span class="material-icons-outlined text-center text-blue-600">open_in_new</span> 
    </div>
</a>


<p>{cardData.article_text}</p>
</div>