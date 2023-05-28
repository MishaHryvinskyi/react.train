import styled from "@emotion/styled";


export const ContainerBtn = styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 90px;
    align-items: center;
    background-color: grey;
    width: 500px;
    border-radius: 10px;
    padding: 50px;
`;




export const Btn1 = styled.button`
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: green;
    color: white;
    &:hover {
        background-color: white;
        color: black;
    }

    margin-right: 20px;
`;

export const Btn2 = styled.button`
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;
    &:hover {
        background-color: white;
        color: black;
    }
    color: white;
    margin-left: 20px;
`;

export const ValueItem = styled.span`
    font-weight: 700;
    font-size: 50px;
`;