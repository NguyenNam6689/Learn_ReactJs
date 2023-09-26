import React from 'react';
import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

const LearnApi = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(false);
  const handleFetchApi = (param) => {
    setLoading(true);
    return axios
      .get(`https://jsonplaceholder.typicode.com/${param}`)
      .then((rs) => {
        setData(rs.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    handleFetchApi('users');
  }, []);
  return (
    <>
      <div className="button-container">
        <button onClick={() => handleFetchApi('users')}>Users</button>
        <button onClick={() => handleFetchApi('comments')}>Comments</button>
        <button onClick={() => handleFetchApi('posts')}>Posts</button>
      </div>
      {loading ? (
        <h1>...Loading</h1>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name || item.body}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default LearnApi;
