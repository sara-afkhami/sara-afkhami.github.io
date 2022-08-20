import React from 'react'
import PartnersSlider from './PartnersSlider'
import './index.css'
import hamrah from '../../assets/images/hamrah.svg'
import azad from '../../assets/images/azad.svg'
import ResponsivePartnerSlider from './ResponsivePartnerSlider'

const WorkWith = ({ title, text, photo }) => {
    return (
        <div className='partner-card flex row'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F3F5F8', borderRadius: '10px', minWidth: '20%', height: 'auto', padding: '30px' }}>
                <img alt='' src={photo} />
            </div>
            <div style={{ paddingRight: '20px' }}>
                <h3>
                    {title}
                </h3>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}

const Index = ({ width }) => {
    return (
        <div className='partners-container'>
            <div className='partners-text-container'>
                <div className='partners-text' style={{minHeight: "450px"}}>
                    <h2 className=''>چه کسانی به ما اعتماد کرده اند؟</h2>
                    <p>نیلوا پاسخگوی نیازهای خاص مشتریان است، ما از ایده پردازی تا اجرا در کنار شماییم. ما به شما کمک می کنیم مزیت رقابتی کسب کنید، به طور چشمگیری نام تجاری خود را در دنیای دیجیتال بهبود بخشیده و مشتریان جدید جذب کنید.</p>
                </div>
            </div>
            <div className='partner-cards-container flex-column'>
                <div className='partner-cards flex-row'>
                    <WorkWith text='طراحی و بهینه سازی پروژه ذره بین توسط کارشناسان فنی شرکت نیلوا' title='مرورگر ذره بین' photo={hamrah} />
                    <WorkWith text='ارائه پیامرسان امن سازمانی هیوا به دانشگاه آزاد اسلامی متناسب با نیاز این سازمان' title='پیام رسان سازمانی' photo={azad} />
                </div>
                <div className='partner-slider-container'>{(width > 1400) ? <PartnersSlider /> : <ResponsivePartnerSlider />}</div>
            </div>
        </div>
    )
}

export default Index;