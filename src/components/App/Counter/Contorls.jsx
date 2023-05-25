import React from "react";
import { Button, ContainerB } from './Counter.styled';

export const Controls = ({onIncrement, onDecrement}) => (
    <ContainerB>
                <Button type="button" onClick={onIncrement}>Збільшити +1</Button>
                <Button type="button" onClick={onDecrement}>Зменшити -1</Button>
            </ContainerB>
);