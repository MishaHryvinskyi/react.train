import React, {Component} from "react";

class Form extends Component {
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
      
    }

render() {
    return (
        <form onSubmit={this.handleSubmit}>
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
      </form>
    )
}

}

export default Form;