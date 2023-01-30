import { useState } from "react";
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export  const App = () => {
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    });

  const  onLeaveFeedback = event => {
    console.log(event.target.name);
    const { name } = event.target;
    setOptions(prev => ({ ...prev, [name]:prev[name] + 1
       
    }));

  };

 const countTotalFeedback = () => {
    return (options.good + options.neutral + options.bad);
  };

  const countPositiveFeedbackPercentage = () => {
        let statesCount = options.good + options.neutral + options.bad;
        if (!statesCount) {
          statesCount = 1;
        }
        return ((options.good / statesCount) * 100).toFixed();
      };
  
 
  
  return (
    < >
      <Section title="Please leave feedback">
        <FeedbackOptions
        options={options}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
    
      <Section title="Statistics">
        <Statistics
          good={options.good}
          neutral={options.neutral}
          bad={options.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};
