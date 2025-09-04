import React, { useRef, useState } from "react";
// import { SlideTabsNav } from "./SlideTabs";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import LogoImg from '../images/Logo.png';


export function Nav(){
  return (
    <nav className="py-10 select-none">
      <ul className="flex justify-evenly items-center">
        <LogoTab/>
        <SlideTabs/>
        <LogTabs/>
        {/* <LogInTab/> */}
      </ul>
    </nav>
  )
}

const LogoTab = () => {
  return(
    <li className="relative mx-auto flex w-fit">
      <NavLink to='/'>
        <img className="w-28" src={LogoImg} alt="" />
      </NavLink>
    </li>
  )
}

const LogTabs = () => {
  return (
    <div className="relative mx-auto flex w-fit rounded-full border-2 p-1 gap-2">
      <LogInTab className='m-14'/>
      {/* <SignUpTab className='flex-1' /> */}
    </div>
  )
}

const SignUpTab = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <li
    onMouseLeave={()=>{
      setPosition((pv) => ({
        ...pv,
        opacity: 0,
      }));
    }}
    className="relative mx-auto flex w-fit rounded-full border-2 border-[#1A1A1A] bg-white p-1"
    >
      <Tab setPosition={setPosition} to='Signup'>Sign Up</Tab>
      <Cursor position={position} />
    </li>
  )
}

const LogInTab = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <li
    onMouseLeave={()=>{
      setPosition((pv) => ({
        ...pv,
        opacity: 0,
      }));
    }}
    className="relative mx-auto flex w-fit rounded-full border-2 border-[#1A1A1A] bg-white p-1"
    >
      <Tab setPosition={setPosition} to='Login'>Log in</Tab>
      <WhiteCursor position={position} />
    </li>
  )
}

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="relative mx-auto flex w-fit rounded-full border-2 p-1 ">
      <ul
        onMouseLeave={()=>{
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
      >
        <Tab setPosition={setPosition} to='/'>Home</Tab>
        <Tab setPosition={setPosition} to='product'>Product</Tab>
        <Tab setPosition={setPosition} to='information'>Information</Tab>
        <Tab setPosition={setPosition} to='About Us'>About Us</Tab>
        <Tab setPosition={setPosition} to='Help'>Help</Tab>

        <Cursor position={position} />
      </ul>
    </div>
  )
  
}



const Tab = ({children, setPosition, to}) => {
  const ref = useRef(null);
  const url = to.toString().toLowerCase().replace(/\s+/g, '-');
  
  return(
    <li
      ref={ref}
      onMouseEnter={()=>{
        if(!ref?.current) return;
        const {width} = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity:1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      <NavLink
        to={url}
        // className={({ isActive }) =>
        //   `relative transition-colors duration-300 px-4 py-2 uppercase text-xs md:text-base font-medium ${
        //     isActive ? "text-white font-bold" : "text-black"
        //   }`
        // }
      >
        <span className="absolute inset-0 left-0 flex items-center" aria-hidden='true'></span>
          {children}
      </NavLink>
    </li>
  )
}

const Cursor = ({position}) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  )
}
export const WhiteCursor = ({position}) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-[#002147] md:h-12"
    />
  )
}