import React,{ Component } from "react";
import { ContainerModal, Backgdrop} from "./Modal.styled";


export default class Modal extends Component {
    componentDidMount() {

        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);

    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {

        this.props.onClose();
      }
    }

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        return (
            <Backgdrop onClick={this.handleBackdropClick}>
                <ContainerModal>{this.props.children}</ContainerModal>
            </Backgdrop>
        );
    }

}

