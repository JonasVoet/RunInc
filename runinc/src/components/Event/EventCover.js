import React from 'react';
import Event from '../img/event.jpg';
import '../scss/event_cover.scss';

const EventCover = () => {
    return (
        <div className="eventCover-container">
            <figure>
                <img className="event-img" src={Event} alt="eventimg" />
                <figcaption>NEXT EVENT</figcaption>
            </figure>


        </div>
    )
}

export default EventCover
