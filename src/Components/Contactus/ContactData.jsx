import React from 'react'
import phone from '../../assest/contact/phone.svg'
import mail from '../../assest/contact/mail.svg'
import location from '../../assest/contact/location.svg'
const ContactData = [
    {
        icon: <img src={phone} alt="" />,
        title: 'Phone Number',
        data: '0466 213 362'
    },
    {
        icon: <img src={mail} alt="" />,
        title: 'Email Address',
        data: 'gardening@hurdle.support'
    },
    {
        icon: <img src={location} alt="" />,
        title: 'Location',
        data: 'Level 1, 445 Keilor Road, Niddrie VIC 3042'
    },
]
export default ContactData
