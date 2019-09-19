import React from 'react'

const ContactForm = () => {
    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        return null;
    }
    return (
        <div className="contact-form">
            <h3>SEND EN BESKED</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    NAME:
                 <input type="text" />
                </label>
                <label>
                    EMAIL:
                 <input type="email" />
                </label>
                <label>
                    NUMBER:
                 <input type="text" />
                </label>
                <label>
                    MESSAGE:
                 <input className="text-box" type="text" />
                </label>
                <button>SEND</button>
            </form>
        </div>
    )
}

export default ContactForm
