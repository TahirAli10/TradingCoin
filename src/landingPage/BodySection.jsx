import React , { useState, useEffect, useRef }  from 'react'
import NET from 'vanta/dist/vanta.net.min'
export default function BodySection() {
    const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        color:  0xE6007A, 
        backgroundColor: 0x000000, 
        points: 10, 
        maxDistance: 25,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return( <h1 ref={myRef} style={{ height: '700px',  textAlign: 'center', paddingTop:"15%", color:"white" }}>
   
      <span>SLURPS</span>.<span>WORLD</span>
 
  </h1>)
}

