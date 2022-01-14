import styled from "styled-components";

const BaseCard = styled.div`
    width: 500px;
    height: 500px;
    border: 5px solid ${props => props.theme.border};
`

export {BaseCard}