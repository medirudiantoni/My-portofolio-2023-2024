import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import works from '../../../../assets/data/works.json'
import WorkCard, { KeepScrollDown, MoreProjects } from './WorkCard'

const Section3 = () => {
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);
  const cardsRef = Array.from({ length: 6 }, (_, i) => useRef(null));
  const [vw, setVw] = useState(window.innerWidth);

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    window.addEventListener('resize', () => setVw(window.innerWidth));
    const horizontalScroll = gsap.fromTo(horizontalRef.current, {
      x: 0,
    }, {
      x: -(horizontalRef.current.offsetWidth - window.innerWidth),
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 4,
        pin: true,
      },
    });
    
    const parallaxCards = cardsRef.map((cardRef, index) => {
      const delay = index * 100;
      return gsap.to(cardRef.current, {
        x: 200 - index * 20,
        delay,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
      });
    });

    return () => {
      horizontalScroll.kill();
      parallaxCards.forEach(parallaxCard => parallaxCard.kill());
      window.removeEventListener('resize', () => setVw(window.innerWidth));
    };
  }, [])

  return (
    <section className="w-full min-h-screen relative">
      <div ref={triggerRef} className="w-full h-screen px-5 sm:px-20 bg-white bord2 border-blue-600 flex flex-col items-center justify-center relative z-10">
        <div className="container h-fit flex flex-col">
          <div className="mb-[5vh]"><p className="text-4xl sm:text-5xl tracking-tighter font-semibold">Recent Work</p></div>
          <div className="w-full h-fit flex whitespace-nowrap bord2 border-orange-600">
            <div ref={horizontalRef} className={`flex gap-10 flex-nowrap h-fit w-fit pr-24 lg:pr-36 xl:pr-60 ${ vw >= 1920 ? '2xl:pr-[32vw]' : '2xl:pr-[14vw]' }`}>
              <KeepScrollDown />
              {works && works.map((work, i) => {
                return (
                  <WorkCard key={i} ref={cardsRef[i]} image={work.display} name={work.name} to={work.name} />
                )
              })}
              <MoreProjects />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full"></div>
    </section>
  )
}

export default Section3