import React from 'react'
import Lottie from "react-lottie";
import './index.css'
import back from '../../assets/images/herosection.svg'
import gif from '../../assets/images/data.json'

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
                <img className='hero-section-background' src={back} />
                <div className='hero-section-content'>
                    <h1>نیلوا</h1>
                    <p style={{ fontFamily: "irancell light", fontSize: "24px" }}>کارگزار رسمی پارک علم و فناوری دانشگاه شریف</p>
                    <h1>همراه کسب و کار ها تا تحقق ایده</h1>
                    <button className='hero-section-button'>مشاوره تخصصی</button>
                    <Lottie options={defaultOptions} height={400} width={600} margin={0} float={"right"} />
                </div>
            </div>
        </div>
    )
}

export default Index                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        