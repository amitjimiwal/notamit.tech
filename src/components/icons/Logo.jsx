import logo from "../../assets/logo.png";
import { useThemeContext } from "../../hooks/useThemeContext";
const Logo = () => {
      const {theme}=useThemeContext()
  return (
    <div className="w-full">
      <a href="/">
        <img src={logo} alt="logo" className={`${theme==='dark'? "text-white" : "text-black"}`}/>
      </a>
    </div>
  ); 
};

export default Logo;
