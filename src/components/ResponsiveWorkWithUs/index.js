import React, { useState } from 'react'
import './index.css'
import phone from '../../assets/icons/phone.svg'
import location from '../../assets/icons/location.svg'
import email from '../../assets/icons/email.svg'
import WorkForm from '../WorkWithUs/WorkForm'
import WForm from './Form'

const Index = () => {
    const [showForm, setShowForm] = useState(false)
    const Addresses = ({ icon, text, link }) => {
        return (
            <div className='flex-row' style={{ marginTop: '20px' }}>
                <a href={link} className='flex-row' style={{ textDecoration: 'none' }}>
                    <img src={icon} style={{ marginLeft: '20px' }} />
                    <p style={{ margin: '0', fontSize: '16px', fontFamily: 'irancell light' }}>{text}</p>
                </a>
            </div>
        )
    }
    return (
        <div style={{ backgroundColor: '#eff7ff', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: "90%", display: 'flex', justifyContent: 'center', paddingTop: '20%', paddingBottom: '20%' }} id="work-with-us">
                <div className='something flex-column' style={{ width: "80%", backgroundColor: "white", display: 'flex', justifyContent: 'center', padding: '5%', borderRadius: "15px" }}>
                    <div style={{ textAlign: 'center' }}>
                        <h2>همکاری با ما</h2>
                        <p>برای برقراری  ارتباط  و شروع همکاری با نیلوا میتوانید،  فرم روبرو را پرکنید تا ما در اسرع وقت با شما تماس بگیريم و یا از طریق شماره تماس زیر با ما در ارتباط باشید.</p>
                    </div>
                    <div>
                        <Addresses icon={phone} text='۵۴۴۰۶۰۴۴  ' link='tel:982154406044' />
                        <Addresses icon={email} text=' admin@nilva.ir' link='mailto:admin@nilva.ir' />
                        <Addresses icon={location} text='ناحیه نوآوری شریف' link='https://goo.gl/maps/mkqPPQpbtvWVRtwd9' />
                    </div>
                    <div style={showForm ? { display: 'block', height: '600px' } : { display: 'none' }}>
                    <h3 style={{marginTop: '10%'}}>فرم همکاری</h3>
                        <WForm setShowForm={setShowForm}/>
                    </div>
                    {showForm ? <></> : <div style={{ height: '100px' }}></div>}
                    {showForm ? <></> : (<button style={{ backgroundColor: "#294fcd", color: 'white', border: 'none', height: '40px', borderRadius: '20px' }} onClick={() => setShowForm(true)}>
                        فرم همکاری
                    </button>)}
                </div>
            </div>
        </div>
    )
}

export default Index