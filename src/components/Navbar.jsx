import { useState } from "react";
import { useThemeContext } from "../hooks/useThemeContext";
import Light from "./icons/Light";
import Logo from "./icons/Logo";
import Bars from "./icons/Bars";
import Close from "./icons/Close";
import Dark from "./icons/Dark";
let Links = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Project", link: "#project" },
  { name: "Blogs", link: "#blog" },
];
const Navbar = () => {
  const [open, setopen] = useState(false);
  const { theme ,changeTheme} = useThemeContext();
  return (
    <section className="w-full h-20 p-2 flex  justify-between items-center md:justify-around border-2 fixed z-999">
      <div className="w-10 m-3">
        <Logo />
      </div> 
      <div className="absolute w-full h-auto p-5 top-20 md:static text-center">
        <ul className={"w-full flex flex-col items-center md:flex-row md:justify-center md:items-center"+`${open ? '':' hidden md:flex'}`}>
      {
        Links.map((link,index)=> (
          <li className="text-2xl font-medium m-5" key={index}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))
      }
        </ul>
      </div>
     <div className="flex items-center mr-2">
     <div onClick={()=>{
      changeTheme()
      }} className="w-10 m-3">
        <div>
        { theme==='dark' ? <Light />: <Dark/>}
        </div>
      </div>
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
