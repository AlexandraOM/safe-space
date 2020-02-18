import React from 'react';
import { useLocation } from 'react-router-dom';
import { FormQuestion } from '../index';

const Form = ({ responses, questions, setResponses }) => {
  const path = useLocation().pathname;

  // page question from URL path
  const page = parseInt(path.match(/report\/(\d+)$/i)[1]);

  return (
    <form data-testid='test1' key='1'>
      <FormQuestion
        responses={responses}
        questions={questions}
        setResponses={setResponses}
        page={page}
      ></FormQuestion>
    </form>
  );
};

export default Form;
