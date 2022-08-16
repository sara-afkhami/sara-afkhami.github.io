import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mohaymen from '../../assets/images/Mohaymen.svg';
import noghteh from '../../assets/images/noghteh.svg';
import pardis from '../../assets/images/pardis.svg';
import techpark from '../../assets/images/techpark.svg'
import yaftar from '../../assets/images/yaftar.svg'

const ResponsivePartnerSlider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const logos = [mohaymen, noghteh, pardis, techpark, yaftar]
    const links = ["https://www.mohaymen.ir/fa", 'https://noghteh-academy.com/', 'https://pardisgene.com/', 'https://techpark.sharif.ir/', '#']
    return (
        <div className="" style={{ textAlign: "center", paddingTop:"100px" }}>
            <div style={{ position: "relative" }}>
                <Carousel responsive={responsive} arrows={false} infinite={true} autoPlay={true}>
                    <div>
                        <a target='_blank' style={{ textDecoration: "none" }} href={links[0]}>
                            <img src={logos[0]} alt="" />
                        </a>
                    </div>
                    <div>
                        <a target='_blank' style={{ textDecoration: "none" }} href={links[1]}>
                            <img src={logos[1]} alt="" />
                        </a>
                    </div>
                    <div>
                        <a target='_blank' style={{ textDecoration: "none" }} href={links[2]}>
                            <img src={logos[2]} alt="" />
                        </a>
                    </div>
                    <div>
                        <a target='_blank' style={{ textDecoration: "none" }} href={links[3]}>
                            <img src={logos[3]} alt="" />
                        </a>
                    </div>
                    <div>
                        <a target='_blank' style={{ textDecoration: "none" }} href={links[4]}>
                            <img src={logos[4]} alt="" />
                        </a>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default ResponsivePartnerSlider;

