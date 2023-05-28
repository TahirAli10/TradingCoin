import React, { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';

export default function BodySection() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      let points, maxDistance;

  

      if (!vantaEffect) {
        setVantaEffect(
          NET({
            el: myRef.current,
            color: 0x39FF14,
            backgroundColor: 0x000000,
            points: 4,
            maxDistance: 20,
          })
        );
      }
    };

    const handleWindowResize = () => {
      handleResize();
    };

    handleResize(); 

    window.addEventListener('resize', handleWindowResize); 

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [vantaEffect]);

  return (
    <div
      style={{
        width: '100%',
    
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden', 
        marginBottom:"100px"
      }}
    >
      <div
        ref={myRef}
        style={{
          width: '100%',
          height: '700px',
          position: 'relative',
        }}
      >
        <h1
          style={{
            width: '100%',
            height: '100%',
            textAlign: 'center',
            paddingTop: '7%',
            color: 'white',
          }}
        >
          <span style={{color:"#39FF14"}}>SLURPS</span>.<span>WORLD</span>
        </h1>
        <div
          style={{
            position: 'absolute',
            bottom: '-11px',
            left: '0',
            right: '0',
            height: '60px',
            backgroundImage:
            'linear-gradient(from top to bottom, blur(2px) 0%,  blur(2px) 50%, rgba(0, 0, 8, 0.7) 100%)',
            backdropFilter:"    blur(5px)",
            zIndex: '2',
          }}
        />
      </div>

       
      </div>

  );
}
