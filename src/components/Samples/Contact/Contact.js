import React from 'react';
import './Contact.scss';

export const Contact = () => {
    return (
        <div className="contact">
            <h2 className="contact__header">Can't wait to hear from you!</h2>
            <div className="contact__data">
                <p className="contact__data--name">Plant Shop co.</p>
                <p className="contact__data--adress">Monstera Street 8271</p>
                <p className="contact__data--adress">422-1242 United States (CA st.)</p>
                <a className="contact__data--phone" href="tel:+00822132732">+00822132732</a>
                <a className="contact__data--mail" href="mailto:plant@shop.com">plant@shop.com</a>
                <p className="contact__data--open">We're open Mon-Fri at 8am-6pm</p>
            </div>
        </div>
    )
}
      
export default Contact;









