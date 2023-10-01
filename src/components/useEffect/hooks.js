import React, { Fragment } from 'react';
import LearnApi from './learn_1/learn_1.js';
import ScrollProgress from './learn_2/learn_2.js';
import SearchApi from './learn_exam/learn_exam.js';

const Hook = () => {
  return (
    <Fragment>
      {/* <LearnApi /> */}
      <ScrollProgress />
      {/* <SearchApi /> */}
    </Fragment>
  );
};

export default Hook;
