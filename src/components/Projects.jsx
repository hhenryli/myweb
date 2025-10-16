import React from 'react';
import {useState, useRef} from 'react';
import Nav from './Nav.jsx';
import OneTwentyEs from './projects/120es.jsx';
import PlinkyPlights from './projects/plinkyplights.jsx';
import Spectacles from './projects/spectacles.jsx';
import Back from "../assets/plinkyplights/back.png"
import Next from "../assets/plinkyplights/next.png"

export default function Projects() {
  const [index, setIndex] = useState(0);

  function nextProject() {
    setIndex(prev => Math.min(prev + 1, 2));
  }
  function prevProject() {
    setIndex(prev => Math.max(prev - 1, 0));
  }

  return (
    <div className="relative w-[300vw] overflow-hidden">
      <Nav />
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}vw)` }}
      >
        <div className="w-[100vw]">
          <OneTwentyEs />
        </div>
        <div className="w-[100vw]">
          <PlinkyPlights />
        </div>
        <div className="w-[100vw]">
          <Spectacles />
        </div>
      </div>

      <button onClick={prevProject} className="cursor-pointer fixed left-4 top-1/2 -translate-y-1/2">
        <img
        src={Back}
        className='w-20 opacity-50 hover:opacity-100 transition-opacity duration-100'></img>
      </button>
      <button onClick={nextProject} className="cursor-pointer fixed right-4 top-1/2 -translate-y-1/2">
        <img
        src={Next}
        className='w-20 opacity-50 hover:opacity-100 transition-opacity duration-100'></img>
      </button>
    </div>
  );
}