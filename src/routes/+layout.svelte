<script> 
    import Header from "$lib/Header.svelte";
    import Footer1 from "../lib/Footer1.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="css/main.css" />
</svelte:head>

<Header/>

<slot/>

<Footer1/>