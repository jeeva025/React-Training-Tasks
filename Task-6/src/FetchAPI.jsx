import React, { useEffect, useState } from 'react'
import './FetchAPI.css'

function FetchAPI() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) =>{
            setData(data)
            setLoading(false);
        } )

        .catch((error) => {
            console.log(error);
            setLoading(false);
        });

    },[])
    console.log(data)
  return (
    <div className='container'>
        <h1>User Details</h1>
        {loading ? <p>Loading...</p> : 
            <table border={1}>
            <thead>
                <tr>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Website</th>
            </tr>
            </thead>
            
            
            <tbody>
                {data.map((e, i)=>(
                <tr key={i}>
                    <td>{e.name}</td>
                    <td>{e.username}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td>{e.website}</td>
                </tr>
            ))}
            </tbody>
            
        </table>
        }
        
    </div>
  )
}

export default FetchAPI