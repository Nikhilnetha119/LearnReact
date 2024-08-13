import React, { useState } from 'react';
import Data from './city.json';

const App = () => {
  const[search, setSearch] = useState('');
  return (
    <div>
      <center>
        <h2>Enter your City Name: </h2>
        <input type='text'  value={search} onChange={(e) => setSearch(e.target.value)} />
        {Data.filter
          (city => city.name.toLowerCase().includes(search.toLowerCase()))
          .map(city => 
            <div style={{padding:'10px', margin:'10px', border: '1px solid black',  maxWidth:'70%'}}>
              {city.name}
            </div>
        )}
      </center>
    </div>
  )
}

export default App
