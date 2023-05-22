import React from "react";
import './Counter';
import { Cont, Span, ContBtn, Btn1, Btn2 } from './Counter.styled';
import Controls from "./Controls";

class Counter extends React.Component {
    static defaultProps = {
        initialValue: 0,
    };

    static propTypes = {
        // 
    }

    state = {
        value: this.props.initialValue,
    };

    handleIncrement = () => {
        this.setState(prevState => ({
                value: prevState.value + 1,
        }));
        
    }
    handleDecrement = () => {
        this.setState(prevState => ({
                value: prevState.value - 1,
        }));
    }
 
    
    render() {
      return <Cont>
      <Span>{this.state.value}</Span>
      <Controls 
      onIncrement={this.handleIncrement} 
      onDecrement={this.handleDecrement}
      />
  </Cont>  
    }
}

export default Counter;