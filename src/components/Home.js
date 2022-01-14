import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext/ThemeContext'
import { ThemeHeader, DarkThemeButton, BodyContainer } from '../styledComponents/ThemeButtons'
import { BaseCard } from "../styledComponents/BaseCard"

function Home() {
    const {setThemeName, themeName} = useContext(ThemeContext)

    return (
        <BodyContainer>
            <ThemeHeader>Theme Changer</ThemeHeader>
            <BaseCard>
                <DarkThemeButton onClick={() => setThemeName({...themeName , textColor: "white", buttonBg: "black", bodyBackground: "black", border: "white"})}>Change Theme - Dark</DarkThemeButton>
            </BaseCard>
            
            {/* {
                colors.map(item => <Button name={item.primary} />)
            } */}
        </BodyContainer>
    )
}

export default Home
