import React from 'react'
import './index.css'
import email from '../../assets/icons/Gmail.svg'
import location from '../../assets/icons/Location.svg'
import phone from '../../assets/icons/Viber.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import telegram from '../../assets/icons/telegram.svg'
import github from '../../assets/icons/github.svg'
import rasane from '../../assets/images/rasane.svg'
import etemad from '../../assets/images/etemad.svg'
import logo from '../../assets/images/logo.svg'
import call from '../../assets/icons/call.svg'
import address from '../../assets/icons/address.svg'
import mail from '../../assets/icons/mail.svg'

const Address = ({ icon, href, info }) => {

    return (
        <div >
            <a className='footer-address-item flex-column' target="_blank" href={href}>
                <div className='footer-address-icon-background'>
                    <img className='footer-address-icon' alt='' src={icon} />
                </div>
                <p>{info}</p>
            </a>
        </div>
    )
}
const Social = ({icon, href}) => {
    return (
        <a href={href} target="_blank">
            <div className='footer-social-item'>
                <img className='footer-social-icon' src={icon}/>
            </div>
        </a>
    )
}

const index = () => {
    return (
        <div className='footer-container'>
            <div className='footer-gradient flex-column'>
                <div className='footer-address-row flex-row'>
                    <Address icon={call} href="tel:982154406044" info="۵۴۴۰۶۰۴۴" />
                    <Address icon={address} href="https://goo.gl/maps/mkqPPQpbtvWVRtwd9" info="خیابان آزادی، کوچه صادقی، پلاک 29، 
ساختمان پارک علم و فناوری دانشگاه شریف، طبقه 3، واحد 6"/>
                    <Address icon={mail} href="mailto:admin@nilva.ir" info=" admin@nilva.ir" />
                </div>
                
                <div className='footer-social-row flex-column'>
                <div className='footer-line' style={{marginTop:"20px"}}></div>
                    <div className='flex-row' style={{width: '20%', magin:"auto", justifyContent: "space-around", paddingTop:"40px"}}>
                        <Social icon={instagram}  href='https://www.instagram.com/nilva_co/'/>
                        <Social icon={github} href='https://github.com/nilva-co'/>
                        <Social icon={linkedin} href="https://www.linkedin.com/company/nilva/"/>
                        <Social icon={telegram} href="https://t.me/nilva_co"/>
                        
                    </div>
                    <div style={{paddingTop:"20px"}}>
                        <p>
                            با ما همراه باشید!
                        </p>
                    </div>
                </div>
                <div className='footer-licenses-row flex-row'>
                    <div className='footer-license'>
                        <img alt='' src={rasane} />
                    </div>
                    <div className='footer-license'>
                        <img alt='' src={etemad} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index

{/* <div className='footer-container flex-column'>
            <div className='footer-first-row flex-row'>
                <div className='footer-news'>
                    <div className='flex-row'>
                    <img alt='' src={logo} style={{marginLeft: "10px"}} />
                    <h2>
                        نیلوا
                    </h2>
                    </div>
                    <p>
                    هدف ما تبدیل شدن به قطبی مطمئن در صنعت فناوری اطلاعات است تا با طراحی ، توسعه و پشتیبانی با کیفیت ترین سامانه های نرم افزاری کشور، ارزش آفرین باشیم.
                    </p>
                    
                </div>
                <div className='footer-address '>
                    <div className='address flex-row'>
                    <a className='flex-row' href='https://goo.gl/maps/mkqPPQpbtvWVRtwd9'>
                    <img alt='' src={location} />
                        <p>
                            خیابان آزادی، ضلع غربی دانشگاه شریف، کوچه صادقی، پلاک ۲۹، ساختمان پارک علم و فناوری، دانشگاه شریف،
                            طبقه ۳، واحد ۶
                        </p>
                    </a>
                        
                    </div>
                    <div className='address flex-row'>
                    
                    <a className='flex-row' href="mailto:admin@nilva.ir">
                    <img alt='' src={email} />
                        <p>
                            admin@nilva.ir
                        </p>
                    </a>
                        
                    </div>
                    <div className='address flex-row'>
                        <a className='flex-row' href="tel:982154406044">
                        <img alt='' src={phone} />
                        <p>
                            ۵۴۴۰۶۰۴۴
                        </p>
                        </a>
                    </div>
                </div>
                <div className='footer-licenses flex-row'>
                    <div className='footer-license'>
                        <img alt='' src={rasane} />
                    </div>
                    <div className='footer-license'>
                        <img alt='' src={etemad} />
                    </div>
                </div>
            </div>
            <div className='flex-column'>
                <div className='footer-second-row flex-row'>
                    <div className='line-div'></div>
                    <div className='social-media-div flex-row'>
                        <div className='social-media'>
                            <a target='_blank' href="https://t.me/nilva_co">
                                <img alt='' src={telegram} />
                            </a>
                        </div>
                        <div className='social-media'>
                            <a target='blank' href="https://www.linkedin.com/company/nilva/">
                                <img alt='' src={linkedin} />
                            </a>
                        </div>
                        <div className='social-media'>
                            <a target='_blank' href='https://github.com/nilva-co'>
                                <img alt='' src={github} />
                            </a>
                        </div>
                        <div className='social-media'>
                            <a target='_blank' href='https://www.instagram.com/nilva_co/'>
                                <img alt='' src={instagram} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='footer-third-row'>
                    <p>تمامی حقوق مالکیت این وب‌سایت برای شرکت نیلوا محفوظ است</p>
                </div>
            </div>
        </div> */}