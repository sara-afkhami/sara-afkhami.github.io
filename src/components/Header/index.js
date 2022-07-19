import React from 'react'
import logo from '../../assets/logo.svg'
import './index.css'

const index = () => {
  return (
    <div className='header-container'>
        <div className='header-logo flex-row'>
            <img src={logo} />
            <h1>نیلوا</h1>
        </div>
        <div className='header-items flex-row'>
        <a href='#s' className='header-item link'><p>محصولات و خدمات </p></a>
        <a href='#s' className='header-item link'><p>درباره ی ما</p></a>
        <a href='#s' className='header-item link'><p>تماس با ما</p></a>
        </div>
    </div>
  )
}

export default index