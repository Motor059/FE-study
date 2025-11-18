import { useState, useEffect } from 'react';
import LoadingData from './LoadingData';
import UI from './UI';

 function App() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => setUsers(json));
  }, []);

 if (users.length === 0) {
    return (
      <LoadingData />
    );
  }
 return (
    <div>
      {users.map((user) => (
        <UI key={user.id} user={user} />
    ))}
    </div>
  );
 }
 export default App;
