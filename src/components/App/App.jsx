
// import Counter from './Counter/Counter';
import { Dropdown } from 'components/Dropdown/Dropdown';
import Counter from '../Counter/Counter';
import React, { Component } from 'react';
import Form from '../Form/Form';
import Modal from 'components/Modal/Modal';
import { BtnExit } from './App.styled';
import Clock from 'components/Clock/Clock';
import PokemonInfo from 'components/PokemonInfo/PokemonInfo';
import PokemonForm from 'components/PokemonInfo/PokemonForm';
import { ToastContainer } from 'react-toastify';
import Ala from '../hook/me';

class App extends Component {
  
handleFormSubmit = pokemonName => {
 this.setState({ pokemonName });
}

  state = {
    pokemonName: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  }

  render() {
    const { showModal} = this.state;
  return (
  
    <div>
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
      <PokemonInfo pokemonName={this.state.pokemonName}/>
      <ToastContainer autoClose={3000}/>
    </div>



      <Form onSubmit={this.formSubvitHandler}/>
    {/* <Counter /> */}
    <Dropdown/>
    <Counter />
    <Clock />
    <BtnExit type='button' onClick={this.toggleModal}>Відкрити модалку</BtnExit>
    {showModal && <Modal onClose={this.toggleModal}>
      <h1>модалка</h1>
      <img src="https://scontent.flwo4-1.fna.fbcdn.net/v/t39.30808-6/278243342_3893263187565715_5154316446856748625_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=3BJ99EixGW4AX_l7tDT&_nc_ht=scontent.flwo4-1.fna&oh=00_AfA3gueIkEEbkVt7_dp7wphiEaIFtkZ10FKOy7vFgV8aDg&oe=647D352C" alt="me" with="200" height="260"/>
      <p>O ДІДЬКО</p>
      <BtnExit type='button' onClick={this.toggleModal}>Закрити</BtnExit>
    </Modal>}
    <Ala />
    </div>
  );
}
}
export default App;
