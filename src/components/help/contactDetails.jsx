import React from 'react'
import { formatContactDetails } from '../../utils/help/formatters';

const ContactDetails = ({ contactDetails = {} }) => {
    const { phoneNumber, emailAddress, address } = contactDetails

    return (
        <div className="box-layout__contact">
            <p><b>Phone Number:</b> { formatContactDetails(phoneNumber) }</p>
            <p><b>Email address:</b> { formatContactDetails(emailAddress) }</p>
            <p><b>Address:</b> { formatContactDetails(address) }</p>
        </div>
    )
};

export { ContactDetails as default }