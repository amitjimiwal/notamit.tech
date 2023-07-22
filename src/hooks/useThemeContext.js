import { AppContext } from "../context/ThemeContext";
import { useContext } from "react";
export const useThemeContext=()=>{
      const {theme,changeTheme}=useContext(AppContext)
      return {theme,changeTheme};
}