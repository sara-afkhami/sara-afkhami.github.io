import React from 'react'
import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import telegram from '../../assets/icons/telegram.svg'
import github from '../../assets/icons/github.svg'
import rasane from '../../assets/images/rasane.png'
import etemad from '../../assets/images/etemad.png'
import call from '../../assets/icons/call.svg'
import address from '../../assets/icons/address.svg'
import mail from '../../assets/icons/mail.svg'

const Index = () => {
    const Address = ({ icon, href, info }) => {

        return (
            <div >
                <a className='footer-address-item flex-row' style={{ alignItems: 'baseline' }} target="_blank" href={href}>
                    <img className='' alt='' src={icon} style={{ marginLeft: '10px' }} />
                    <p >{info}</p>
                </a>
            </div>
        )
    }
    const Social = ({ icon, href }) => {
        return (
            <a href={href} target="_blank">
                <div className='responsive-footer-social-item' style={{ backgroundColor: "#294FCD", display: 'flex', width: '30px', height: '30px', borderRadius: '50%', justifyContent: 'center' }}>
                    <img style={{ width: '15px', height: 'auto' }} src={icon} />
                </div>
            </a>
        )
    }
    return (
        <>
            <div className='flex-column' style={{ margin: '50px auto 50px auto' }}>
                <p style={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>با ما همراه باشید!</p>
                <div className='flex-row' style={{ justifyContent: 'space-between', width: '40%', alignItems: 'center', margin: '0 auto' }}>
                    <Social icon={instagram} href='https://www.instagram.com/nilva_co/' />
                    <Social icon={github} href='https://github.com/nilva-co' />
                    <Social icon={linkedin} href="https://www.linkedin.com/company/nilva/" />
                    <Social icon={telegram} href="https://t.me/nilva_co" />
                </div>
            </div>


            <div className='responsive-footer' style={{ width: '100%', backgroundColor: 'white' }}>
                <div className='flex-column' style={{ width: '80%', margin: '50px auto 0px auto', paddingTop: '50px' }}>
                    <Address icon={address} href="https://goo.gl/maps/mkqPPQpbtvWVRtwd9" info="خیابان آزادی، کوچه صادقی، پلاک ۲۹، 
ساختمان پارک علم و فناوری دانشگاه شریف، طبقه۳ ، واحد۶" />
                    <Address icon={mail} href="mailto:admin@nilva.ir" info=" admin@nilva.ir" />
                    <Address icon={call} href="tel:982154406044" info="۵۴۴۰۶۰۴۴" />
                    <div style={{ backgroundColor: "#EBEEF3", height: '1px', width: '100%', display: 'flex', alignSelf: 'center', margin: "30px 0 15px 0" }}></div>
                    <div className='flex-row' style={{ justifyContent: 'space-between', width: '40%', margin: '0 auto 15px auto' }}>
                        <div className='footer-license' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '15px', width: '40%' }}>
                            <img  src={rasane} />
                        </div>
                        <div className='footer-license' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '15px', width: '40%' }}>
                            <img src={etemad} />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Index