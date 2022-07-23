import React from 'react'

const Card = ({ photo, text, name, info, logo, backColor }) => {
    return (
        <div className='services-products-card flex-column'>
            <div className='services-products-card-inner flex-column'>
                <div className='services-products-card-front'>
                    <img src={photo} alt="" />
                    <p style={{ paddingTop: "20px", color: "#2242AA" }}>{text}</p>
                </div>
                <div className='services-products-card-back'>
                    <img src={logo} alt="" />
                    <p style={{ color: backColor }}>{name}</p>
                    <p style={{ paddingTop: "20px", fontFamily:"irancell light" }}>{info}</p>
                </div>
            </div>
        </div>
    )
}

export default Card