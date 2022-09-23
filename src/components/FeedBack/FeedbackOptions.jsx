import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (options.map((option, index) => (
    <button type="button" onClick={() => onLeaveFeedback( option )} key={index} >
            {option}
          </button>
  ))
            
    );
  }

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
 onLeaveFeedback:PropTypes.func.isRequired
};