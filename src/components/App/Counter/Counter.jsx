 import React from "react";
 import { ContainerM } from './Counter.styled';
 import { Controls } from './Contorls';
 import { Value } from "./CounterValue";
 



 class Counter extends React.Component {
    static defaultProps = {
        initialValue: 0,
    };
        state = {
            value: this.props.initialValue,
        }
    
    handleIncrement = () => {
       this.setState(prevState => {
        return {
            value: prevState.value +1,
        }
       });
    };

    handleDecrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value -1,
            }
           });
    };
    render() {
        return (
            < ContainerM>
            <Value 
            value={this.state.value}
            />

            <Controls 
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            />
        </ ContainerM>
        );
    }
 }
 
 

 export default Counter;