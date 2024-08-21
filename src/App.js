import React, { useState } from 'react';
import Products from './Products';
import './App.css';  

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "4852ece1";
  const YOUR_APP_KEY = "8883229bb7e0e90fecedb05bd7cc06e4";

  const submitHandler = e => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
      .then(response => response.json())
      .then(data => setData(data.hits));
  };

  return (
    <div>
      <center>
        <h1>Food Recipe App</h1>
        <form onSubmit={submitHandler}>
          <input 
            type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search for a recipe..." 
          /><br /><br />
          <input type="submit" className="btn btn-primary" value="Search" />
        </form>
        {data.length >= 1 ? <Products data={data} /> : <h3>No Results Found</h3>}
      </center>
    </div>
  );
}

export default App;
