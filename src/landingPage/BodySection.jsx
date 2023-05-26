import React, { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';

export default function BodySection() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      let points, maxDistance;

      // Set different values based on screen width
      if (width < 768) {
        points = 7;
        maxDistance = 20;
      } else if (width >= 768 && width < 1024) {
        points = 10;
        maxDistance = 25;
      } else {
        points = 15;
        maxDistance = 30;
      }

      if (!vantaEffect) {
        setVantaEffect(
          NET({
            el: myRef.current,
            color: 0xE6007A,
            backgroundColor: 0x000000,
            points: points,
            maxDistance: maxDistance,
          })
        );
      }
    };

    const handleWindowResize = () => {
      handleResize();
    };

    handleResize(); // Initial setup

    window.addEventListener('resize', handleWindowResize); // Update on window resize

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener('resize', handleWindowResize); // Clean up the event listener
    };
  }, [vantaEffect]);

  return (
    <h1
      ref={myRef}
      style={{ height: '700px', textAlign: 'center', paddingTop: '15%', color: 'white' }}
    >
      <span>SLURPS</span>.<span>WORLD</span>
    </h1>
  );
}
