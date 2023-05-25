import styled from "@emotion/styled";


export const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    border: solid 2px black;
    width: 500px;
    margin-top: 60px;
    justify-content: center;
    padding: 30px;
`;

export const TitleColorPicker = styled.h2`
    text-align: center;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ColorContainer = styled.button`
    display: flex;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border: none;
    border-radius: 4px;
    transition: transform 250ms linear;
    cursor: pointer;
    &:active {
        transform: scale(1.2);
    }
`;