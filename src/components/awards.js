import React from 'react';

const awardsData = [
  {
    image: 'https://via.placeholder.com/150', 
    title: 'Best Student Award',
    date: '2023-24',
  },
  {
    image: 'https://via.placeholder.com/150', 
    title: 'Excellence Awards',
    date: '2024-25',
  },
  {
    image: 'https://via.placeholder.com/150', 
    title: 'Service Award',
    date: '2024-25',
  },
];

const Awards = () => {
  return (
    <div style={{ marginTop: '20px', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Awards</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {awardsData.map((award, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            width: '200px',
            textAlign: 'center',
            padding: '10px',
            margin: '10px'
          }}>
            <img src={award.image} alt={award.title} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{award.title}</h3>
            <p>{award.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
