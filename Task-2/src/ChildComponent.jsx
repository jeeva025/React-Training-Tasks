import React from 'react'

function ChildComponent({name, age, city, mobile, email, occupation, address}) {
  return (
    <>
        <h2>ChildComponent</h2>
        <p><b>Name : </b>{name}</p>
        <p><b>age : </b>{age}</p>
        <p><b>city : </b>{city}</p>
        <p><b>Contact : </b>{mobile}</p>
        <p><b>Email : </b>{email}</p>
        <p><b>Occupation : </b>{occupation}</p>
        <p><b>Address : </b>{address}</p>
    </>
  )
}

export default ChildComponent