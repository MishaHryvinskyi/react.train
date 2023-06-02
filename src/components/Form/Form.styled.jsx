import styled from "@emotion/styled";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    background-color: skyblue;
    width: 500px;
    padding: 20px;
    border-radius: 20px;
`;

export const Input = styled.input`
    width: 200px;
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 10px;
    border: solid 3px grey;
    &:hover {
        border: solid 3px indigo;
    }
`;

export const Btn = styled.button`
    width: 150px;
`;