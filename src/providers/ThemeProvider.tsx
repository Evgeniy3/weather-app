import { ReactNode, useState } from "react"
import { Theme, ThemeContext } from "../context/ThemeContext"
import { changeCssRootVar } from "../model/changeCssRootVar"
import { storage } from "../model/stotage"

interface Props {
    children: ReactNode
}

export const ThemeProvider = ({ children, ...props }: Props) => {
    
    const [theme, setTheme] = useState<Theme>( storage.getItem('theme') || Theme.LIGHT)

    changeCssRootVar(theme)
    const changeTheme = (theme: Theme) => {
        storage.setItem('theme', theme)
        setTheme(theme)
        changeCssRootVar(theme)
      }

    return (
        <ThemeContext.Provider value={{
            theme,
            changeTheme,
        }}
        {...props}>
            {children}
        </ThemeContext.Provider>
    )
}