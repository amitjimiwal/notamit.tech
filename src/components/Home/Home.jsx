import { useEffect } from 'react';
import {name,tagline ,resume_link} from '../../amit.json'
import profile from "../../assets/pfp.png";
import Goto from "../icons/Goto";
import { toast } from 'react-hot-toast';
const Home = () => {

  return (
    <div className="w-full mt-20 h-auto flex flex-col items-center" id="home">
      <div className="w-[300px] h-auto">
        <img src={profile} alt="profileimage" className="w-full h-auto" />
      </div>
      <div className="mt-3 tracking-wider font-bold text-lg text-center">
        <h2 className="md:text-subheading text-primary">
          {" "}
          Hi, I am{" "}
          <span className="md:text-heading text-secondary">{name}</span> from
          India 🇮🇳
        </h2>
      </div>
      <div className="mt-3 tracking-wider font-bold text-center text-base">
        <h4 className="md:text-xl text-primary">{tagline}</h4>
      </div>
      <div className='cursor-pointer mt-5'>
          <a href={resume_link} target="_blank" className='text-white font-bold bg-button p-3 rounded-xl' rel='noreferrer'>
            <Goto />  Resume
          </a>
      </div>
    </div>
  );
};

export default Home;
