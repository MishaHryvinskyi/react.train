import PropTypes from 'prop-types';
import css from './Event.module.css'
import { FaMapMarkerAlt, FaCalendarAlt, FaUserAlt, FaClock } from 'react-icons/fa';
import { formatEventDuration, formatEventStart} from 'utils/idex';
import { iconSize, iconColor } from 'constants';
import { Card, EventName, Info, Chip } from './Event.styled'
export const Event = ({ 
    name, 
    location, 
    speaker, 
    type, 
    start, 
    end 
}) => {

const formattedStart = formatEventStart(start);
const duration = formatEventDuration(start, end);    
    return <Card>
        <EventName>{name}</EventName>
        <Info>
            <FaMapMarkerAlt className={css.icon} color={iconColor.red} size={iconSize.sm}/>
            {location}
        </Info>
        <Info>
            <FaUserAlt className={css.icon} size={iconSize.sm}/>
            {speaker}
        </Info>
        <Info>
            <FaCalendarAlt className={css.icon} size={iconSize.sm}/>
            {formattedStart} 
        </Info>
        <Info>
            <FaClock className={css.icon} size={iconSize.sm}/>
            {duration}
        </Info>
        <Chip eventType={type}>{type}</Chip>
    </Card>
};
// className={`${css.chip} ${css[type]}`}

Event.propTypes = {
    name: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    speaker: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired, 
    start: PropTypes.string.isRequired, 
    end: PropTypes.string.isRequired,
};