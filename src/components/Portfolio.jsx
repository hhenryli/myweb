import React, { lazy } from 'react';
import Nav from './Nav.jsx';
import One from '../assets/portfolio/1.png';
import Two from '../assets/portfolio/2.png';
import Three from '../assets/portfolio/3.png';
import Four from '../assets/portfolio/4.png';
import Five from '../assets/portfolio/5.jpg';
import Six from '../assets/portfolio/6.jpg';
import Seven from '../assets/portfolio/7.jpg';
import Eight from '../assets/portfolio/8.png';
import Nine from '../assets/portfolio/9.png';
import Ten from '../assets/portfolio/10.png';

export default function Portfolio() {
  return (
    <div className="min-h-[185vh] mt-4">
      <Nav />
      <h1 className="text-6xl font-garamond text-center">portfolio</h1>
      <p className='text-center text-lg font-inter mt-2'>i like art</p>

      <div className='grid grid-cols-4 gap-4 p-4'>
        <div className="flex flex-col gap-4">
          <div className="bg-gray-300 aspect-[3/4] flex justify-center items-center">
            <img
            src={One}
            className='w-full h-full object-cover'
            loading="lazy"></img>
          </div>
          <div className="bg-gray-200 aspect-[4/3] flex justify-center items-center">
          <img
              src={Seven}
              className='w-full h-full object-cover'
              loading="lazy"></img>
          </div>
          <div className="bg-gray-200 aspect-square flex justify-center items-center">
          <img
              src={Nine}
              className='w-full h-full object-cover'
              loading="lazy"></img>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-gray-200 aspect-square flex justify-center items-center">
            <img
            src={Two}
            className='w-full h-full object-cover'
            loading="lazy"></img>
            </div>
          <div className="bg-gray-200 aspect-[3/4] flex justify-center items-center">
            <img
                src={Five}
                className='w-full h-full object-cover'
                loading="lazy"></img>
          </div>
          <div className="bg-gray-200 aspect-square flex justify-center items-center">
          <img
              src={Ten}
              className='w-full h-full object-cover'
              loading="lazy"></img>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-gray-300 aspect-[4/3] flex justify-center items-center">
          <img
              src={Six}
              className='w-full h-full object-cover'
              loading="lazy"></img>
          </div>
          <div className="bg-gray-300 aspect-[3/4] flex justify-center items-center">
          <img
            src={Three}
            className='w-full h-full object-cover'
            loading="lazy"></img>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-gray-300 aspect-[3/4] flex justify-center items-center">
          <img
            src={Four}
            className='w-full h-full object-cover'
            loading="lazy"></img>
          </div>
          <div className="bg-gray-300 aspect-[4/3] flex justify-center items-center">
            <img
              src={Eight}
              className='w-full h-full object-cover'
              loading="lazy"></img>
          </div>
        </div>
      </div>
    </div>
  );
}