<script>
	import Carousel from "../lib/carousel/carousel.svelte";
    // import data from "../lib/dummy_data/final_articles_techCrunch.json"
    export let data
    const {allNews} = data
    // let cardsData = [
    //     {
    //         name: "tuhi"
    //     }
    //     ,
    //     {
    //         name: "unnu"
    //     }
    // ]

    let cardsData = allNews.news
</script>

<div class="w-screen h-screen "> 
 <Carousel {cardsData}/>
</div>


  