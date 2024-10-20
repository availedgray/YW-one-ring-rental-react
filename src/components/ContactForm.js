import React from "react";

function ContactForm () {
    return(
        <div className="main col-sm-12">
              <h1 className="section-title">Contact Us</h1>
              <div className="contact-form">
                <form action="contact.php" method="post">
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
    );
};

export default ContactForm;