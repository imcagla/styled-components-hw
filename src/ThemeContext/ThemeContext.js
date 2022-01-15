import { createContext, useState} from "react";

const ThemeContext = createContext()

function ThemeContextProvider(props){  

    const [themeName, setThemeName] = useState({})
   
    return <ThemeContext.Provider value={{setThemeName, themeName}}>
        {props.children}
    </ThemeContext.Provider>
}

export {ThemeContext, ThemeContextProvider}