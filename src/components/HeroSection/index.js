import React from 'react'
import back from '../../assets/images/herosection.svg'
import './index.css'

const Index = () => {
    return (
        <div className='hero-section-container'>
            <img className='hero-section-background' src={back} />
            <div className='hero-section-content'>
                <h1>نیلوا</h1>
                <p style={{fontFamily: "irancell light", fontSize: "24px"}}>کارگزار رسمی پارک علم و فناوری دانشگاه شریف</p>
                <h1>همراه کسب و کار ها تا تحقق ایده</h1>
                <button className='hero-section-button'>مشاوره تخصصی</button>
            </div>
        </div>
    )
}

export default Index