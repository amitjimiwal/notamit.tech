import React,{createContext, useContext, useState} from 'react'

export const AppContext=createContext();
const ThemeContext = ({children}) => {
  const [theme,setTheme]=useState('light')
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


