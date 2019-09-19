import React from 'react';
import EventCover from '../Event/EventCover';
import EventAside from '../Event/EventAside';

import '../scss/event.scss';
import '../scss/event_cover.scss';


const Event = () => {
    return (
        <section className="event-container">
            <EventCover />
            <EventAside />
        </section>
    )
}

export default Event
