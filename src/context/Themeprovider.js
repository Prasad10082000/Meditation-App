import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const Themeprovider = (props) => {
    const [darkmode, setDarkmode] = useState(JSON.parse(localStorage.getItem("darkmode")))
  return (
    <ThemeContext.Provider value={{darkmode,setDarkmode}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export default Themeprovider;