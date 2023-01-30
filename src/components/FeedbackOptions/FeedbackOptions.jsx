// import { useState } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const optionsList = [
    {id:'good', title:"Good"},
    {id:'neutral', title:"Neutral"},
    {id:'bad', title:"Bad"}
]

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    // const [options, setOptions] = useState({
    // good: 0,
    // neutral: 0,
    // bad: 0,
    // })

    // const  onLeaveFeedback = event => {
    //     console.log(event.target.name);
    //     const { name } = event.target;
    //     setOptions(prev => ({ ...prev, [name]:prev[name] + 1
    //         // console.log('prevState: ' + prevState[name]);
    //         // return { [name]: prevState[name] + 1 };
    //     }));
    // };

  return (
    <div className={css.button_box}>
      {optionsList.map(name => {
        // console.log(option.id);
        return (
          <button
            name={name.id}
            key={name.id}
            type="button"
            onClick={onLeaveFeedback}
          >
            {name.title}
            {/* {name[0].toUpperCase() + name.slice(1)} */}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback:PropTypes.func,
};
