import React , { useState, useEffect, useRef }  from 'react'
import NET from 'vanta/dist/vanta.net.min'
export default function BodySection() {
    const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        color:  0xE6007A, // Set the color of the lines to purple
        backgroundColor: 0x000000, // Set the background color to black
        points: 10, // Adjust the number of points
        maxDistance: 25, // Adjust the maximum distance between points
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return( <h1 ref={myRef} style={{ height: '700px', textAlign: 'center', paddingTop:"15%", color:"white" }}>
   
      <span>SLURPS</span>.<span>WORLD</span>
 
  </h1>)
}

