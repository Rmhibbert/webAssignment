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
        width:30%;
        display:flex;
        align-items: center;
    }
 
    .imgboxs img{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        padding: 10px;
    }

</style>