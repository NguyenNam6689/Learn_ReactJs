import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

const LearnApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleFetchApi = (param) => {
    setLoading(true);
    setActiveButton(param); // Đặt nút hiện tại thành nút được bấm
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

  useEffect(() => {
    handleFetchApi('users');
  }, []);

  return (
    <>
      <div className="button-container">
        <button
          onClick={() => handleFetchApi('users')}
          className={activeButton === 'users' ? 'active-button' : ''}
        >
          Users
        </button>
        <button
          onClick={() => handleFetchApi('comments')}
          className={activeButton === 'comments' ? 'active-button' : ''}
        >
          Comments
        </button>
        <button
          onClick={() => handleFetchApi('posts')}
          className={activeButton === 'posts' ? 'active-button' : ''}
        >
          Posts
        </button>
        <button
          onClick={() => handleFetchApi('albums')}
          className={activeButton === 'albums' ? 'active-button' : ''}
        >
          Posts
        </button>
      </div>
      {loading ? (
        <h1>...Loading</h1>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name || item.body || item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default LearnApi;
