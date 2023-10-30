<svelte:head>
    <link rel="stylesheet" href="css/main.css" />
</svelte:head>

<h1>About</h1>


<div class="back">
    <div class="aboutLeft"> </div>
    <div class="aboutImg"> </div>
</div>


<div class="back">
    <div class="aboutLeft aboutImg"></div>
    <div class=""></div>
</div>

<script>
    import { onMount } from 'svelte';

    let imgs = [];
    const BASE_URL = `https://api.unsplash.com`;
    onMount(() => {
        fetch(`${BASE_URL}/search/photos?query=seashore-golden-hour&per_page=1&client_id=0nYy0tRh8bLy2fKjqlRajXGM5LAX5vxXTSXyKErDqB0`)
        .then(res => res.json())
        .then(data => {
            imgs = data.results;
        });
    });
</script>

{#each imgs as img}
    <img src={img.urls.raw} height="1000px" >
{/each}