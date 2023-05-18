import PropTypes from 'prop-types'
import { Title } from './PageTitle.style';
export const PageTitle = ({ text }) => {
    return <Title>{text}</Title>;
};

PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
}