import React from 'react'
import Hero from './img/hero.jpg';
import '../components/scss/cover.scss';

const Cover = () => {
    return (
        <main>
            <div className="cover-container">
                <figure>
                    <img className="cover-img" src={Hero} alt="coverimg" />
                    <figcaption>WE LOVE <span>RUNNING</span></figcaption>
                </figure>
            </div>
        </main>
    )
}

export default Cover;

