<h1>Drinks List</h1>

<div class="alldrinks">
    
    <div class="all">
        <div class="drink"></div>
        <div class="info">
            <div class="name">Tropical Fruit Splash</div>
            <div class="cont">
                <ul>
                    <strong>Ingredients</strong>
                    <li>Mango juice</li>
                    <li>Pineapple juice</li>
                    <li>Passion fruit juice</li>
                    <li>Coconut water</li>
                    <li>Coconut cream</li>
                    <li>Grenadine syrup</li>
                </ul>

            </div>
        </div>
    </div>

    <div class="all">
        <div class="info">
            <div class="name">Citrus Lemonade</div>
            <div class="cont">
                <ul>
                    <strong>Ingredients</strong>
                    <li>Fresh lemon juice</li>
                    <li>Fresh lime juice</li>
                    <li>Fresh orange juice</li>
                    <li>Simple syrup</li>
                    <li>Water</li>
                </ul>
            </div>
        </div>
        <div class="drink1"></div>

    </div>


    <div class="all">
        <div class="drink2"></div>
        <div class="info">
            <div class="name">Watermelon Breeze</div>
            <div class="cont">
                <ul>
                    <strong>Ingredients</strong>
                    <li>Fresh watermelon juice</li>
                    <li>Fresh mint leaves</li>
                    <li>Fresh lime juice</li>
                    <li>Honey</li>
                    <li>Ice cubes</li>

                </ul>
            </div>
        </div>
    </div>


    <div class="all">
        <div class="info">
            <div class="name">Pineapple Paradise</div>
            <div class="cont">
                <ul>
                    <strong>Ingredients</strong>
                    <li>Pineapple juice</li>
                    <li>Coconut cream</li>
                    <li>Simple syrup</li>
                    <li>Ice cubes</li>
                </ul>
            </div>
        </div>
        <div class="drink3"></div>

    </div>



    <div class="all">
        <div class="drink4"></div>
        <div class="info">
            <div class="name">Iced Berry Hibiscus Tea</div>
            <div class="cont">
                <ul>
                    <strong>Ingredients</strong>
                    <li>Dried hibiscus flowers</li>
                    <li>Mixed berries</li>
                    <li>Water</li>
                    <li>Honey</li>
                </ul>
            </div>
        </div>
    </div>


</div>

<style>



.alldrinks{
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3px;
}
.all{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70vh;

}


.drink{
    background-image: url("/img/trop.jpg");
    width: 70%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
}




.drink1{
    background-image: url("/img/lemon.jpg");
    width: 70%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


.drink2{
    background-image: url("/img/melon.jpg");
    width: 70%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}



.drink3{
    background-image: url("/img/pine.jpg");
    width: 70%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


.drink4{
    width: 70%;
    background-image: url("/img/tea.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


.info{
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.name{
    height: 15%;
    width: 100%;
    font-size: 40px;
    justify-content: center;
    align-items: center;
    display: flex;

}
.cont{
    height: 85%;
    width: 90%;


}

ul{
    font-size: 20px;
    list-style: none;
    
}
strong{
    font-size: 30px;
}

</style>


