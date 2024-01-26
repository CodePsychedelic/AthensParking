import React, { useState, useEffect } from 'react';

const App = () => {
  const [greeting, setGreeting] = useState('Loading...');
  const [mood, setMood] = useState('default');

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`http://localhost:8080/api/v1/greeting`+ (mood === 'default' ? `` : `?type=${mood}`));
        const response = await fetch(`http://localhost:8080/api/v1/greeting`+ (mood === 'default' ? `` : `?type=${mood}`));
        const data = await response.json();
        setGreeting(data.greeting);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setGreeting('Error loading data');
      }
    };

    fetchData();

  }, [mood]); 

  return (
    <div>
      <h1>{greeting}</h1>
      <button onClick={() => setMood('cruel')}>Cruel</button>
      <button onClick={() => setMood('exciting')}>Exciting</button>
    </div>
  );
};

export default App;
