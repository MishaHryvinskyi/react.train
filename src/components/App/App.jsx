
// import Counter from './Counter/Counter';
import { Dropdown } from 'components/Dropdown/Dropdown';
import Counter from '../Counter/Counter';
import React, { Component } from 'react';
import Form from '../Form/Form';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336'},
//   { label: 'green', color: '#4CAF50'},
//   { label: 'blue', color: '#2196F3'},
//   { label: 'grey', color: '#607D8B'},
//   { label: 'pink', color: '#E91E63'},
//   { label: 'indigo', color: '#3F51B5'},
// ];

class App extends Component {

  formSubvitHandler = data => {
    console.log(data);
  }

  render() {
  return (
    <div>
      <Form onSubmit={this.formSubvitHandler}/>
    {/* <Counter /> */}
    <Dropdown/>
    <Counter />
    </div>
  );
}
}
export default App;
