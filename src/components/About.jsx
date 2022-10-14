import React from 'react'

const About = () => {
  return (
    <div name='about'
          className='w-full h-screen bg-gradient-to-b
           from-black to-gray-700 text-white' >
        <div className='max-w-screen-lg p-4 mx-auto flex 
        flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <h1 className='text-4xl font-bold inline border-b-4
                 border-gray-500'>
                 About   
                    </h1>
            </div>
                <p className='text-xl mt-10'>
             I am a graduate of Electrical/Electronics 
             Engineering from the university of Lagos. My first
             experience with programming was with c++ in my 200 level.
                </p>
                <br />
                <p className='text-xl'>
              I worked for 2 years in an automation company using C to program 
              industrial arduinos to make aimulators. The other languages include
              python and javascript and frameworks like react.
    

                </p>
        </div>
    </div>
  )
}

export default About                                     