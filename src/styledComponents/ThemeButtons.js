import styled from "styled-components";
import { BaseButton } from "./BaseButton";

const ThemeHeader = styled.header`
    color: ${props => props.theme.textColor};
    display: flex;
    justify-content: center;
    padding: 20px;
    font-size: 30px;
`

const DarkThemeButton = styled(BaseButton)`
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.buttonBg};
    border-color: ${props => props.theme.border}
`

const BodyContainer = styled.body`
    width: 100vw;
    height: 100vh;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.bodyBackground};
`


export {DarkThemeButton, BodyContainer, ThemeHeader}