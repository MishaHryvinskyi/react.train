import styled from '@emotion/styled';

export const Container = styled.div`
padding: 24px;
`;

export const BtnExit = styled.button`
    border-radius: 10px;
    padding: 10px 20px;
    background-color: skyblue;
    border: 3px solid pink;
    &:hover {
        background-color: blue;
        border: 5px solid purple;
        color: white;
        font-size: 18px;
        font-weight: 800;
    }
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;
    margin-bottom: 50px;
`;