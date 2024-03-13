import {name,tagline ,resume_link,image} from '../../amit.json'
import { useThemeContext } from '../../hooks/useThemeContext';
import Goto from "../icons/Goto";
const Home = () => {
  const {theme}=useThemeContext();
  return (
    <div className="w-full pt-36 sm:pt-28 md:max-w-4xl md:mx-auto px-2 flex sm:flex-row flex-col justify-center" id="home">
      <div className='sm:w-[300px] w-[250px] text-center mx-auto'>
        <img src={image} alt="profileimage" className="object-contain rounded-lg" />
      </div>
      <div className='tracking-wider font-bold text-lg text-justify sm:text-left pl-4 flex justify-center flex-col'>
      <h2 className="sm:text-main text-primary">
          {" "}
          Hi, I am{" "}
          <span className={"md:text-main "+`${theme==='dark' ? 'text-white':'text-secondary'}`}>{name}</span> from
          India 🇮🇳
          <h4 className="sm:text-xl text-primary mt-2">{tagline}</h4>
        </h2>
        <div className='cursor-pointer mt-3 text-center sm:text-left'>
          <a href={resume_link} target="_blank" className='text-white font-bold bg-button p-1 py-2 rounded-xl' rel='noreferrer'>
            <Goto />  Resume
          </a>
      </div>
      </div>
    </div>
  );
};

export default Home;
