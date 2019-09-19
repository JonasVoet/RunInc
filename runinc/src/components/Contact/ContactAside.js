import React from 'react';
import MapImg from '../img/map.JPG';

const ContactAside = () => {
    return (
        <aside className="contact-aside">
            <h2>CONTACT</h2>
            <img className="Map" src={MapImg} alt="Map" />
            <div className="contact-footer">
                <h3>RUNINC</h3>
                <ul>
                    <li>Kannikegade 12</li>
                    <li>800 Aarhus C</li>
                    <a href="#">
                        <li>Telefon 26 13 26 96</li>
                    </a>
                    <a href="mailto:info@runinc.dk">
                        <li>info@runinc.dk</li>
                    </a>
                </ul>
            </div>
        </aside>
    )
}

export default ContactAside
