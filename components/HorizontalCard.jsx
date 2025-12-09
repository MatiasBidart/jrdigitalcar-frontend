"use client";
import {useState} from 'react'
import ListComponent from './ListComponent';

const HorizontalCard = ({children, text}) => {
const [hover, setHover] = useState(false)

  return (
<ListComponent key={Math.random} classes={`grid grid-cols-[30%_70%] max-w-100 h-25 items-center cursor-pointer ${hover ? 'bg-gray-300' : ''}`} onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
              {{
                firstSlot:
                <div className={`bg-gray-300 ${hover ? 'bg-red-900 text-white' : ''} ml-0 md:ml-2 h-20 w-20 flex justify-center items-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                  {children}
                </svg>
                </div>,
                secondSlot:
                <div className='h-full flex flex-col justify-center text-left'>
                  <h4 className='text-[0.8rem] md:text-l font-bold'>{text.title}</h4>
                  <p className='text-[0.6rem] md:text-xs'>{text.desc}</p>
                </div>
              }}
</ListComponent>
  )
}

export default HorizontalCard