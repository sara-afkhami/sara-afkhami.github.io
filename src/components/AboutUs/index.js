import './index.css'
import React from 'react'
import aboutUs from '../../assets/images/about-us.svg'

const index = () => {
  return (
    <div className='about-us-container flex-column'>
      <img className='about-us-image' src={aboutUs} alt='' style={{ height: '100%', position: 'relative' }} />
     <div className='about-us-info'>
     <div className='about-us-inner-info flex-column'>
        <h2>درباره ما</h2>
        <p>شرکت فناوری اطلاعات نیلوا به عنوان پیشرو در زمینه تولید نرم افزار‌های وب و موبایل از سال ۱۳۹۶ فعالیت خود را در چهار حوزه استراتژی موبایل، توسعه وب، راهکارهای نرم‌افزاری و راهکارهای سازمانی آغاز کرده است. ما به داشتن تیمی خلاق، پرتلاش و حرفه‌ای افتخار می‌کنیم و همیشه به دنبال بهترین‌ها برای بزرگ‌تر کردن خانواده نیلوا هستیم. اگر دوست داری یکی از اعضای خانواده نیلوا باشی، از اینجا رزومت رو برامون بفرست.</p>
        <button className='send-resume-button'>ارسال رزومه</button>
      </div>
     </div>
    </div>
  )
}

export default index