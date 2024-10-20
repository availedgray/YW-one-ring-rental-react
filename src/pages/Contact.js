import React from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
            <div className="content">
                <div className="container">
                    <div className="row">
                        {/* contact form */}
                        <ContactForm />
                    </div>
                </div>
            </div>
    );

}

export default Contact;