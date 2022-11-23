import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const greetingShow = useSelector((state) => state.greetings.quote);
  const authorShow = useSelector((state) => state.greetings.author);
  const status = useSelector((state) => state.greetings.status);
  const dispatch = useDispatch();
  let quote;
  let author;
  if (status === 'succeeded') {
    quote = greetingShow;
    author = authorShow;
  }

  return (
    <>
      <h1>Random Greeting:</h1>
      <h3>"{quote}"</h3>
      <p>by: </p>
      <h2>{author}</h2>
      <button type="button" onClick={() => dispatch(fetchGreeting())}>
        New Quote
      </button>
    </>
  );
};

export default Greeting;
