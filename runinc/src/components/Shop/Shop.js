import React from 'react';
import ShopAside from '../Shop/ShopAside';
import ShopItems from '../Shop/ShopItems';
import '../scss/event.scss';
import '../scss/shop.scss';
import '../scss/shop_aside.scss';
import '../scss/shop_items.scss';

const Shop = () => {
    return (
        <section className="shop-container">
            <ShopAside />
            <ShopItems />
        </section>
    )
}

export default Shop
