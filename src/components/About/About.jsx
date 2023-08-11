import {about} from '../../amit.json'
import { useThemeContext } from '../../hooks/useThemeContext';
const About = () => {
  const {theme}=useThemeContext();
  return (
    <div className="md:max-w-4xl md:mx-auto p-3 md:p-5" id="about">
      <div className="mb-3">
        <h1 className={"text-heading font-bold flex items-center gap-3 "+`${theme==='dark' ? 'text-white':'text-secondary'}`}>
          <img
            alt="wave"
            src="https://emojis.slackmojis.com/emojis/images/1613285697/12806/meow_attention.png?1613285697"
            width="36"
            className="inline"
          />{" "}
          Hi, How are You ?{" "}
        </h1>
      </div>
      <div className='p-5'>
        <p className={'tracking-wider  font-semibold '+`${theme==='dark' ? 'text-[#E2E8F0]':'text-[#1A202C]'}`}>
         {about}
        </p>
      </div>
    </div>
  );
};

export default About;
