import React from 'react'
import '../scss/shop.scss';
import '../scss/shop_aside.scss';
import '../scss/shop_items.scss';

const ShopAside = () => {
    return (
        <aside className="shop-list-container">
            <ul className="shop-list">
                <h2>SHOP</h2>
                <li>RUNINC SHOP</li>
                <li>Gratis fragt ved over 500.- kr.</li>
                <li>Nike</li>
                <li>Adidas</li>
                <li>Puma</li>
                <li>Asics</li>
                <li>Hummel</li>
            </ul>
        </aside>
    )
}

export default ShopAside
