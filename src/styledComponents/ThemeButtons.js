import styled from "styled-components";
import { BaseButton } from "./BaseButton";

const ThemeHeader = styled.header`
    color: ${props => props.theme.textColor};
    display: flex;
    justify-content: center;
    padding: 20px;
    font-size: 40px;
    font-weight:bold;
`

const ThemeButton = styled(BaseButton)`
    color: ${props => props.buttonColor.textColor};
    background-color: ${props => props.buttonColor.buttonBg};
    border: 3px solid ${props => props.buttonColor.border};
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
`


export {ThemeButton, ThemeHeader}