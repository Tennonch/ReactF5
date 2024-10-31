import React, { useEffect, useState } from 'react';
import api from '../api';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/items')
      .then(response => setData(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Items List</h1>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default Home;
