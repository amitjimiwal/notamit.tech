import {github,twitter,linkedin,resume_link,medium,instagram} from '../../amit.json'
import resume from '../../assets/svg/resume.svg'
import Github from '../../assets/svg/github.svg'
import Twitter from '../../assets/svg/twitter.svg'
import Linkedin from '../../assets/svg/linkedin.svg'
import Medium from '../../assets/svg/medium.svg'
import Insta from '../../assets/svg/insta.svg'
import { useThemeContext } from '../../hooks/useThemeContext'
const Footer = () => {
      const {theme}=useThemeContext();
  return (
    <div className={"md:max-w-4xl md:mx-auto p-3 md:p-5 border-t-[0.5px] "+`${theme==='dark' ? 'border-t-white':'border-t-primary '}`}>
     <div className='flex justify-center w-full gap-7 p-4'>
     <div>
            <a href={github} className='text-xl' target='_blank' rel='noreferrer'>
            <img src={Github} className='w-5'/>
            </a>
      </div>
     <div>
            <a href={resume_link} className='text-xl'  target='_blank' rel='noreferrer'>
            <img src={resume} className='w-5'/>
            </a>
      </div>
     <div>
            <a href={twitter} className='text-xl'  target='_blank' rel='noreferrer'>
            <img src={Twitter} className='w-5'/>
            </a>
      </div>
     <div>
            <a href={linkedin} className='text-xl'  target='_blank' rel='noreferrer'>
            <img src={Linkedin} className='w-5'/>
            </a>
      </div>
     <div>
            <a href={medium} className='text-xl'  target='_blank' rel='noreferrer'>
            <img src={Medium} className='w-5'/>
            </a>
      </div>
     <div>
            <a href={instagram} className='text-xl'  target='_blank' rel='noreferrer'>
            <img src={Insta} className='w-5'/>
            </a>
      </div>

     </div>
     <div className='flex justify-center w-full gap-7 p-4'>
         <h4 className='text-primary'>Made with ❤️ By Notamit</h4>
     </div>
    </div>
  )
}

export default Footer
