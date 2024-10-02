<script>
	import Carousel from "../lib/carousel/carousel.svelte";
    import data from "../lib/dummy_data/final_articles_techCrunch.json"
    // let cardsData = [
    //     {
    //         name: "tuhi"
    //     }
    //     ,
    //     {
    //         name: "unnu"
    //     }
    // ]

    let cardsData = data
</script>

<div class="w-screen h-screen "> 
 <Carousel {cardsData}/>
</div>


  