import React from "react";
import "./ContactBlock.scss";
import ContactItem from "./ContactItem/ContactItem";

function ContactBlock() {
  return (
    <div className="contact-section">
      <p className="section-title">Content</p>
      <div className="contact-section__items">
        <ContactItem />
        <ContactItem />
        <ContactItem />
      </div>
    </div>
  );
}

export default ContactBlock;
