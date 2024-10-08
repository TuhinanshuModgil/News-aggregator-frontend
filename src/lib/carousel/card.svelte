<script>
    export let cardData = []
    async function add() {
        console.log("this is id", cardData._id)
		const response = await fetch('/apis/news/upvote', {
			method: 'POST',
			body: JSON.stringify({ newsItemId: cardData._id })
		});
		const res = await response.json();
        // console.log(object)
        console.log("this is res: ", res)
        cardData.upvotes = res.upvotes
	}
</script>
<div class="w-full h-full flex-shrink-0 p-4 overflow-auto">

    <h3 class="mb-2">
        {cardData.article_date}
</h3>
<h1 class="text-5xl font-semibold mb-2">
    {cardData.article_title}
</h1>
<div class="flex justify-between mb-2">
    <a href={cardData.article_url} target="_blank">
        <div class="flex items-center gap-2 text-blue-600">
            <h5 >Visit Source</h5> <span class="material-icons-outlined text-center text-blue-600">open_in_new</span> 
        </div>
    </a>
<div class="flex items-center gap-2 text-red-600">
    <button class="flex items-center " on:click={add}>
        <h5 class="text-lg">{cardData?.upvotes??0}</h5> <span class="material-icons-outlined text-center ">favorite</span> 
    </button>
</div>
</div>
<ul class="list-disc" >

    {#each cardData.article_text as newsPoint, index (index) }
    {#if newsPoint !== ""}
        
    <li class="mb-2">{newsPoint}</li>
    {/if}   
    
    {/each}
</ul>
</div>