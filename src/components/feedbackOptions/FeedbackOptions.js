import css from 'app.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({
  onLeaveGoodFeedback,
  onLeaveNeutralFeedback,
  onLeaveBadFeedback,
}) => (
  <div className={css.buttons}>
    <button onClick={onLeaveGoodFeedback} className={css.button}>
      good
    </button>
    <button onClick={onLeaveNeutralFeedback} className={css.button}>
      neutral
    </button>
    <button onClick={onLeaveBadFeedback} className={css.button}>
      bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveGoodFeedback: PropTypes.func,
  onLeaveNeutralFeedback: PropTypes.func,
  onLeaveBadFeedback: PropTypes.func,
};

export default FeedbackOptions;
