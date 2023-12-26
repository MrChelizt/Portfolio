import contacts from "./data";

import "./contact.css";

export default function Contact() {

    const onClickHandler = (contact) => {
        window.open(contact.link, '_blank');
        sendGAEvent(contact)
    }
    const sendGAEvent = (contact) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({'event': 'contact_event', 'type': contact.type})
    }

    return (
        <section id="contact">
            <h2>Get In Touch</h2>
            <p>Shoot me a message via any of the links below!</p>
            <div className="container contact__container" data-aos="fade-up">
                {contacts.map((contact) => (
                    <a
                        key={contact.id}
                        onClick={() => onClickHandler(contact)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {contact.icon}
                    </a>
                ))}
            </div>
        </section>
    );
}
