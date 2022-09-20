export const FeedbackOptions = ({ option, onLeaveFeedback }) => {
    return (
            <button type="button" onClick={onLeaveFeedback}>
            {option}
          </button>
    );
  }
