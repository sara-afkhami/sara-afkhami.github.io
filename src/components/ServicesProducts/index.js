import React from 'react'
import Card from './Card'
import './index.css'
import setting from '../../assets/icons/settings.svg'
import coin from '../../assets/icons/coin.svg'
import organ from '../../assets/icons/organ.svg'
import chat from '../../assets/icons/chat.svg'
import code from '../../assets/images/code.svg'
import daraya from '../../assets/images/daraya.svg'
import hivaa from '../../assets/images/hivaa.svg'
import erva from '../../assets/images/erva.svg'

const index = () => {
    return (
        <div className='services-products-container flex-column' id='services'>
            <div className='services-products-text flex-column'>
                <h2>محصولات و خدمات ما</h2>
                <p className='services-products-text-below' style={{fontSize: "20px"}}>خدمات ما ارائه راهکارهای مبتنی بر نرم افزار برای پاسخگویی به چالش های سازمان هاست، درکنار ارائه این خدمات محصولات تخصصی خود را نیز ارائه میکنیم.</p>
            </div>
            <div className='services-products-cards flex-row'>
                <div className='services-products-group-cards flex-row'>
                <Card photo={setting} text='طراحی و توسعه نرم افزار' logo={code} name="طراحی و توسعه" info=" توسعه اپلیکیشن و وبسایت"  backColor="#434DC2" link='#' />
                <Card photo={organ} text='مدیریت فرآیند های سازمانی' logo={erva} name="ایروا" info="نرم افزار مدیریت کسب و کار"  backColor="#A24689" link="http://erp.nilva.ir/"/>
                </div>
                <div className='services-products-group-cards flex-row'>
                <Card photo={chat} text='پیامرسان سازمانی' logo={hivaa} name="هیوا" info="پیام رسان امن سازمانی"  backColor="#2F489E" link='https://hivaa.im/' />
                <Card photo={coin} text='بلاک چین و رمز ارز' logo={daraya} name="دارایا" info="سرمایه گذاری در ارز دیجیتال"  backColor="#0058DD" link='https://daraya.ir/'/>
                </div>
            </div>
        </div>
    )
}

export default index