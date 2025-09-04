import React from "react";
import { MainTop } from "./MainTop";
import { MainBot } from "./MainBot";

function Hr(){
  return (
  <div className="mt-10 w-full h-[350px] flex justify-between caret-cyan-300">
    <div className="flex-1 bg-purple-200 mx-auto justify-center flex items-center">Slogan Or Reputation</div>
    <div className="flex-1 bg-purple-400 mx-auto justify-center flex items-center">Slogan Or Reputation</div>
    <div className="flex-1 bg-purple-500 mx-auto justify-center flex items-center">Slogan Or Reputation</div>
  </div>
  )
}


export function Home(){
  const height = window.innerHeight;
  
  return (
    <main className="">
      <section className="" style={{ height: `${height-192}px` }}>
        <MainTop/>
        <Hr/>
      </section>
      <section className="flex justify-start items-center pt-8 pb-36 box-border" style={{ height: `${height}px` }}>
        <MainBot/>
      </section>
    </main>    
  )
}  

