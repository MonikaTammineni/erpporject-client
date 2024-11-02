import React from 'react';

const resultsData = {
  cgpa: '9.9',
  subjects: [
    { name: 'BEEC', grade: '9' },
    { name: 'DS', grade: '10' },
    { name: 'CTOD', grade: '10' },
  ],
};

const Results = () => {
  return (
    <div style={{ marginTop: '20px', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Results</h2>
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: '300px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h3>1st Year CGPA</h3>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{resultsData.cgpa}</p>
        <h4>Subject-wise Results</h4>
        {resultsData.subjects.map((subject, index) => (
          <p key={index} style={{ margin: '10px 0', fontSize: '18px' }}>
            {subject.name}: {subject.grade}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Results;
