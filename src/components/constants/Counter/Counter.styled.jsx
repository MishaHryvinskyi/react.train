import styled from "@emotion/styled";

export const Cont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Span = styled.span`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 40px;
    widtg: 50px;
`;

export const ContBtn = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 2px black;
    padding: 20px;
    align-items: center;
    width: 400px;
`;

export const Btn1 = styled.button`
    width: 200px;
    background-color: green;
    border: none;
    margin-bottom: 20px;
    color: white;
    border-radius: 4px;
    text-align: center;
    padding: 10px;

    &:hover {
        background-color: skyblue;
        color: purple;
        cursor:pointer;
    }
`;

export const Btn2 = styled.button`
    width: 200px;
    background-color: green;
    border: none;
    color: white;
    border-radius: 4px;
    text-align: center;
    padding: 10px;    

    &:hover {
        background-color: skyblue;
        color: purple;
        cursor:pointer;
    }
`;