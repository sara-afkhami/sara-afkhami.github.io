import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import './index.css'
import WForm from './Form'


const Index = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  function Item() {
    return (
      <motion.li className='motion-li' layout initial={{ borderRadius: 10 }}>
         <motion.div layout
          style={{ textAlign: 'center', color: '#294FCD' }}
   
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} className="work-with-us" >
          <motion.h2>همکاری با ما</motion.h2>
          <p>برای برقراری  ارتباط  و شروع همکاری با نیلوا میتوانید،  فرم روبرو را پرکنید تا ما در اسرع وقت با شما تماس بگیريم و یا از طریق شماره تماس <a style={{ color: '#294FCD' }} href='tel:982154406044'>۵۴۴۰۶۰۴۴</a> با ما در ارتباط باشید.</p>
          {isOpen ? <></> :<motion.button style={{width: '100%', borderRadius: '20px', height: '40px', backgroundColor: "#294FCD", border: 'none', color:'white'}} onClick={toggleOpen}>فرم همکاری</motion.button>}
          </motion.div>
          <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
      </motion.li>
    );
  }
  function Content() {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <h3 style={{color: '#294FCD'}}>فرم همکاری</h3>
        <WForm setIsOpen={setIsOpen} />
      </motion.div>
    );
  }

  return (
    <AnimateSharedLayout>
      <motion.ul className='motion-ul' id='work-with-us' layout initial={{ borderRadius: 1 }}>
        <Item />
      </motion.ul>
    </AnimateSharedLayout>
  );
}




export default Index




// const [showForm, setShowForm] = useState(false)
//     return (
//         <div style={{ backgroundColor: '#eff7ff', display: 'flex', justifyContent: 'center' }}>
//             <div style={{ width: "90%", display: 'flex', justifyContent: 'center', paddingTop: '25%', paddingBottom: '25%' }} id="work-with-us">
//                 <div className='something flex-column' style={{ width: "80%", backgroundColor: "white", display: 'flex', justifyContent: 'center', padding: '25px', borderRadius: "15px", color: '#294FCD' }}>
//                     <div style={{ textAlign: 'center' }}>
//                         <h2>همکاری با ما</h2>
//                         <p>برای برقراری  ارتباط  و شروع همکاری با نیلوا میتوانید،  فرم روبرو را پرکنید تا ما در اسرع وقت با شما تماس بگیريم و یا از طریق شماره تماس <a style={{ color: '#294FCD' }} href='tel:982154406044'>۵۴۴۰۶۰۴۴</a> با ما در ارتباط باشید.</p>
//                     </div>
//                     <div style={showForm ? { display: 'flex', height: '500px', flexDirection: 'column', justifyContent: 'space-between' } : { display: 'none' }}>
//                         <h3 style={{ marginTop: '10%' }}>فرم همکاری</h3>
//                         <WForm setShowForm={setShowForm} />
//                     </div>
//                     {/* {showForm ? <></> : <div style={{ height: '100px' }}></div>} */}
//                     {showForm ? <></> : (<button style={{ backgroundColor: "#294fcd", color: 'white', border: 'none', height: '40px', borderRadius: '20px' }} onClick={() => setShowForm(true)}>
//                         فرم همکاری
//                     </button>)}
//                 </div>
//             </div>
//         </div>
//     )