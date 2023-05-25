import React from "react";
import { Division, DropdownBtn, Dropdowne } from './Dropdown.styled';

export class Dropdown extends React.Component {
    state = {
        visible: false,
    }

    show = () => {
        this.setState({ visible: true });
    };

    hide = () => {
        this.setState({ visible: false });
    };
    
    render() {
        return (
            <Division>
                <DropdownBtn type="button" onClick={this.show}>
                    Показати
                    </DropdownBtn>
                <DropdownBtn type="button" onClick={this.hide}>
                    Сховати
                    </DropdownBtn>
                    {this.state.visible && (<Dropdowne>Випадаюче меню</Dropdowne>)}
                
            </Division>
        );
    }
}