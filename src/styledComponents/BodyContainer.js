import styled from "styled-components"

const BodyContainer = styled.body`
text-align: center;
width: 100vw;
height: 100vh;
color: ${props => props.theme.textColor};
background-color: ${props => props.theme.bodyBackground};
`

export { BodyContainer }