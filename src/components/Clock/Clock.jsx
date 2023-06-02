import React, { Component } from "react";
import { ClockStyle } from './Clock.styled';
 
export default class Clock extends Component {
    state= {
        time: new Date().toLocaleTimeString(),
    };

    intervalId = null;

    componentDidMount() {

        this.intervalId = setInterval(
            () => this.setState({ time: new Date().toLocaleTimeString() }),
            1000,
        );
    }


    render() {
        return <ClockStyle>{this.state.time}</ClockStyle>
    }
}