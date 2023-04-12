import css from "app.module.css";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={css.buttons}>
    <button onClick={() => onLeaveFeedback('good')} className={css.button}>
      good
    </button>
    <button onClick={() => onLeaveFeedback('neutral')} className={css.button}>
      neutral
    </button>
    <button onClick={() => onLeaveFeedback('bad')} className={css.button}>
      bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback:PropTypes.func,
};

export default FeedbackOptions;