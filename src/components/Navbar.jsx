import { useState } from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import Bars from "./icons/Bars";
import Close from "./icons/Close";
let Links = [
  { name: "Home", link: "/#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Project", link: "#project" },
  { name: "Blogs", link: "#blog" },
];
const Navbar = () => {
  const [open, setopen] = useState(false);
  const { theme } = useThemeContext();
  return (
    <section className={"w-full h-20 p-2 flex  justify-between items-center md:justify-around  fixed top-0 z-999 "+`${theme==='dark' ? 'bg-darkmodebackground':'bg-background'}`}>
      {/* <div className="w-10 m-3">
        <Logo />
      </div>  */}
      <div className={"absolute w-full h-auto p-5 top-20 md:static text-center "+`${theme==='dark' ? 'bg-darkmodebackground':'bg-background'}`}>
        <ul className={"w-full flex flex-col items-center md:flex-row md:justify-center md:items-center"+`${open ? '':' hidden md:flex'}`}>
      {
        Links.map((link,index)=> (
          <li className="text-2xl font-medium m-5 text-primary hover:text-secondary focus:text-secondary" key={index} onClick={()=>{setopen(!open)}}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))
      }
        </ul>
      </div>
     <div className="flex items-center mr-2">
     {/* <div onClick={()=>{
      changeTheme()
      }} className="w-10 m-3">
        <div>
        { theme==='dark' ? <Light />: <Dark/>}
        </div>
      </div> */}
      <div onClick={()=> setopen(!open)} className="md:hidden">
        <div>
         {open ? <Close/>: <Bars />}
        </div>
      </div>
     </div>
    </section>
  );
};
export default Navbar;
