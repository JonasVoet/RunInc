import React from 'react';
import ContactAside from '../Contact/ContactAside';
import ContactForm from '../Contact/ContactForm';
import '../scss/contact.scss';
import '../scss/contact_aside.scss';
import '../scss/contact_form.scss';

const Contact = () => {
    return (
        <section className="contact-container">
            <ContactAside />
            <ContactForm />

        </section>
    )
}

export default Contact
