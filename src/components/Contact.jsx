import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_a6neg5n', 'template_s8ghl95', 
      form.current, '1jbWdS4S_V9uR2l1A')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

const contact = () => {
  return (
    <div     
    name='contact'
    className='bg-gradient-to-b from-black to-gray-800 w-full
    text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
                        justify-center w-full h-full'>
            <div>
                <p className='text-4xl 
                font-bold inline border-b-4
                 border-gray-500'>Contact</p>
                <p className='py-6'> Submit the form if you want to conact me</p>
            </div>
            <div className='flex justify-center item center'>
                <form ref={form} onSubmit={sendEmail}
                 method='POST' className='flex flex-col w-full 
                md:w-1/2'>
                    <input 
                    type='text' 
                    name='name' 
                    placeholder='Enter your name here'
                    className='p-2 bg-transparent border-2
                    rounded-md text-white focus:outline-none'/>
                    <input 
                    type='text'
                    name='email'
                    placeholder='Enter your email here' 
                    className=' my-4 p-2 bg-transparent border-2
                    rounded-md text-white focus:outline-none'/>
                    <textarea
                     name='message'
                     placeholder='Enter your message'
                     rows='10'
                     className='p-2 bg-transparent border-2
                    rounded-md text-white focus:outline-none'>
                    </textarea>
                    <button className='group text-white w-fit px-6 py-3 my-2 
                    flex items-center rounded-md
                    bg-gradient-to-r from-red-900 to-black cursor-pointer'>
                     Contact Me
                    </button>
                                        
                </form>
            </div>
        </div>
    </div>
  )
}
}
export default contact