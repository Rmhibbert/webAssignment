<script>

    // these are the image apis that i am using for my gallery from the unsplash public api
    import { onMount } from "svelte";

    let imgs = [];
    let imges = [];
    const BASE_URL = `https://api.unsplash.com`;
    onMount(() => {
        fetch(
            `${BASE_URL}/search/photos?query=seashore-golden-hour&per_page=3&client_id=0nYy0tRh8bLy2fKjqlRajXGM5LAX5vxXTSXyKErDqB0`
        )
            .then((res) => res.json())
            .then((data) => {
                imgs = data.results;
            });

        fetch( 
            `${BASE_URL}/search/photos?query=horizontal-nice&per_page=3&client_id=0nYy0tRh8bLy2fKjqlRajXGM5LAX5vxXTSXyKErDqB0`
        )
            .then((rest) => rest.json())
            .then((item) => {
                imges = item.results;
            });
    });
</script>

<h1>Gallery</h1>
<h2>SunSplash Beverages Around The World</h2>


    <!-- I used a loop in my code to display the images, becuase its a gallery the all had the same style -->
<div class="outer">
    {#each imgs as img}
        <div class="imgboxs"><img src={img.urls.raw} /></div>       <!-- the src goes directly to the raw link ehich is accesed off the json file -->
    {/each}
</div>

<div class="outer">
    {#each imges as img}
        <div class="imgboxs"><img src={img.urls.raw} /></div>
    {/each}
</div>

<style>
    h2 {
        text-align: center;
    }

    /* this sets everything to margin 0  */
    * {
        margin: 0;
    }
    .outer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .imgboxs {
        width: 28%;
        display: flex;
        align-items: center;
    }

     /* this makes my  images have a rounded edges*/
    .imgboxs img {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        border-radius: 50px;
        padding: 25px;
    }

    .imgboxs:hover {
        overflow: hidden;
    }

    .imgboxs:hover > img {
        transition: transform 0.8s ease;
        border-radius: 50px;
        transform: scale(1.1);
    }



    @media screen and (max-width: 950px) {

        /* at screen width 950 i have flipped the flex direction so the images go fully asross the page */
        .imgboxs {
            width: 80%;
        }
        .outer {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
