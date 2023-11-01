<h1>Gallery</h1>
<h2>SunSplash Beverages Around The World</h2>

<div class="outer">
    {#each imgs as img}
    <div class="imgboxs"><img src={img.urls.raw}></div>
    {/each}
</div>

<div class="outer">    
    {#each imges as img}
    <div class="imgboxs"><img src={img.urls.raw}></div>
    {/each}
</div>

<script>
    import { onMount } from 'svelte';

    let imgs = [];
    let imges =[];
    const BASE_URL = `https://api.unsplash.com`;
    onMount(() => {
        fetch(`${BASE_URL}/search/photos?query=seashore-golden-hour&per_page=3&client_id=0nYy0tRh8bLy2fKjqlRajXGM5LAX5vxXTSXyKErDqB0`)
        .then(res => res.json())
        .then(data => {
            imgs = data.results;
        });

        fetch(`${BASE_URL}/search/photos?query=horizontal-nice&per_page=3&client_id=0nYy0tRh8bLy2fKjqlRajXGM5LAX5vxXTSXyKErDqB0`)
        .then(rest => rest.json())
        .then(item => {
            imges = item.results;
        });
    });
</script>

<style>

    h2{
        text-align: center;
    }

    *{
        box-sizing: border-box;
        margin: 0;
        
    }
    .outer{
        width: 100%;
        display:flex;
        flex-direction: row;
        justify-content: center;
    }

    .imgboxs{
        width:28%;
        display:flex;
        align-items: center;
    }
 
    .imgboxs img{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        border-radius: 50px;
        padding: 25px;
        
    }

    .imgboxs:hover {
        overflow:hidden;
        
    }

    .imgboxs:hover>img {
        transition: transform .8s ease;
        border-radius: 50px;
    }


    .imgboxs:hover>img{
        padding: auto;
        transform:scale(1.1)
        
    }


    @media screen and (max-width:950px){
        .imgboxs{
        width:80%;
    }
    .outer{
        flex-direction: column;
        align-items: center;
    }
    } 

</style>