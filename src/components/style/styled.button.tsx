import styled from "styled-components";

export const Button = styled.button`
    border-radius: 0.5rem;
    padding: 0.5rem;
    text-transform: uppercase;
    font-weight: bold;
    background: transparent;
    box-shadow: 0 0 0.3rem var(--blue);
    cursor: pointer;
    
    &:active{
        box-shadow: 0 0 0.8rem 0.1rem var(--blue);
    }
`