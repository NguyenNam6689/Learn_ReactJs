import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

const LearnApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [pr, setPr] = useState('name'); // Initialize pr with 'name'

  const handleFetchApi = (param) => {
    setLoading(true);
    setActiveButton(param);
    return axios
      .get(`https://jsonplaceholder.typicode.com/${param}`)
      .then((rs) => {
        setData(rs.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    handleFetchApi('users');
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClear = () => {
    setSearch('');
  };

  const filteredData = data.filter((item) => {
    const property = item[pr];
    return property && property.toLowerCase().includes(search.toLowerCase());
  });

  const handleChangeParam = (param) => {
    if (param === 'users' || param === 'comments') {
      setPr('name');
    } else if (param === 'posts' || param === 'albums') {
      setPr('title');
    }
  };

  return (
    <>
      <div className="button-container">
        <input type="text" value={search} onChange={handleChange} placeholder="Search by name" />
        <button onClick={handleClear}>Clear</button>
        <button
          onClick={() => {
            handleFetchApi('users');
            handleChangeParam('users');
          }}
          className={activeButton === 'users' ? 'active-button' : ''}
        >
          Users
        </button>
        <button
          onClick={() => {
            handleFetchApi('comments');
            handleChangeParam('comments');
          }}
          className={activeButton === 'comments' ? 'active-button' : ''}
        >
          Comments
        </button>
        <button
          onClick={() => {
            handleFetchApi('posts');
            handleChangeParam('posts');
          }}
          className={activeButton === 'posts' ? 'active-button' : ''}
        >
          Posts
        </button>
        <button
          onClick={() => {
            handleFetchApi('albums');
            handleChangeParam('albums');
          }}
          className={activeButton === 'albums' ? 'active-button' : ''}
        >
          Albums
        </button>
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {error ? (
            <h1>Error: {error.message}</h1>
          ) : (
            <>
              <ul>
                {filteredData.map((item) => (
                  <li key={item.id}>{item[pr]}</li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </>
  );
};

export default LearnApi;
