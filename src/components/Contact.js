import React from 'react';
import Button from './Button';


const ContactForm = () => {
  const buttonStuff = {
    className: "mx-auto flex items-center shadow-lg shadow-indigo-500/20 text-indigo-600 border border-indigo-600 py-2 px-4 rounded ml-4 mt-3 font-accent hover:text-indigo-400 hover:scale-105 duration-200",
    content: "Send"
  }

  
  return (
    <div id="contact" className="w-full h-screen text-center">
      <div className='justify-center mx-auto flex flex-col w-full h-full max-w-screen-lg'>
        <div className='pb-8'>
        <h2 className="text-2xl font-accent text-zinc-400 mt-20">.Contact</h2>
        <h2 className="py-6 text-zinc-400">Get in touch</h2>

        </div>
        
  
      <div className='flex justify-center items-center'>
      <form action='https://getform.io/f/b4e5ea89-cb07-46db-b030-021cf444088b' method='POST' className='flex flex-col w-full md:w-1/2'>
       <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-zinc-500 text-zinc-900 rounded-md border-2 focus:outline-none' />
       <input type="text" name='email' placeholder='Enter your email address' className='my-4 p-2 border-2 bg-zinc-500 text-zinc-900 rounded-md focus:outline-none' />
       <textarea name="message" rows="10" placeholder='Enter your message' className='bg-zinc-500 border-2 p-2 rounded-md text-zinc-900 focus:outline-none'></textarea>
       <Button props= {buttonStuff} type="submit">
          
        </Button>
      </form>
     
      </div>
      
    
    </div>
   
    </div>
  )
}
export default ContactForm