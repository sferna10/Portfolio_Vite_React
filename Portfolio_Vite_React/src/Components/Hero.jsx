import Typed from 'typed.js';
import React, { useEffect, useRef } from 'react';
// import backgroundImage from '/images/watercolor.png';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
  const typed = new Typed(el.current, {
    strings: ['Software Engineer', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
    typeSpeed: 50,
    loop: true,
  });

  return () => {
    typed.destroy();
  };
}, []);

  return (
    <div className="w-11/12 h-5/6 p-5 mb-8 flex-col items-start justify-start flex border-secondary shadow-[0_60px_50px_-40px_rgba(0,128,128,0.3)] ">
      <div className="w-2/3 max-sm:w-full  text-pink-400 md:w-full lg:w-2/3 p-5 flex flex-col items-center grow font-agbalumo">
        <div className="h-fit w-full mt-16">
          <p className="text-4xl md:text-4xl max-sm:text-3xl w-fit font-bold">
             Silvia Fernandez
              I am a Full Stack Web Designer<br /> <span ref={el} />
          </p>
        </div>
        <p className="w-full py-5 text-xl  text-justify text-neutral-50 grow font-texturina ">
            This is my Professional Portfolio
        </p>
      </div>
      <button className=" transition-all my-3  w-full h-16 text-neutral-50 bg-secondary  hover:bg-pink-400 hover:text-neutral-50 font-lobster text-2xl">
        <a
          href=""
          download=""
          target="blank"
        >
          Get my resume
        </a>
      </button>
    </div>
  );
};

export default Hero;
