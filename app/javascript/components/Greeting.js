import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const greetingShow = useSelector((state) => state.greetings.quote);
  const status = useSelector((state) => state.greetings.status);
  const dispatch = useDispatch();
  let content;
  if (status === 'succeeded') {
    content = greetingShow.quote;
  }

  return (
    <>
      <h1>Random Greeting:</h1>
      <p>{content}</p>
      <button type="button" onClick={() => dispatch(fetchGreeting())}>
        New Quote
      </button>
    </>
  );
};

export default Greeting;
