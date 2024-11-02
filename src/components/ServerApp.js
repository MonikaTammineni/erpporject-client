import React, { useEffect, useState } from 'react'; 
 
function ServerApp() { 
  const [users, setUsers] = useState([]); 
 
  useEffect(() => { 
    fetch('http://localhost:5000/users') 
      .then(response => response.json()) 
      .then(data => setUsers(data)); 
  }, []); 
 
  return ( 
    <div className="App"> 
      <h2>User List</h2> 
      <ul> 
        {users.map(user => ( 
          <li key={user.id}> 
            {user.name} - {user.email} 
          </li> 
        ))} 
      </ul> 
    </div> 
  ); 
} 
 
export default ServerApp;
