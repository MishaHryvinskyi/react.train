// import clsx from "clsx";
import { PageTitle } from '../PageTitle/PageTitle';
import { EventBoard } from '../EventBoard/EventBoard';
import upcomingsEvents from '../../upcoming-events.json';
import { Container } from './App.styled';
import Counter from 'components/constants/Counter/Counter';


function App() {
  return (
    <Container>
      <PageTitle text="24ht Core Worlds Coalition Conference"/>
      <EventBoard events={upcomingsEvents}/>
      <Counter initialValue={0}/>
    </Container>
  );
}

export default App;
