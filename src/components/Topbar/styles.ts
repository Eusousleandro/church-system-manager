import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    background-color: #333;
`

export const StyleLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 18px; 
    font-weight: bold;
    &:hover {
        opacity: 0.8;
    }
`