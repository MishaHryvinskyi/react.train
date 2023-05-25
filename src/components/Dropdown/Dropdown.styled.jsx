import styled from "@emotion/styled";

export const Division = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: solid 1px black;
    width: 400px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    border: solid 2px purple;
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
        background-color: grey;
        border-radius: 15px;
    }
`;

export const Dropdowne = styled.div`
position: absolute;
top: 100%;
left: 0;
width: 100%;
height: 100%;
font-size: 30px;

    display: flex;
    align-items: center;
    flex-direction: column;
        background-color: purple;
        color: white;
`;