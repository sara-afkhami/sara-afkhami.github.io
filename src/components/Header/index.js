// import React from 'react'
// import logo from '../../assets/logo.svg'
// import './index.css'

// const index = () => {
//   return (
//     <div className='header-container'>
//       {/* <div className='header-logo flex-row'>
//         <img src={logo} />
//         <h1>نیلوا</h1>
//       </div> */}
//       <div className='header-items flex-row'>
//         <a href='#s' className='header-item link'><p>محصولات و خدمات </p></a>
//         <a href='#s' className='header-item link'><p>درباره ی ما</p></a>
//         <a href='#s' className='header-item link'><p>تماس با ما</p></a>
//       </div>
//     </div>
//   )
// }

// export default index;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.svg'
import './index.css'

const Index = (props) => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const navLinks = ["", "محصولات و خدمات", "درباره ی ما", "تماس با ما"]
  const { scrollToSlide } = props;

  const renderSlidesNumbers = () => {
    // const { scrollToSlide } = props;
    const slidesNumbers = [];
    for (let i = 1; i < 4; i++) {
      const buttonScrollProps = {
        key: i,
        onClick: () => {
          scrollToSlide(i);
        },
      };

      slidesNumbers.push(
        <a href='#s' className='header-item link' onClick={handleClick} {...buttonScrollProps}><p> {navLinks[i]}</p></a>

     );
    }
    return slidesNumbers;
  }


  const {
    getCurrentSlideIndex, style, className,
  } = props;
  const currentSlideIndex = getCurrentSlideIndex();

  return (
    <div className="header-container">
      <div className='inner-header'>
      <div className='header-logo flex-row' onClick={()=>scrollToSlide(0)}>
        <img src={logo} />
        <p style={{fontSize: "28px"}}>نیلوا</p>
      </div>
      <div className="header-items flex-row">
        {renderSlidesNumbers(currentSlideIndex)}
      </div>
      <div className="nav-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      </div>
    </div>

  );

}
export default Index;
