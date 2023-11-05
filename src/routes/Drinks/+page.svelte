<h1>Drinks List</h1>

<div class="alldrinks">
    
    <div class="all">
        <div class="drink"></div>
        <div class="info">
            <div class="name"><b>Tropical Fruit Splash</b></div>
            <div class="cont">
                <div class="desc">
                    <p>This drink is a delightful combination of tropical fruit flavors like mango, pineapple, and passion fruit, elevated by the creamy essence of coconut. The sweetness of the mango and pineapple is complemented by the tartness of passion fruit, creating a well-balanced and refreshing profile. The addition of coconut cream adds a creamy and tropical undertone, while the grenadine syrup adds a touch of sweetness and vibrant color. This concoction transports your taste buds to a tropical paradise, making it the perfect summer sipper.</p>
                </div>
                <div class="ing">                
                    <ul>
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
    </div>




    <div class="all ">
        <div class="info">
            <div class="name"><b>Citrus Lemonade</b></div>
            <div class="cont">
                <div class="desc">
                    <p>The Zesty Citrus Lemonade is a harmonious blend of three tangy citrus fruits: lemon, lime, and orange. The combination of these citrus flavors creates a refreshing and invigorating taste. The simple syrup balances the tartness of the citrus juices, ensuring it's not overly sour. Served over ice, this drink is the embodiment of a sunny summer day, providing a burst of citrusy goodness with every sip.</p>
                </div>
                <div class="ing">                
                    <ul>
                        <li>Fresh lemon juice</li>
                        <li>Fresh lime juice</li>
                        <li>Fresh orange juice</li>
                        <li>Simple syrup</li>
                        <li>Water</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="drink1 left"></div>
    </div>




    <div class="all">
        <div class="drink2"></div>
        <div class="info">
            <div class="name"><b>Watermelon Breeze</b></div>
            <div class="cont">
                <div class="desc">
                    <p>This summer cooler is a symphony of sweetness and freshness. The natural sweetness of watermelon is the star, while the mint leaves provide a cooling and herbaceous contrast. The hint of lime juice adds a zesty kick, and the honey or simple syrup amplifies the watermelon's sweetness. Served in a watermelon slice, it's not just a drink but an experience, invoking fond memories of leisurely beach days. The combination of these flavors in one sip makes it a delightful and revitalizing choice on a hot summer day.</p>
                </div>
                <div class="ing">                
                    <ul>
                        <li>Fresh watermelon juice</li>
                        <li>Fresh mint leaves</li>
                        <li>Fresh lime juice</li>
                        <li>Honey</li>
                        <li>Ice cubes</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    


    <div class="all">
        <div class="info">
            <div class="name"><b>Pineapple Paradise</b></div>
            <div class="cont">
                <div class="desc">
                    <p>This drink encapsulates the tropical paradise with its delicious combination of juicy pineapple and the rich, creamy note of coconut. The pineapple's natural sweetness is enhanced by the creamy texture of coconut cream. The addition of simple syrup or coconut syrup adds a hint of sweetness to round out the flavors. Served with a pineapple wedge and maraschino cherry, it's a visually appealing and satisfying concoction that makes you feel like you're sipping a tropical cocktail on a sun-soaked island, even if you're miles away.</p>
                </div>
                <div class="ing">                
                    <ul>
                        <li>Pineapple juice</li>
                        <li>Coconut cream</li>
                        <li>Simple syrup</li>
                        <li>Ice cubes</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="drink3"></div>

    </div>




    <div class="all">
        <div class="drink4"></div>
        <div class="info">
            <div class="name"><b>Iced Berry Hibiscus Tea</b></div>
            <div class="cont">
                <div class="desc">
                    <p>This iced tea is a burst of vibrant flavors and colors. The hibiscus tea provides a deep, tart, and floral note, while the mixed berries infuse a sweet and slightly tangy undertone. The sweetener, whether honey or agave nectar, harmonizes the flavors and rounds out any bitterness. The addition of fresh mint leaves gives the drink a refreshing and aromatic finish. The combination of hibiscus, mixed berries, and the touch of mint creates a balanced, bright, and revitalizing iced tea, perfect for a hot day. The visual appeal of the colorful berries and mint garnish makes it even more inviting.</p>
                </div>
                <div class="ing">                
                    <ul>
                        <li>Dried hibiscus flowers</li>
                        <li>Mixed berries</li>
                        <li>Water</li>
                        <li>Honey</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


</div>

<style>



.alldrinks{
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
}
.all{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 90vh;
}   

.right{
    display: flex;
    justify-content: end;
}

.drink{
    background-image: url("/img/trop.jpg");
    width: 60%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
}




.drink1{
    background-image: url("/img/lemon.jpg");
    width: 60%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


.drink2{
    background-image: url("/img/melon.jpg");
    width: 60%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}



.drink3{
    background-image: url("/img/pine.jpg");
    width: 60%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


.drink4{
    width: 60%;
    background-image: url("/img/tea.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


.info{
    width: 40%;
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
    color: #37BEBB;
    font-family: 'Rubik', sans-serif;

}
.cont{
    height: 85%;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.desc{
    display: flex;
    height: 50%;
    width: 100%;
    align-items: end;
    padding: 0 40px;
}

.ing{
    display: flex;
    height: 50%;
    width: 100%;
    align-items: start;
}
ul{

    list-style: circle;
    
}
strong{
    font-size: 30px;
    color: #37BEBB;
}

</style>


