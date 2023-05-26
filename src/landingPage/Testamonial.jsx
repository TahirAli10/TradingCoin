import React from 'react'
import shirt1 from '../assests/images/shirt1.png'
import shirt2 from '../assests/images/shirt2.png'
import shirt3 from '../assests/images/shirt3.png'
export default function Testamonial() {
  return (
   <>
   <div className=' d-flex justify-content-center' data-aos="fade-left" > <img src={shirt1} alt="" style={{cursor:"pointer", width:"90%"}} /></div>
   <div className=' d-flex justify-content-center' data-aos="fade-right" > <img src={shirt2} alt="" style={{cursor:"pointer" , width:"90%"}} /></div>
   <div className=' d-flex justify-content-center' data-aos="fade-left" > <img src={shirt3} alt="" style={{cursor:"pointer" , width:"90%"}} /></div>


   </>
  )
}
