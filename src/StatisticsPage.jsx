import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You need to install Axios
import { Line } from 'react-chartjs-2'; // You need to install react-chartjs-2

function StatisticsPage() {
  const [token, setToken] = useState('');
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    // Retrieve the token from local storage or your preferred storage method
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchData(storedToken);
    } else {
      // Handle the case where the user is not authenticated
      // You can redirect them to the login page or display an error message
    }
  }, []);

  const fetchData = async (token) => {
    try {
      const response = await axios.get('http://yasuocidal.eu:8520/statistics', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStatistics(response.data);
    } catch (error) {
      // Handle data fetching errors, e.g., display an error message to the user
      console.error('Data fetch failed', error);
    }
  };

  return (
    <div>
      <h1>Data Statistics</h1>
      {statistics ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Odometer Value</th>
                <th>Traveled</th>
                <th>Projected Distance</th>
                <th>Consumption (l/100km)</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {statistics.map((item, index) => (
                <tr key={index}>
                  <td>{item.odometerValue}</td>
                  <td>{item.traveled}</td>
                  <td>{item.projectedDistance}</td>
                  <td>{item.consumption}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <Line
              data={{
                labels: statistics.map((item) => item.date),
                datasets: [
                  {
                    label: 'Consumption (l/100km)',
                    data: statistics.map((item) => item.consumption),
                    fill: false,
                    borderColor: 'blue',
                  },
                ],
              }}
            />
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default StatisticsPage;
