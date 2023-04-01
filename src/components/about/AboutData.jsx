import React, {useEffect} from 'react';
import portImage from '../../images/profilePhoto.jpg';
import Aos from "aos";
import "aos/dist/aos.css"; 


const AboutData = () => {
  useEffect(() =>{
    Aos.init({duration: 3000});
  }, []);

  return (
    <div>
         <div data-aos="fade-up" className="md:flex flex-row md:text-left text-center">     
          <img className='h-60 md:w-80 rounded-full p-2 mx-auto' src={portImage} alt="profile"/>
          <p className=" text-lg text-zinc-400 tracking-wide md:p-4"> 
      I'm a front end web developer and life-long learner with a background in philosophy,
       film, photography and art. I've traveled and lived all over the world from rural 
       himalayan villages to dense bustling cites like London, New York and Beijing. 
       My diverse background has strengthened my creative and innovative problem-solving 
       abilites and has blossemed into a passion for developing clean, user-friendly, 
       functional code with a focus on UI and UX. In the physical, tangible world 
       I enjoy hiking the coasts of the UK, surfing the Atlantic and eating spicy ramen!
      </p>
</div>
<div>


       
      </div>

    </div>
  )
}

export default AboutData
