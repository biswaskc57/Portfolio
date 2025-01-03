import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Scroll: React.FC<React.PropsWithChildren> = (props) => {
  const main = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!main.current) return;
  
      const boxes = gsap.utils.toArray<HTMLElement>('.box');
      boxes.forEach((box) => {
        gsap.set(box, { opacity: 0, y: 100 }); // Set initial state (hidden off-screen)
  
        gsap.to(box, {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: box,
            start: 'top 100%', // Start animation when box enters the viewport
            end: 'top 20%',  // End animation as it fully enters
            scrub: true,
            // markers: true, // Uncomment to debug with markers
          },
        });
      });
    },
    { scope: main }
  );
  

  return (
    <div>
      <section className="section flex-center column">
      </section>
      <div className="section flex-center column" ref={main}>
        {props.children}
      </div>
    </div>
  );
};

export default Scroll;
