import React from 'react'
import Lottie from "react-lottie";
import './index.css'
import back from '../../assets/images/herosection.svg'
import gif from '../../assets/images/23165-isometric-laptop (2).json'

const Index = () => {
    const defaultOptions = {
        loop: true,
        width: 500,
        autoplay: true,
        animationData: gif,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className='hero-section-container-bg'>
            <div className='hero-section-container' id='hero-section'>
                {/* <img className='hero-section-background' src={back} /> */}
                <div className='hero-section-content'>
                    <h1>نیلوا</h1>
                    <p style={{ fontFamily: "irancell light", fontSize: "24px" }}>کارگزار رسمی پارک علم و فناوری دانشگاه شریف</p>
                    <h1>همراه کسب و کارها تا تحقق ایده</h1>
                    <a href="#work-with-us" className='hero-section-button-link'>
                        <button className='hero-section-button'>
                            مشاوره تخصصی
                        </button>
                    </a>

                </div>
                <div className='hero-section-gif'>
                    <Lottie options={defaultOptions} margin={0} float={"right"} />
                </div>
            </div>
        </div>
    )
}

export default Index                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        