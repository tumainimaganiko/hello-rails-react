import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetingsSlice';
import { useEffect } from 'react';

const Greetings = () => {
  const { greetings } = useSelector((store) => store.greetings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);
  
  return (
    <>
      <h1>Welcome to our application</h1>
      <p>{greetings.greeting}</p>
    </>
  );
};

export default Greetings;
