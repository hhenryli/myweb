import React from 'react'
import SpectaclesImg from '../../assets/spectacles/spectacles.png';

export default function Spectacles() {
  return (
    <div className='min-h-screen h-full bg-black relative'>
      <div className='w-full h-full flex justify-center items-center'>
        <img
          src={SpectaclesImg}
          className='w-[30vw] z-2 absolute'></img>
      </div>
      <div className='left-1/2 top-5 -translate-x-1/2 absolute z-2'>
        <h1 className='font-arvo text-7xl text-white text-center'>Order Up!</h1>
        <p className='font-garamond italic text-lg text-white text-center mt-4'>made with Snapchat Spectacles</p>
      </div>
      <div className='right-0 top-5 absolute z-2'>
        <h1 className='font-arvo text-3xl text-white text-end'>What are the Spectacles</h1>
        <p className='font-garamond italic text-s w-[30vw] text-white text-end mt-4'>The purpose of this research is to evaluate the effectiveness of increasing team bonding, communication, and teamwork through an augmented reality program. This augmented reality program will be in the form of a kitchen game requiring players to communicate their orders, ingredients, and other needs to run the kitchen.</p>
        <p className='font-garamond italic text-s w-[30vw] text-white text-end mt-4'>Study of using an augmented reality application to practice teamwork and communication in a social environment.</p>
      </div>
    </div>
  )
}