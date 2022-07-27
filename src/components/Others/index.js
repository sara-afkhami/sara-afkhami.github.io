import React, { useState, useEffect } from 'react'
import './index.css'
import others from '../../assets/images/others.png'
import arrow from '../../assets/icons/arrow.svg'

const Index = () => {
    const [currentArray, setCurrentArray] = useState([
        { name: 'مرتضی رحیمی', description: ' با توجه به همکاری های مشترکی که تا به امروز با نیلوا داشته ام فکر میکنم شرکت نیلوا دارای پتانسیل تبدیل شدن به قطبی مطمئن در صنعت فناوری اطلاعات است تا با بهره گیری از حداکثر توان نخبگان کشور، با طراحی، توسعه و پشتیبانی با کیفیت ترین سامانه های نرم افزاری کشور، ارزش آفرین باشد. ', position: 'مدیر عامل شرکت سروش', image: others }, { name: 'hi', description: 'hi', position: 'hi', image: 'hi' }, { name: '', description: '', position: '', image: '' }
    ])
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
     console.log('in effect'+ JSON.stringify(currentArray))
    }, [currentArray])
    
    const handleLeftArrow = () => {
        let index = currentIndex;
        index = index +1 
        if (index>2) {
            index = 0
            setCurrentIndex(index)
        } else setCurrentIndex(index) 
    }
    const handleRightArrow = () => {
        let index = currentIndex;
        index = index - 1 
        if (0 > index) {
            index = 2
            setCurrentIndex(index)
        } else setCurrentIndex(index)
    }
    return (
        <div className=''>
            <div className='other-slider flex-row'>
                <img alt='' src={currentArray[currentIndex].image} />
                <div className='other-slider-info flex-column'>
                    <div className='other-slider-top flex-row'>
                        <div className='other-slider-person'>
                            <b>{currentArray[currentIndex].name}</b>
                            <p>{currentArray[currentIndex].position}</p>
                        </div>
                        <div className='other-slider-arrows flex-row'>
                            <a onClick={() => handleRightArrow()}>
                            <img className='right-arrow' alt='' src={arrow} />
                            </a>
                           <a  onClick={() => handleLeftArrow()}>
                           <img className='left-arrow' alt='' src={arrow} />
                           </a>

                        </div>
                    </div>
                    <div className='other-slider-bottom'>
                        <p>
                            {currentArray[currentIndex].description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index