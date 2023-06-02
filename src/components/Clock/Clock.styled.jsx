import styled from "@emotion/styled";

export const ClockStyle = styled.div`
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    margin-top: 40px;
    font-size: 30px;
    font-weight: 600;
    border: solid 4px grey;
    border-radius: 10px;
    width: 150px;
    padding: 20px;
    background-color: skyblue;
    color: black ;

    &:hover {
        border: solid 4px black;
        background-color: white;
        color: black;
        cursor: pointer;
    }
`;