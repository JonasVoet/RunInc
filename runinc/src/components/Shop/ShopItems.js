import React from 'react'
import Shoe1 from '../img/shoe_01.jpg';
import Shoe2 from '../img/shoe_02.jpg';
import Shoe3 from '../img/shoe_03.jpg';
import Shoe4 from '../img/shoe_04.jpg';

const ShopItems = () => {
    return (
        <div className="shopItems-container">
            <h2>SHOP</h2>
            <div className="shop-items">
                <ul className="shoes">
                    <li><img src={Shoe1} alt="Shoe1" />
                        <p>Puma Highland 3000 - blue</p>
                    </li>

                    <li><img src={Shoe2} alt="Shoe2" />
                        <p>Asics Free Street</p>
                    </li>

                    <li><img src={Shoe3} alt="Shoe3" />
                        <p>New Balance Runner Bounce</p>
                    </li>

                    <li><img src={Shoe4} alt="Shoe4" />
                        <p>New Balance New York 2018</p>
                    </li>
                    <li><img src={Shoe1} alt="Shoe1" />
                        <p>Puma Highland 3000 - blue</p>
                    </li>
                    <li><img src={Shoe2} alt="Shoe2" />
                        <p>New Blance New York 2019</p>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default ShopItems
