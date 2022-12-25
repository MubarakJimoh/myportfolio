import React from 'react'
import installNode from '../assets/portfolio/portfoliopic.png'
import navbar from '../assets/portfolio/reactWeather.jpg'
import reactParallax from '../assets/portfolio/Foodapppic.png'
import reactSmooth from '../assets/portfolio/icccodepic.png'
import recipe from '../assets/portfolio/recipeapppic.png'


const Portfolio = () => {
    const links = [
        {
          id: 1,
          src: installNode,
          href1: "hhttps://github.com/MubarakJimoh/myportfolio",
          href2: "https://jimohmportfolio.netlify.app",

        },
        {
          id: 2,
          src: navbar,
          href1: "https://github.com/MubarakJimoh/Weather-app",
          
        },
        {
          id: 3,
          src: reactParallax,
          href1: "hhttps://github.com/MubarakJimoh/Food-app",
          href2: "https://afroeats.netlify.app",
        },
        {
          id: 4,
          src: reactSmooth,
          href1: "https://github.com/MubarakJimoh/stock-app",
          href2: "https://stockappbyjimoh.netlify.app",
        },
        {
          id: 5,
          src: recipe,
          href1: "https://github.com/MubarakJimoh/recipe-app",
          href2: "https://recipeappbyjimoh.netlify.app",
        },
        {
          id: 5,
          src: recipe,
          href1: "https://github.com/MubarakJimoh/Train-simulator",
          
        },
        
        
      ]
  return (
    <div name='portfolio'
     className='bg-gradient-to-b from-black to-gray-800 w-full
      text-white md:h-screen ' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
                        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl 
                font-bold inline border-b-4
                 border-gray-500'>Portfolio</p>
                <p>Check out some of my work here</p>
            </div>
            <div className='grid sm:grid-cols-2 
            md:grid-cols-3 gap-8  px-12 sm:px-0'>
            {links.map(({id, src, href1, href2}) => (
             <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              
                <img src= {src} alt=''
                className='rounded-md duration-200
                           hover:scale-105  ' 
                           key={id}/>  
        
                <div className='flex items-center justify-center'>
                    <button  className='w-1/2 px-6 py-3
                    duratin-200 hover:scale-105'>
                      <a href= {href1}>github</a>
                    </button> 
                    {
                     href2 && <button className='w-1/2 px-6 py-3
                    duratin-200 hover:scale-105'>
                       <a href= {href2}>Demo</a>
                    </button>
                    }
                    
                </div>
            </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio