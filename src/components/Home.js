import React from 'react'
import selfimg from '../assets/mubarakj.png';
import {MdArrowRight} from "react-icons/md"
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name="home" 
    className='flex h-screen w-full bg-gradient-to-b from-black to-green-300'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center
        justify-center h-full px-4 md:flex-row' >
            <div className='flex flex-col justify-center h-full' >
                <h2 className='text-2xl sm:text-4xl font-bold text-white'>I'm a Front end devoloper, C developer and electrical/electronics engineer</h2>
                <p className='text-black-500 py-4 max-w-md'> 
                    I have 3 years of experience developing software
                    </p>
                <div> 
                    <Link 
                    to='portfolio' 
                    smooth duration={500}
                    className='group text-white w-fit px-6 py-3 my-2 
                    flex items-center rounded-md
                    bg-gradient-to-r from-red-900 to-black cursor-pointer'>
                        portfolio
                        <span className=' group-hover:rotate-90 duration-300'>
                            <MdArrowRight/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={selfimg} 
                alt='my profile' 
                className='rounded-2xl mx-auto w-2/3  md:w-full'
                />
            </div>
        </div>
    </div>
  )
}

export default Home