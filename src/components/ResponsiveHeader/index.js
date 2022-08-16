import React, { useState } from 'react'
import './index.css'
import logo from '../../assets/logo.svg'
import burger from '../../assets/icons/burger.svg'
import cancel from '../../assets/icons/cancel.svg'

const Index = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
      <div style={{width:"100%", display: "flex", backgroundColor: 'white', justifyContent: 'center', height: 'auto'}}>
        <nav className="navbar">
          <div className="nav-container">
            <a href='#hero-section' className="nav-logo">
              <i><img alt="" className="logo-svg" src={logo}></img></i>
            </a>
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
  
  
              <li className="nav-item">
                <a
                 href='#services'   
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  محصولات و خدمات
                </a>
              </li>
              <li className="nav-item">
                <a
                  href='#about-us'
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  درباره ی ما
                </a>
              </li>
              <li className="nav-item">
                <a
                  href='#work-with-us'
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  تماس با ما
                </a>
              </li>
  
              
              
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}> {click ? <i className="fas fa-bars"><img alt='' src={burger}/></i> : <i className="fas fa-times" ><img alt='' src={burger}/></i>}</i>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Index

