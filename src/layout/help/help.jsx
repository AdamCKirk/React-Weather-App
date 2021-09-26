import React from 'react'
import ContactDetails from '../../components/help/contactDetails';

const Help = () => {

    const contactDetails = {
        phoneNumber: '07712345678',
        emailAddress: 'email@email.com',
        address: '12, Somewhere Lane, BS22 1ST'
    }

    return (
        <div className="page--header">
            <div className="content--container">
                <h2>Help</h2>
                <p>
                    If you are having trouble with this website we are ready to help.
                    Please contact us using the details below:
                </p>
                <ContactDetails contactDetails={contactDetails} />
            </div>
        </div>
    )
};

export { Help as default }