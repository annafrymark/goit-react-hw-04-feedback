import React, { Component } from 'react';

import Section from './components/section/Section';
import Stastistics from './components/statistics/Stastistics';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import css from './app.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const good = this.state.good;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  handleFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
 
    return (
      <div className={css.container}>
        <Section title="Please leave feedback" className={css.title}>
          <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          <Stastistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
