import React,{createContext, useContext, useState} from 'react'

export const AppContext=createContext();
const ThemeContext = ({children}) => {
  const [theme,setTheme]=useState('dark')
  const changeTheme=()=>{
    setTheme(prev=> prev==='light'?'dark':'light');
  }
  return (
    <AppContext.Provider value={{theme,changeTheme}}>
      {children}
    </AppContext.Provider>
  )
}
export default ThemeContext

export const useThemeContext=()=>{
   const {theme,changeTheme}=useContext(AppContext)
   return {theme,changeTheme};
}

