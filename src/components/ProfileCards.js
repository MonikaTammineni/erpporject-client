import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileSearch = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (username) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`http://api.github.com/users/${username}`, {
            headers: {
              Authorization: ``  
            }
          });
          setUserData(response.data);
          setError('');
        } catch (error) {
          setError('User not found or unable to connect');
          setUserData(null);
        }
      };

      fetchUserData();
    }
  }, [username]);

  const handleSearch = (e) => {
    e.preventDefault();
    const inputUsername = e.target.elements.username.value.trim();
    if (inputUsername) {
      setUsername(inputUsername);
    } else {
      setError('Please enter a valid GitHub username');
      setUserData(null);
    }
  };

  return (
    <div style={styles.profileSearchContainer}>
      <form onSubmit={handleSearch} style={styles.profileSearchForm}>
        <input
          type="text"
          name="username"
          placeholder="Enter GitHub username"
          style={styles.profileSearchInput}
        />
        <button type="submit" style={styles.profileSearchButton}>Search</button>
      </form>

      {error && <div style={styles.profileSearchError}>{error}</div>}

      {userData && (
        <div style={styles.profileCard}>
          <img src={userData.avatar_url} alt="Profile Pic" style={styles.profileCardPic} />
          <h3 style={styles.profileCardUsername}>{userData.login}</h3>
        </div>
      )}
    </div>
  );
};

const styles = {
  profileSearchContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  profileSearchForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profileSearchInput: {
    width: '300px',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  profileSearchButton: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'rgb(165,28,36)',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
  },
  profileSearchError: {
    color: 'red',
    fontSize: '14px',
    marginTop: '10px',
  },
  profileCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    maxWidth: '300px',
    textAlign: 'center',
  },
  profileCardPic: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '15px',
    objectFit: 'cover', 
  },
  profileCardUsername: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
};

export default ProfileSearch;
