import React, { useState } from 'react';

import Section from './components/section/Section';
import Stastistics from './components/statistics/Stastistics';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import css from './app.module.css';

const App = () => {
 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const handleGoodFeedback = () => {
    setGood(good + 1);
  };

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };
  const handleBadFeedback = () => {
    setBad(bad + 1);
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback" className={css.title}>
        <FeedbackOptions
          onLeaveGoodFeedback={handleGoodFeedback}
          onLeaveNeutralFeedback={handleNeutralFeedback}
          onLeaveBadFeedback={handleBadFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Stastistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};

export default App;
