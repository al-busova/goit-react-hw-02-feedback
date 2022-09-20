import React, { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';

export default class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = propertyName => {
    this.setState(prevState => {
      return { [propertyName]: prevState[propertyName] + 1 };
    });
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    if (!this.countTotalFeedback()) {
      return 0;
    }
    return ((100 / this.countTotalFeedback()) * good).toFixed(0);
  }
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <div>
          <h2>Please leave feedback</h2>
          <FeedbackOptions
            option={'Good'}
            onLeaveFeedback={() => this.leaveFeedback('good')}
          />
          <FeedbackOptions
            option={'Neutral'}
            onLeaveFeedback={() => this.leaveFeedback('neutral')}
          />
          <FeedbackOptions
            option={'Bad'}
            onLeaveFeedback={() => this.leaveFeedback('bad')}
          />
        </div>
        <div>
          <h2>Statistics</h2>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </div>
      </>
    );
  }
}
