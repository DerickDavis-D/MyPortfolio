import React from 'react';

import PROFILE_PIC from "../assets/images/profile-pic.jpg";
import ICON_5 from "../assets/images/icon-5.png";
import ICON_6 from "../assets/images/icon-6.png";
import ICON_7 from "../assets/images/icon-7.png";
import ICON_8 from "../assets/images/icon-8.png";

import { STATS } from "../utils/data";
import StatInfoCard from '../components/StatInfoCard';

const Hero = () => {
    return (
      <section id='hero' className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
          <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
            <h3 className="text-xl lg:text-2xl font-medium text-primary">
              Hi, I'm <span className="text-primary">Derick Davis</span>
            </h3>
            <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Building <span className="text-secondary font-semibold">scalable web apps</span> using modern web technologies.
            </h1>
            <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4 text-primary">
              A passionate web developer focused on creating elegant and functional digital experiences. 
              I love building modern web apps with React and Express.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start md:gap-8 mt-6">
              <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim border-secondary text-secondary">
                View My Work
              </button>
              <button className="flex-1 md:flex-none action-btn btn-scale-anim bg-gradient-primary text-white hover:from-secondary hover:to-primary">
                View Resume
              </button>
            </div>
          </div>
          <div className='w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-blue-100/50 rounded-3xl mx-auto'>
          {/* Profile Picture & Icons */}
          <div className='w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-background/50 rounded-3xl relative order-1 lg:order-2'>
            <img src={PROFILE_PIC} alt="Profile Pic" className="profile-pic"/>

            <img src={ICON_5} alt='Icon 1' className='icon-img -left-10 bottom-20 rotate-[1.75deg]'/>
            <img src={ICON_6} alt='Icon 2' className='icon-img left-5 md:left-10 -bottom-2 rotate-[2.75deg]'/>
            <img src={ICON_7} alt='Icon 3' className='icon-img left-[110px] md:-[150px] -bottom-6 rotate-[3.75deg]'/>
            <img src={ICON_8} alt='Icon 4' className='icon-img left-[200px] md:-[255px] -bottom-9 md:-bottom-10 rotate-[4.75deg]'/>
          </div>
          </div>
        </div>

        {/* Stats Section */}
        <br></br><br /> 
        <div className='flex gap-12 mt-16 md:mt-24 flex-wrap'>
            {STATS.map((item) => (
              <StatInfoCard key={item.id} count={item.count} label={item.label}/>
            ))}
        </div>
      </section>
    );
};

export default Hero;
