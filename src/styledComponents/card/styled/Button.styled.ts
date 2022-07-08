import styled, { css } from "styled-components";

enum varinsButtons {
    primary= 'primary',
    secondary='secondary'
};

interface propsButtonStyled {
    variant: varinsButtons | 'primary' | 'secondary';
};

export const Button=styled.button<propsButtonStyled>`//para que pueda admitir las props de variant
    cursor: pointer;
    border: none;
    width: 9rem;
    border-radius: 30rem;
    transition: all .5s;

    &:hover {
        transform: scale(1.1);
    }

    ${props=>{
        switch (props.variant) {
            case varinsButtons.primary:
                return css`
                    background-color: blueviolet;
                `;
            case 'secondary':
                return css`
                    background-color: aqua;
                `;
            default:
                return;
        }
    }}
`;