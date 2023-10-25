import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You need to install Axios

function DataEntryPage() {
  const [odometerValue, setOdometerValue] = useState('');
  const [fuelPrice, setFuelPrice] = useState('');
  const [totalPaid, setTotalPaid] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    // Retrieve the token from local storage or your preferred storage method
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    } else {
      // Handle the case where the user is not authenticated
      // You can redirect them to the login page or display an error message
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://yasuocidal.eu:8520/subvals', {
        token,
        odometerValue,
        fuelPrice,
        totalPaid,
      });

      // Handle the server's response as needed
      console.log('Data submitted successfully', response.data);
    } catch (error) {
      // Handle submission errors, e.g., display an error message to the user
      console.error('Submission failed', error);
    }
  };

  return (
    <div>
      <h1>Data Entry</h1>
      <div>
        <input
          type="number"
          placeholder="Odometer Value"
          value={odometerValue}
          onChange={(e) => setOdometerValue(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Fuel Price"
          value={fuelPrice}
          onChange={(e) => setFuelPrice(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Total Paid"
          value={totalPaid}
          onChange={(e) => setTotalPaid(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default DataEntryPage;
