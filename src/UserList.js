import React, { useEffect, useState } from "react";

export default function UserList() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((res) => {
            console.log(res);
            setUsers([...users,...res])
            console.log(users);
        })
        .catch((err)=>err)
    },[]);

    if(users.length === 0){
        return <h3>No Users Yet.</h3>
    }

    return (
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    );
}