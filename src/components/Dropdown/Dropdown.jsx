import React from "react";
import { Division, DropdownBtn, Dropdowne } from './Dropdown.styled';

export class Dropdown extends React.Component {
    state = {
        visible: false,
    }

toggle = () => {
    this.setState(prevState => ({
        visible: !prevState.visible,
    }))
}

    // show = () => {
    //     this.setState({ visible: true });
    // };

    // hide = () => {
    //     this.setState({ visible: false });
    // };
    
    render() {
        const { visible } = this.state;
        return (
            <Division>
                <DropdownBtn type="button" onClick={this.toggle}>
                  {visible ? 'Сховати' : 'Показаи' }
                    </DropdownBtn>
                {/* <DropdownBtn type="button" onClick={this.hide}>
                    Сховати
                    </DropdownBtn> */}
                    {visible && (<Dropdowne>Випадаюче меню</Dropdowne>)}
                
            </Division>
        );
    }
}