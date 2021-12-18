import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessages } from '../messages';

const Greeting = () => {
  const data = useSelector((state) => state.messagesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  return (
    <div>
      {data.message}
    </div>
  );
};

export default Greeting;
