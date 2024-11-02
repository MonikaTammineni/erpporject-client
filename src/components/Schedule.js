import React, { useState } from 'react';

const Schedule = () => {
  const [filterText, setFilterText] = useState('');
  const [filterDay, setFilterDay] = useState('');
  const [data, setData] = useState([
    { Day: 'Monday', Hours: '1-2', Course: 'MSWD', Room: 'C017', LTPS: 'P' },
    { Day: 'Monday', Hours: '3-4', Course: 'AOOP', Room: 'C017', LTPS: 'P' },
    { Day: 'Monday', Hours: '5-6', Course: 'MSWD', Room: 'C017', LTPS: 'P' },
    { Day: 'Monday', Hours: '7-8', Course: 'Linux', Room: 'C017', LTPS: 'P' },
    { Day: 'Tuesday', Hours: '1-2', Course: 'AIML', Room: 'C117', LTPS: 'S' },
    { Day: 'Tuesday', Hours: '3-4', Course: 'MSWD', Room: 'C117', LTPS: 'S' },
    { Day: 'Tuesday', Hours: '5-6', Course: 'Linux', Room: 'C117', LTPS: 'S' },
    { Day: 'Tuesday', Hours: '7-8', Course: 'AOOP', Room: 'C117', LTPS: 'S' },
    { Day: 'Wednesday', Hours: '1-2', Course: 'Linux', Room: 'C524', LTPS: 'L' },
    { Day: 'Wednesday', Hours: '3-4', Course: 'MSWD', Room: 'C524', LTPS: 'L' },
    { Day: 'Wednesday', Hours: '5-6', Course: 'AOOP', Room: 'C524', LTPS: 'L' },
    { Day: 'Wednesday', Hours: '7-8', Course: 'DAA', Room: 'C524', LTPS: 'L' },
    { Day: 'Thursday', Hours: '1-2', Course: 'SIL', Room: 'M108', LTPS: 'T' },
    { Day: 'Thursday', Hours: '3-4', Course: 'DAA', Room: 'M108', LTPS: 'T' },
    { Day: 'Thursday', Hours: '5-6', Course: 'Linux', Room: 'M108', LTPS: 'T' },
    { Day: 'Thursday', Hours: '7-8', Course: 'AIML', Room: 'M108', LTPS: 'T' },
    { Day: 'Friday', Hours: '1-2', Course: 'MSWD', Room: 'SAC', LTPS: 'S' },
    { Day: 'Friday', Hours: '3-4', Course: 'AOOP', Room: 'SAC', LTPS: 'S' },
    { Day: 'Friday', Hours: '5-6', Course: 'AIML', Room: 'SAC', LTPS: 'S' },
    { Day: 'Friday', Hours: '7-8', Course: 'SIL', Room: 'SAC', LTPS: 'S' },
    { Day: 'Saturday', Hours: '1-2', Course: 'DAA', Room: 'C011', LTPS: 'L' },
    { Day: 'Saturday', Hours: '3-4', Course: 'Linux', Room: 'C011', LTPS: 'L' },
    { Day: 'Saturday', Hours: '5-6', Course: 'MSWD', Room: 'C011', LTPS: 'L' },
    { Day: 'Saturday', Hours: '7-8', Course: 'AOOP', Room: 'C011', LTPS: 'L' },
  ]);

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '10vh auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  };

  const filterStyle = {
    width: '97%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse'
  };

  const thStyle = {
    padding: '10px',
    borderBottom: '2px solid #ddd',
    backgroundColor: 'rgb(165,28,36)'
  };

  const tdStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd'
  };

  const lastRowStyle = {
    ...tdStyle,
    borderBottom: 'none'
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div style={containerStyle}>
      <input
        type="text"
        placeholder="Filter by course"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={filterStyle}
      />
      <select
        value={filterDay}
        onChange={(e) => setFilterDay(e.target.value)}
        style={filterStyle}
      >
        <option value="">Filter by day</option>
        {daysOfWeek.map(day => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Day</th>
            <th style={thStyle}>Hours</th>
            <th style={thStyle}>Course</th>
            <th style={thStyle}>Room</th>
            <th style={thStyle}>LTPS</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter(item => 
              (item.Course.toLowerCase().includes(filterText.toLowerCase())) &&
              (filterDay === '' || item.Day === filterDay)
            )
            .map((filteredItem, index, array) => (
              <tr key={`${filteredItem.Day}-${filteredItem.Hours}`} style={index === array.length - 1 ? lastRowStyle : tdStyle}>
                <td style={tdStyle}>{filteredItem.Day}</td>
                <td style={tdStyle}>{filteredItem.Hours}</td>
                <td style={tdStyle}>{filteredItem.Course}</td>
                <td style={tdStyle}>{filteredItem.Room}</td>
                <td style={tdStyle}>{filteredItem.LTPS}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
