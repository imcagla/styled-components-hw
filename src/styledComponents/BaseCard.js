import styled from "styled-components";

const BaseCard = styled.div`
    display: inline-block;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: auto;
    padding: 30px 16px;
    margin: 5px;
    border: 2px solid ${props => props.theme.border};
    border-radius: 25px;
`

export { BaseCard }