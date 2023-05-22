import React from "react";
import { ContBtn, Btn1, Btn2 } from './Counter.styled';
const Controls = ({ onIncrement, onDecrement }) => (
     <ContBtn>
          <Btn1 onClick={onIncrement}>Збільшити на 1</Btn1>
          <Btn2 onClick={onDecrement}>Зменьшити на 1</Btn2>
      </ContBtn> 
);

export default Controls;