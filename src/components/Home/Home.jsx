import {name,tagline ,resume_link,image} from '../../amit.json'
import profile from "../../assets/pfp.png";
import { useThemeContext } from '../../hooks/useThemeContext';
import Goto from "../icons/Goto";
const Home = () => {
  const {theme}=useThemeContext();
  return (
    <div className="w-full my-20 h-auto flex sm:justify-around items-center flex-col sm:flex-row" id="home">
      <div className="h-auto pt-10 self-center">
        <div className='sm:w-[400px] w-[250px] text-center'>
        <img src={image} alt="profileimage" className="object-contain rounded-lg" />
        </div>
      </div>
      <div className=''>
      <div className="mt-3 tracking-wider font-bold text-lg text-center sm:text-left">
        <h2 className="sm:text-main text-primary">
          {" "}
          Hi, I am{" "}
          <span className={"md:text-main "+`${theme==='dark' ? 'text-white':'text-secondary'}`}>{name}</span> from
          India 🇮🇳
        </h2>
      </div>
      <div className="mt-7 tracking-wider font-bold sm:text-left text-base text-center">
        <h4 className="sm:text-2xl text-primary">{tagline}</h4>
      </div>
      <div className='cursor-pointer mt-5 text-center sm:text-left'>
          <a href={resume_link} target="_blank" className='text-white font-bold bg-button p-3 rounded-xl' rel='noreferrer'>
            <Goto />  Resume
          </a>
      </div>
      </div>
    </div>
  );
};

export default Home;
