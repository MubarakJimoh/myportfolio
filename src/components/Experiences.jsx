import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactimage from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'

const Experience = () => {
    const techs = [
        {
          id: 1,
          src:html ,
          title: 'HTML',
        },
        {
          id: 2,
          src:css ,
          title: 'CSS',
        },
        {
          id: 3,
          src:javascript ,
          title: 'Javascript',
        },
        {
          id: 4,
          src:reactimage ,
          title: 'ReactJS',
        },
        {
          id: 5,
          src:github ,
          title:'GitHub',
        },
        {
          id: 6,
          src:tailwind ,
          title:'Tailwind',
        },
        
        
      ]
  return (
    <div 
    name='experience'
    className='bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-screen '>
       
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
                        justify-center w-full h-full'>
            <div>
                <p className='text-4xl 
                font-bold inline border-b-4
                 border-gray-500'> Experience</p>
                <p className='py-6'>These are the technologies I have worked with</p>
            </div>
            <div className='grid sm:grid-cols-2 
            md:grid-cols-3 gap-8  px-12 sm:px-0'>
                 {techs.map(({id, src, title}) => (
                <div 
                key={id}
                className='shadow-md hover:scale-105 duration-500
                py-2 rounded-lg'>
                    <img src={src} alt='' className='w-20 mx-auto'/>
                    <p>{title}</p>
                </div>
                   ))}
            </div>
        </div>
     

    </div>
  )
}

export default Experience