import React from "react";
import mainImg from '../images/main.png';
// import './Home.module.css';
import mainVideo from '../images/main.mp4';

export function MainTop(){
  return(
    <article className="
    mx-auto w-2/3 h-[700px] flex 
    justify-between relative 
    rounded-[32px] border-2 pl-16 py-1 pr-1">
    <Title/>
    <MainImg/>
  </article>
  )
}

const Title = () => {
  return(
    <div className="w-5/12 flex justify-center items-center">
      <h1 className="font-Anton text-6xl text-center leading-normal font-thin text-[#535366]">
        <span className="relative -left-10 "><span className="text-8xl font-medium text-[#00B894]">Auto</span>mate<br/></span>
        <span className="relative -left-14 ">Your <span className="text-8xl font-medium text-[#0057B8]">Actions</span><br/></span>
        <span className="relative -left-7">On The <span className="text-8xl font-medium text-[#FF6F3C]">Website</span></span>
      </h1>
    </div>
  )
}

const MainImg = () => {
  return (
    <div className="
      relative w-7/12 flex rounded-[28px] border-2
      border-[#1A1A1A] bg-white p-1 overflow-hidden
      justify-center items-center
      ">
      <video className="h-full rounded-3xl" src={mainVideo} controls autoPlay muted loop></video>
      {/* <img className="w-[1500px] h-96" src={mainImg} alt="" /> */}

    </div>
  )
}