import React, {Component} from "react";
import { ImCircleLeft, ImCircleRight } from "react-icons/im";

import { Btn } from './Counter.styled'

class Counter extends Component {
state = {
    value: 0,
}



    render() {
        return (
            <div>
                <span>0</span>
                <Btn onClick={() => {console.log("me")}}><ImCircleLeft/></Btn>
                <Btn onClick={() => {console.log('Сам ти  Мармулига')}}><ImCircleRight/></Btn>
            </div>
        )
    }
}

export default Counter;