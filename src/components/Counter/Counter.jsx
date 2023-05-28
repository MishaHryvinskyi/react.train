import React, {Component} from "react";
import { ImCircleLeft, ImCircleRight } from "react-icons/im";


import { Btn1, Btn2,  ContainerBtn, ValueItem } from './Counter.styled'

class Counter extends Component {
    state = {
        value: 0,
    }
    

handleIncrement = () => {  
    this.setState (prevState => ({value:prevState.value + 1}));
}

handleDecrement = () => {
    this.setState (prevState => ({value: prevState.value -1}));
}


    render() {
        return (
            <ContainerBtn>
                <Btn1 onClick={this.handleIncrement}><ImCircleLeft style={{width: "30px", height: "30px"}}/></Btn1>
                <ValueItem>{this.state.value}</ValueItem>
                <Btn2 onClick={this.handleDecrement}><ImCircleRight style={{width: "30px", height: "30px"}}/></Btn2>
            </ContainerBtn>
        )
    }
}

export default Counter;