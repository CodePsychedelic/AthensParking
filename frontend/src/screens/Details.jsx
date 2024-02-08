import React, { useState, useEffect } from 'react';
import DetailsForm
 from '../components/DetailsForm';
const SignIn = () => {
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
    <div className="flex flex-col items-center bg-blue-200 text-blue-500">
      <h1 className='text-xl m-5'>Please provide your information or else...</h1>
      <DetailsForm/>
    </div>
  );
};

export default SignIn;