import React, {Component} from "react";
import { Form, Input, Btn } from './Form.styled';

class MyForm extends Component {
    state = {
        name: '',
        tag: '', 
        experience: 'junior',
        licence: false,
      }
    
    handleLicenceChenge = e => {
      console.log(e.currentTarget.checked)
      this.setState({ licence: e.currentTarget.checked })
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
        ім'я  <Input 
      type='text'
      name='name' 
      value={this.state.name}
      onChange={this.handleChange} 
      />
      <label/>
      Прізвище <Input 
      type='text'
      name='tag'
      value={this.state.tag}
      onChange={this.handleChange} 
      />

      <p>Ваш рівень:</p>
      <label>
      <input 
      type="radio" 
      name="experience" 
      value="junior" 
      onChange={this.handleChange}
      checked={this.state.experience === 'junior'} />junior
      </label>
      <label>
      <input 
      type="radio" 
      name="experience" 
      value="middle" 
      onChange={this.handleChange} 
      checked={this.state.experience === 'middle'}/>middle
      </label>
      <label>
      <input 
      type="radio" 
      name="experience" 
      value="senior" 
      onChange={this.handleChange} 
      checked={this.state.experience === 'senior'}/>senior
      </label>

      <label>
      <input 
      type="checkbox" 
      name="licence" 
      checked={this.state.licence} 
      onChange={this.handleLicenceChenge} 
      /> Погоджуюся на умови
      </label>

      <Btn type='submit' disabled={!this.state.licence} >Відправити</Btn>
      </Form>
    )
}

}

export default MyForm;