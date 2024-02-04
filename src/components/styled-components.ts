import styled, { createGlobalStyle } from "styled-components";

interface CardFormProps{
    showContents: boolean;
}

interface GlobalStyleProps{
    handleDarkTheme: boolean;
}

interface ThemeSelectionProps{
    darkTheme: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    body {
        background-color: ${props => props.handleDarkTheme? "#1b1c1c" : ""};
        color: ${props => props.handleDarkTheme? "whitesmoke" : ""};
    }
`; 

export const CardContainer = styled.span`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 20%;
    display: inline-block;
    margin-bottom: 10px;
    margin-left: 1%;
    margin-top: 10px;
    aspect-ratio: 1;
    text-align: center;
`;

export const CardImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 2px 16px;
`;

export const Icon = styled.img`
    height: 24px;
    width: 24px !important;
`;

export const IconContainer = styled.div`
    margin-left: auto;
`;

export const ShowFavorite = styled.span`
    position: absolute;
    right: 5%;
`;

export const ChoiceButtons = styled.button`
    margin-right: 5px;
`;

export const CardForm = styled.span<CardFormProps>`
    position: relative;
    left: 1%;
    display: ${props => props.showContents? "none" : ""};
`;

export const ThemeSelection = styled.img<ThemeSelectionProps>`
    height: 25px;
    width: 25px;
    content: url(${props => props.darkTheme? "https://png.pngtree.com/png-clipart/20220911/original/pngtree-shining-bright-light-bulb-png-image_8539561.png" : "https://pixsector.com/cache/cec946a5/avde0e25d106d5c8b716b.png"});
`;