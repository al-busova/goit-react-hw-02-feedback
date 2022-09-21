export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (options.map((option, index) => (
    <button type="button" onClick={() => onLeaveFeedback( option )} key={index} >
            {option}
          </button>
  ))
            
    );
  }
