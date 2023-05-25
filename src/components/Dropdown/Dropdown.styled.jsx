import styled from "@emotion/styled";

export const Division = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: solid 1px black;
    border-radius: 20px;
    &:hover {
        background-color: purple;
        color: white;
    }
    position: relative;
`;

export const DropdownBtn = styled.button`
    display: flex;
    align-items: center;
    padding: 10px 20px;
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

export const Dropdowne = styled.div`
position: absolute;
top: 1005;
left: 0;
width: 100%;
hight: 400px;

    display: flex;
    align-items: center;
    flex-direction: column;
    border: solid 1px black;
    border-radius: 20px;
    &:hover {
        background-color: purple;
        color: white;
    }
`;