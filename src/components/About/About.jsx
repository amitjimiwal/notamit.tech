import {about} from '../../amit.json'
const About = () => {
  return (
    <div className="md:max-w-4xl md:mx-auto p-3 md:p-5" id="about">
      <div className="mb-3">
        <h1 className="text-heading text-secondary font-bold flex items-center gap-3 ">
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
        <p className='tracking-wider text-[#1A202C] font-semibold'>
         {about}
        </p>
      </div>
    </div>
  );
};

export default About;
