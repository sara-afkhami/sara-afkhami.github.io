import React from 'react'
import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import telegram from '../../assets/icons/telegram.svg'
import github from '../../assets/icons/github.svg'
import rasane from '../../assets/images/rasane.svg'
import etemad from '../../assets/images/etemad.svg'
import call from '../../assets/icons/call.svg'
import address from '../../assets/icons/address.svg'
import mail from '../../assets/icons/mail.svg'

const Index = () => {
    const Address = ({ icon, href, info }) => {

        return (
            <div >
                <a className='footer-address-item flex-row' style={{ alignItems: 'baseline' }} target="_blank" href={href}>
                    <img className='' alt='' src={icon} style={{ marginLeft: '10px' }} />
                    <p>{info}</p>
                </a>
            </div>
        )
    }
    const Social = ({ icon, href }) => {
        return (
            <a href={href} target="_blank">
                {/* <div className='footer-social-item'> */}
                <img className='footer-social-icon' src={icon} />
                {/* </div> */}
            </a>
        )
    }
    return (
        <div style={{ width: '80%', margin: '50px auto 0px auto' }}>
            <div className='flex-column'>
                <Address icon={address} href="https://goo.gl/maps/mkqPPQpbtvWVRtwd9" info="خیابان آزادی، کوچه صادقی، پلاک 29، 
ساختمان پارک علم و فناوری دانشگاه شریف، طبقه 3، واحد 6" />
                <Address icon={mail} href="mailto:admin@nilva.ir" info=" admin@nilva.ir" />
                <Address icon={call} href="tel:982154406044" info="۵۴۴۰۶۰۴۴" />
                <div style={{ backgroundColor: "white", height: '1px', width: '100%', display: 'flex', alignSelf: 'center', margin: "50px 0" }}></div>
                <div className='flex-row' style={{ justifyContent: 'space-between', width: '80%', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '15px', width: '40%' }}>
                        <img src={rasane} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '15px', width: '40%' }}>
                        <img src={etemad} />
                    </div>
                </div>
                <div className='flex-row' style={{ justifyContent: 'space-between', width: '80%', margin: '50px auto 50px auto', alignItems: 'center' }}>
                    <Social icon={instagram} href='https://www.instagram.com/nilva_co/' />
                    <Social icon={github} href='https://github.com/nilva-co' />
                    <Social icon={linkedin} href="https://www.linkedin.com/company/nilva/" />
                    <Social icon={telegram} href="https://t.me/nilva_co" />
                </div>

            </div>
        </div>
    )
}

export default Index