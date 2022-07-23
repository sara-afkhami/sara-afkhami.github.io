import React from 'react'
import Form from './WorkForm'

import './index.css'
import phone from '../../assets/icons/phone.svg'
import location from '../../assets/icons/location.svg'
import email from '../../assets/icons/email.svg'
const Addresses = ({ icon, text }) => {
    return (
        <div className='flex-row'>
            <img src={icon} />
            <p style={{ margin: '0', fontSize: '16px', fontFamily: 'irancell light' }}>{text}</p>
        </div>
    )
}
const Index = () => {
    return (
        <>

            <div className='work-with-us-container flex-row'>

                <div className='work-with-us-info flex-column'>
                    <div className='work-with-us-inner-info flex-column'>
                        <p>همکاری با ما</p>
                        <p>برای برقراری  ارتباط  و شروع همکاری با نیلوا میتوانید،  فرم روبرو را پرکنید تا ما در اسرع وقت با شما تماس بگیريم و یا از طریق شماره تماس زیر با ما در ارتباط باشید.</p>
                        <div className='flex-column' style={{ justifyContent: 'space-around', height: '30%' }}>
                            <Addresses icon={phone} text='۰۲۱_۵۴۴۰۶۰۴۴  ' />
                            <Addresses icon={email} text=' admin@nilva.ir  ' />
                            <Addresses icon={location} text='ناحیه نوآوری شریف' />
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
