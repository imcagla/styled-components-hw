import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext/ThemeContext'
import { ThemeHeader, ThemeButton } from '../styledComponents/ThemeButtons'
import { BodyContainer } from '../styledComponents/BodyContainer'
import { BaseCard } from "../styledComponents/BaseCard"

function Home() {
    const { setThemeName, themeName } = useContext(ThemeContext)

    const themes = [
        { name: "Dark", colors: {name: "Dark", textColor: "white", buttonBg: "#181817", bodyBackground: "black", border: "white" } },
        { name: "Pink", colors: {name: "Pink", textColor: "#db7093", buttonBg: "#FFADEB", bodyBackground: "pink", border: "#db7093" } },
        { name: "Light", colors: {name: "Light", textColor: "black", buttonBg: "white", bodyBackground: "whitesmoke", border: "gray" } },
        { name: "Ocean", colors: {name: "Ocean", textColor: "#10425c", buttonBg: "#afeeee", bodyBackground: "#afeeee", border: "#10425c" } },
    ]

    return (
        <BodyContainer>
            <ThemeHeader>Theme Changer {themeName.name}</ThemeHeader>
            <BaseCard>
            {
                themes.map(item => 
                    <ThemeButton
                        buttonColor={{theme:item.name, buttonBg: item.colors.buttonBg, border: item.colors.border, textColor: item.colors.textColor}}
                        onClick={() => setThemeName(item.colors)}>
                        Change Theme - {item.name}
                    </ThemeButton>
                )
            }
            </BaseCard>

            <BaseCard>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nulla obcaecati provident et delectus debitis illum quos quis atque culpa dicta odit sapiente aperiam, quae labore alias a quisquam aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam vero nulla provident laboriosam expedita vitae impedit ratione accusamus, quis veniam sit soluta corporis? Alias, fugiat totam animi tempora accusantium dicta.
                Repellat, accusamus, saepe rerum animi, assumenda expedita in sapiente exercitationem deleniti quam maxime. Obcaecati quia, possimus illum neque magnam ab quis omnis molestias inventore cumque nostrum incidunt consequuntur iure ducimus!
                Repellat voluptatibus culpa architecto, mollitia delectus quaerat dignissimos, ea obcaecati veniam odit molestias deserunt, similique maiores temporibus. Aspernatur hic itaque rerum quam illum. Officiis eos ea minima illo, optio sequi.</p>
            </BaseCard>
        </BodyContainer>
    )
}

export default Home
