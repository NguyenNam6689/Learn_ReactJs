import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const SearchApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const handleFetchApi = () => {
    setIsLoading(true);
    return axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((rs) => {
        setData(rs.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };
  useEffect(() => {
    handleFetchApi();
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClear = () => {
    setSearch('');
  };
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {error ? (
            <h1>Error: {error.message}</h1>
          ) : (
            <>
              <input
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="Search by name"
              />
              <button onClick={handleClear}>Clear</button>
              <ul>
                {filteredData.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </>
  );
};

export default SearchApi;
