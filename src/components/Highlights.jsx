import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { rightImg, watchImg } from '../utils/Index';
import VideoCarousel from './VideoCarousel';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#highlights',
        start: 'top 80%', // When the section is 80% visible from the top
        end: 'bottom 20%', // When the section is 20% visible from the bottom
        onEnter: () => tl.restart(), // Trigger animation when entering from the top
        onLeaveBack: () => tl.restart(), // Trigger animation when scrolling back up
      },
    });

    tl.to('#title', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });
    tl.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25, ease: 'power2.out' });
  }, []);

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading opacity-0 translate-y-10">
            Get the Highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link opacity-0 translate-y-10">
              Watch the Film
              <img src={watchImg} alt="" className="ml-2" />
            </p>
            <p className="link opacity-0 translate-y-10">
              Watch the Event
              <img src={rightImg} alt="" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
