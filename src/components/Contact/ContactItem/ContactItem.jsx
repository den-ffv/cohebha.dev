import React from 'react';
import "./ContactItem.scss";
function ContactItem() {
  return (
    <div className='contact-item'>
       <p className='contact-item__name'>Mail</p>
       <a className='contact-item__link' href="chokhlenkoo@gmail.com" >chokhlenkoo@gmail.com</a>
    </div>
  )
}

export default ContactItem