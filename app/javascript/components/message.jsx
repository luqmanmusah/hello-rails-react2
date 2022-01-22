import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const GET_RANDOM_MSG_REQUEST = 'GET_RANDOM_MSG_REQUEST';
const GET_RANDOM_MSG_SUCCSESS = 'GET_RANDOM_MSG_SUCCSESS';

const getRandomMsgSuccess = (json) => ({
  type: GET_RANDOM_MSG_SUCCSESS,
  json,
});

const getRandomMsg = () => (dispacth) => {
  dispacth({ type: GET_RANDOM_MSG_REQUEST });
  return fetch('api/v1/randomMessage')
    .then((response) => response.json())
    .then((json) => dispacth(getRandomMsgSuccess(json)))
    .catch((error) => console.log(error));
};

export default function Message(props) {
  const { msg } = props;
  const dispatch = useDispatch();
  const message = useSelector((state) => state.msg);
  console.log(message);
  return (
    <div>
      <h2>
        The Message from props is
        {' '}
        {msg}
      </h2>
      <button className="getMessageBtn" onClick={() => dispatch(getRandomMsg())}> Get Random Message</button>
      <h2>
        The Message from store is
        {' '}
        {message.text}
        .
      </h2>
    </div>
  );
}
