import React, { Component } from "react";
import { ColorContainer, Box, MainBox, TitleColorPicker } from './ColorPicker.styled';


class ColorPicker extends Component {
state = {
    activeOptionIdx: 0,
};
setActiveIdx = index => {
    this.setState({ activeOptionIdx: index});  
}

    render(){
        const { activeOptionIdx } = this.state;
        const { options } = this.props;
        
        const { label } = options[activeOptionIdx];
        return (
            <MainBox>
            <TitleColorPicker>Color Picker</TitleColorPicker>
            <p>Вибраний колір: {label}</p>
            <Box>
                {this.props.options.map(({ label, color}, index) => (
                    <ColorContainer key={label}
                    style={{ backgroundColor: color}}
                    onClick={() => this.setActiveIdx(index)}
                    ></ColorContainer>
                ))}
            </Box>
        </MainBox>
        );
    }
}


export default ColorPicker;