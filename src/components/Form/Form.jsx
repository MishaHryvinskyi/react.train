import React, {Component} from "react";
import { Form } from './Form.styled';

class MyForm extends Component {
    state = {
        name: '',
        tag: '', 
      }
    
    
    handleChange = event => {
      const { name, value } = event.currentTarget;
    
      this.setState({
        [name]: value,
      })
    }
    
    handleSubmit = evt => {
      evt.preventDefault();
    this.props.onSubmit(this.state)
      this.reset();
    }

reset = () => {
    this.setState({ name: '', tag: '', })
}

render() {
    return (
        <Form onSubmit={this.handleSubmit}>
        <label/>
        ім'я  <input 
      type='text'
      name='name' 
      value={this.state.name}
      onChange={this.handleChange} 
      />
      <label/>
      Прізвище <input 
      type='text'
      name='tag'
      value={this.state.tag}
      onChange={this.handleChange} 
      />
      <button type='submit'>Відправити</button>
      </Form>
    )
}

}

export default MyForm;