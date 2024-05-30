import React from 'react';
import ContactBanner from './ContactComponent/ContactBanner';
import ContactInfo from './ContactComponent/ContactInfo';
import ContactFrom from './ContactComponent/ContactFrom';

const Contact = () => {
    return (
        <div>
            <ContactBanner/>
            <ContactInfo/>
            <ContactFrom/>
        </div>
    );
};

export default Contact;