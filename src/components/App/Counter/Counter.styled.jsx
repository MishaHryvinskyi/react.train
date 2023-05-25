import styled from "@emotion/styled";

export const ContainerM = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: solid 1px black;
    border-radius: 20px;
    &:hover {
        background-color: purple;
    }
`;

export const Span = styled.span`
    display: flex;
    align-items: center;
    color: black;
    font-size: 25px;
    font-weight: 700;
    flex-direction: column;padding: 10px;
    border: solid 2px red;
    margin-bottom: 20px;

    &:hover {
        background-color: grey;
        border: solid 4px white;
        color: white;
        border-radius: 10px;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80px;
    background-color: teal;
    color: white;
    border-radius: 10px;
    border: none;
    margin-bottom: 20px;
    
    &:hover {
        color: black;
        background-color: white;
        border-radius: 15px;
    }
`;

export const ContainerB = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    background-color: grey;
    border-radius: 20px;

    &:hover {
        background-color: orange;
    }
`;