import React from 'react'

const ContactDetails = ({ contactDetails = {} }) => {
    const { phoneNumber, emailAddress, address } = contactDetails

    return (
        <>
            <p><b>Phone Number</b> { phoneNumber }</p>
            <p><b>Email address</b> { emailAddress }</p>
            <p><b>Address</b> { address }</p>
        </>
    )
};

export { ContactDetails as default }