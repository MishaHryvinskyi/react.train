import React, { Component } from "react"; 

export class Reader extends Component {
    state = {
        index: 0,
    }

changeIndex = (value) => {
    this.setState(state => ({ index: state.index + value }));
}

    render() {
        return (
            <div>
                <section>
                    <button type="button" onClick={() => this.changeIndex(- 1)}>
                        Назад
                    </button>
                    <button type="button" onClick={() => this.changeIndex(+ 1)}>
                        Вперед
                    </button>
                </section>
                <p>{this.state.index + 1}/{this.props.items.length}</p>
            </div>
        )
    }
}


