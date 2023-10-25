<h1>Gallery</h1>
<h2>SunSplash Beverages Around The World</h2>

<div class="outer">
    <div class="imgboxs"><img src="/img/gal1.jpg"></div>
    <div class="imgboxs"><img src="/img/gal2.jpg"></div>
    <div class="imgboxs"><img src="/img/gal3.jpg"></div>
</div>

<div class="outer">    
    <div class="imgboxs"><img src="img/gal4.jpg"></div>
    <div class="imgboxs"><img src="img/gal5.jpg"></div>
    <div class="imgboxs"><img src="img/gal6.jpg"></div>
</div>


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