import React from 'react'
import './index.css'
import email from '../../assets/icons/Gmail.svg'
// import location from '../../assets/icons/Location.svg'
import phone from '../../assets/icons/Viber.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import telegram from '../../assets/icons/telegram.svg'
import github from '../../assets/icons/github.svg'
import rasane from '../../assets/images/rasane.png'
import etemad from '../../assets/images/etemad.png'
// import logo from '../../assets/images/logo.svg'
import call from '../../assets/icons/call.svg'
import address from '../../assets/icons/address.svg'
import mail from '../../assets/icons/mail.svg'

const Address = ({ icon, href, info }) => {

    return (
        <div className='footer-address-container'>
            <a className='footer-address-item flex-column' target="_blank" href={href}>
                <div className='footer-address-icon-background'>
                    <img className='footer-address-icon' alt='' src={icon} />
                </div>
                <p>{info}</p>
            </a>
        </div>
    )
}
const Social = ({ icon, href }) => {
    return (
        <a href={href} target="_blank">
            <div className='footer-social-item'>
                <img className='footer-social-icon' src={icon} />
            </div>
        </a>
    )
}

const index = () => {
    return (
        <div className='footer-gradient flex-column'>
            <div className='footer-container flex-column'>

                <div className='footer-address-row flex-row'>
                    <Address icon={call} href="tel:982154406044" info="۵۴۴۰۶۰۴۴" />
                    <Address icon={address} href="https://goo.gl/maps/mkqPPQpbtvWVRtwd9" info="خیابان آزادی، کوچه صادقی، پلاک ۲۹، 
ساختمان پارک علم و فناوری دانشگاه شریف، طبقه۳، واحد۶"/>
                    <Address icon={mail} href="mailto:admin@nilva.ir" info=" admin@nilva.ir" />
                </div>
                <div className='footer-line' style={{ marginTop: "20px" }}></div>
                <div className='footer-social-row flex-column'>

                    <div className='footer-licenses-row flex-row'>
                        <div className='footer-license'>
                            <img alt='' src={rasane} />
                        </div>
                        <div className='footer-license'>
                            <img alt='' src={etemad} />
                        </div>
                    </div>

                    <div>
                        <p>
                            با ما همراه باشید!
                        </p>
                    </div>
                    <div className='flex-row' style={{ width: '20%', magin: "auto", justifyContent: "space-around" }}>
                        <Social icon={instagram} href='https://www.instagram.com/nilva_co/' />
                        <Social icon={github} href='https://github.com/nilva-co' />
                        <Social icon={linkedin} href="https://www.linkedin.com/company/nilva/" />
                        <Social icon={telegram} href="https://t.me/nilva_co" />

                    </div>

                </div>



            </div>
            <div style={{ backgroundColor: '#294FCD', alignItems: 'center', textAlign: 'center', justifyContent: 'center', width: '100%', color: 'white', margin: '80px auto 0 auto' }}>
                <p className="" style={{ margin: '15px', fontSize: '14px' }}>طراحی و توسعه با &#10084;&#65039; در نیلوا</p>
            </div>
        </div>
    )
}

export default index