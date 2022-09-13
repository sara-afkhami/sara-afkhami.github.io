import "./index.css";
import React, { useEffect, useState } from "react";
import aboutUs from "../../assets/images/about.svg";
// import aboutUs1 from "../../assets/images/test.jpg";

const Index = () => {
  const [device, setDevice] = useState('m');
  useEffect(() => {
    console.log(navigator);
    setDevice(navigator.platform);
  }, []);
  return (
    <div className="about-us-container" id="about-us">
      {/* {device === "iPhone" ? (
        <img
          className="about-us-imagee"
          src={aboutUs}
          alt=""
        />
      ) : (
        <img
          className="about-us-image"
          src={aboutUs}
          alt=""
          style={{ position: "relative" }}
        />
      )} */}
      <img
          className="about-us-image"
          src={aboutUs}
          alt=""
          style={{ position: "relative" }}
        />
      <div className="about-us-info" style={{ width: "80%" }}>
        <div
          className="about-us-inner-info flex-column"
          style={{ width: "100%" }}
        >
          <h2>درباره ما</h2>
          <p>
            شرکت فناوری اطلاعات نیلوا به عنوان پیشرو در زمینه تولید نرم
            افزار‌های وب و موبایل از سال ۱۳۹۶ فعالیت خود را در چهار حوزه
            استراتژی موبایل، توسعه وب، راهکارهای نرم‌افزاری و راهکارهای سازمانی
            آغاز کرده است. ما به داشتن تیمی خلاق، پرتلاش و حرفه‌ای افتخار
            می‌کنیم و همیشه به دنبال بهترین‌ها برای بزرگ‌تر کردن خانواده نیلوا
            هستیم. اگر دوست داری یکی از اعضای خانواده نیلوا باشی، از اینجا رزومت
            رو برامون بفرست.
          </p>
          <a
            className="send-resume-button-link"
            target="_blank"
            href="https://quera.org/magnet/companies/nilva"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="send-resume-button">ارسال رزومه</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
