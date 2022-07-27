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

const index = () => {
    return (
        <div className='footer-container flex-column'>
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
        </div>
    )
}

export default index