import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () =>{
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(response)
            setUsers(response.data);
        } catch(err) {
            setError(err.message);
        }
    }
   
    fetchData();
  },[]);

  if (error) return <p>Error: {error}</p>

  return(
    <>
        <h1>Users:</h1>
        {users && users.map(user => (
            <div style={{border: "3px solid black", marginTop:"1rem", marginRight:"75%", marginLeft:"3rem"}}>
            <h3>{user.name}</h3>
            <h4>Email: {user.email}</h4>
            </div>
        ))}
        
    </>
  ) ;
};

export default UserList;
