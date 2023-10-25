import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GsapPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  const elementRef = useRef(null);
  const bgImg = useRef(null);
  const manImg = useRef(null);
  const mountain_leftGsap = useRef(null);
  const mountain_rightGsap = useRef(null);
  const cloud1Gsap = useRef(null);
  const cloud2Gsap = useRef(null);
  const textGsap = useRef(null);
  const title = useRef(null);

  useEffect(() => {
    gsap.from(elementRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(bgImg.current, { scrollTrigger: { scrub: 1 }, scale: 1.5 });
    gsap.to(manImg.current, { scrollTrigger: { scrub: 1 }, scale: 0.5 });
    gsap.to(mountain_leftGsap.current, {
      scrollTrigger: { scrub: 1 },
      x: -500,
    });
    gsap.to(mountain_rightGsap.current, {
      scrollTrigger: { scrub: 1 },
      x: 500,
    });
    gsap.to(cloud1Gsap.current, { scrollTrigger: { scrub: 1 }, x: 200 });
    gsap.to(cloud2Gsap.current, { scrollTrigger: { scrub: 1 }, x: -200 });
    gsap.to(textGsap.current, { scrollTrigger: { scrub: 1 }, y: 500 });
    gsap.to(title.current, { scrollTrigger: { scrub: 1 }, y: 100, scale: 1.5 });
  }, []);

  return (
    <div>
      <h1 ref={elementRef}> test h1 h1 h1</h1>
      <h1 ref={bgImg}> test h1 h1 h1</h1>
      <h1 ref={manImg}> test h1 h1 h1</h1>
      <h1 ref={mountain_leftGsap}> test h1 h1 h1</h1>
      <h1 ref={mountain_rightGsap}> test h1 h1 h1</h1>
      <h1 ref={cloud1Gsap}> test h1 h1 h1</h1>
      <h1 ref={cloud2Gsap}> test h1 h1 h1</h1>
      <h1 ref={textGsap}> test h1 h1 h1</h1>
      <h1 ref={title}> test h1 h1 h1</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        blanditiis ducimus unde quas dolores voluptatum possimus ipsum,
        veritatis culpa voluptas repellat voluptatibus, porro assumenda quae.
        Ullam nulla velit omnis animi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        blanditiis ducimus unde quas dolores voluptatum possimus ipsum,
        veritatis culpa voluptas repellat voluptatibus, porro assumenda quae.
        Ullam nulla velit omnis animi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        blanditiis ducimus unde quas dolores voluptatum possimus ipsum,
        veritatis culpa voluptas repellat voluptatibus, porro assumenda quae.
        Ullam nulla velit omnis animi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        blanditiis ducimus unde quas dolores voluptatum possimus ipsum,
        veritatis culpa voluptas repellat voluptatibus, porro assumenda quae.
        Ullam nulla velit omnis animi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        blanditiis ducimus unde quas dolores voluptatum possimus ipsum,
        veritatis culpa voluptas repellat voluptatibus, porro assumenda quae.
        Ullam nulla velit omnis animi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        blanditiis ducimus unde quas dolores voluptatum possimus ipsum,
        veritatis culpa voluptas repellat voluptatibus, porro assumenda quae.
        Ullam nulla velit omnis animi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        blanditiis ducimus unde quas dolores voluptatum possimus ipsum,
        veritatis culpa voluptas repellat voluptatibus, porro assumenda quae.
        Ullam nulla velit omnis animi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        blanditiis ducimus unde quas dolores voluptatum possimus ipsum,
        veritatis culpa voluptas repellat voluptatibus, porro assumenda quae.
        Ullam nulla velit omnis animi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        blanditiis ducimus unde quas dolores voluptatum possimus ipsum,
        veritatis culpa voluptas repellat voluptatibus, porro assumenda quae.
        Ullam nulla velit omnis animi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        blanditiis ducimus unde quas dolores voluptatum possimus ipsum,
        veritatis culpa voluptas repellat voluptatibus, porro assumenda quae.
        Ullam nulla velit omnis animi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        blanditiis ducimus unde quas dolores voluptatum possimus ipsum,
        veritatis culpa voluptas repellat voluptatibus, porro assumenda quae.
        Ullam nulla velit omnis animi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        blanditiis ducimus unde quas dolores voluptatum possimus ipsum,
        veritatis culpa voluptas repellat voluptatibus, porro assumenda quae.
        Ullam nulla velit omnis animi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        blanditiis ducimus unde quas dolores voluptatum possimus ipsum,
        veritatis culpa voluptas repellat voluptatibus, porro assumenda quae.
        Ullam nulla velit omnis animi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        blanditiis ducimus unde quas dolores voluptatum possimus ipsum,
        veritatis culpa voluptas repellat voluptatibus, porro assumenda quae.
        Ullam nulla velit omnis animi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        blanditiis ducimus unde quas dolores voluptatum possimus ipsum,
        veritatis culpa voluptas repellat voluptatibus, porro assumenda quae.
        Ullam nulla velit omnis animi.
      </p>
    </div>
  );
};

export default GsapPage;
