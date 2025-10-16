import React from 'react'
import Cover from '../../assets/plinkyplights/cover.png'
import Game1 from '../../assets/plinkyplights/gameplay1.png'
import Game2 from '../../assets/plinkyplights/gameplay2.png'
import Game3 from '../../assets/plinkyplights/gameplay3.png'
import Train from '../../assets/plinkyplights/trainsprite.png'

export default function PlinkyPlights() {
  return (
    <div className='min-h-[100vh] h-screen relative'>
      <img
        src={Cover}
        loading='lazy'
        className='absolute -z-2 right-0 w-[60vw] h-[100vh] filter brightness-90 saturate-95 contrast-115 object-cover'
        >
      </img>
      <div className='w-[40vw] h-[100%] bg-[radial-gradient(ellipse_at_center,rgba(197,211,219,1)_40%,rgba(79,95,96,1)_100%)]'>
        <img
          src={Train}
          className='w-full h-[80px] object-contain'
        >
        </img>
        <h1 className='font-garamond text-7xl text-center ml-5 mr-5'>PLINKY PLIGHTS</h1>
        <img
          src={Train}
          className='w-full h-[80px] object-contain'
        >
        </img>
        <div className='ml-5 mr-5'>
          <p className='font-garamond italic text-2xl text-start mt-4'>Can you help Plinky reach the top...?</p>
          <p className='font-inter text-lg text-start mt-4'>Over the summer, I got bored. I ran out of games to play and decided: why not make my own? I developed PlinkyPlights by myself, using Unity and all hand-drawn assets to create a drag and jump, climb-to-the-top style game. The game features many types of platforms and obstacles, requiring precise movement, timing, instinct, and judgement. I'm still developing the game as I'm in school, so more will be coming in the future!</p>
          <p className='font-garamond italic text-2xl text-start mt-4'>...Or will you fall along the way?</p>
        </div>

      </div>
      <div className='w-[250px] h-[430px] p-4 bg-[rgba(79,95,96,1)] flex flex-col gap-4 absolute left-[40vw] top-0'>
        <img
        src={Game1}
        loading='lazy'
        className='w-[100%] h-[calc(100 / 3)%] object-cover'
        >
        </img>
        <img
        src={Game2}
        loading='lazy'
        className='w-[100%] h-[calc(100 / 3)%] object-cover'
        >
        </img>
        <img
        src={Game3}
        loading='lazy'
        className='w-[100%] h-[calc(100 / 3)%] object-cover'
        >
        </img>
      </div>
      <div className='bg-[rgba(79,95,96,1)] flex flex-col gap-4 absolute right-4 bottom-4 hover:-translate-y-1 transition-translate duration-200'>
          <a className="pl-4 pr-4 pt-3 pb-3 rounded text-white font-arvo" href="https://benryhenry.itch.io/plinkyplights" target='_blank'>Play it Now</a>
      </div>
    </div>
  )
}
