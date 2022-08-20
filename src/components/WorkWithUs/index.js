import React from 'react'
import Form from './WorkForm'

import './index.css'
import phone from '../../assets/icons/call.svg'
import location from '../../assets/icons/address.svg'
import email from '../../assets/icons/mail.svg'
const Addresses = ({ icon, text, link }) => {
    return (
        <div className='flex-row'>
            <a href={link} className='flex-row' style={{textDecoration: 'none'}}>
            <img src={icon} />
            <p style={{ margin: '0', fontSize: '16px', fontFamily: 'irancell light' }}>{text}</p>
            </a>
        </div>
    )
}
const Index = () => {
    return (
        <>

            <div className='work-with-us-container flex-row' id='work-with-us'>

                <div className='work-with-us-info flex-column'>
                    <div className='work-with-us-inner-info flex-column'>
                        <p>همکاری با ما</p>
                        <p>برای برقراری  ارتباط  و شروع همکاری با نیلوا میتوانید،  فرم روبرو را پرکنید تا ما در اسرع وقت با شما تماس بگیريم و یا از طریق شماره تماس زیر با ما در ارتباط باشید.</p>
                        <div className='flex-column' style={{ justifyContent: 'space-around', height: '30%' }}>
                            <Addresses icon={phone} text='۵۴۴۰۶۰۴۴  ' link='tel:982154406044' />
                            <Addresses icon={email} text=' admin@nilva.ir' link='mailto:admin@nilva.ir' />
                            <Addresses icon={location} text='ناحیه نوآوری شریف' link='https://goo.gl/maps/mkqPPQpbtvWVRtwd9' />
                        </div>
                    </div>
                </div>
                <div className='work-with-us-form'>
                    <Form />
                </div>
            </div>
        </>
    )
}

export default Index
