import { Board } from './EventBoard.styled';
import { Event } from 'components/Event/Event';
import PropTypes from 'prop-types';

export const EventBoard = ({ events }) => {
    return (<Board>
        {events.map(({ name, location, speaker, type, time }) => (
        <Event 
        key={name} 
        name={name}
        location={location}
        speaker={speaker}
        type={type}
        start={time.start}
        end={time.end}    
        />
        ))}
    </Board>
    );
}

EventBoard.propTypes = {
    events: PropTypes.arrayOf(
      PropTypes.shape({
        time: PropTypes.func.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
