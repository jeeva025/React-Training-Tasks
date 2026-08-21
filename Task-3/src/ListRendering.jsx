import React from 'react'
import './ListRendering.css'

function ListRendering({ users }) {

    return (
        <div className="list-container">

            <h1>List Rendering</h1>

            <div className="cards-container">
                {users.map((u, i) => (
                    <div key={i} className="card">
                        <p>Name: {u.name}</p>
                        <p>Role: {u.role}</p>
                        <p>Company: {u.company}</p>
                        <p>Experience: {u.experiance}</p>
                        <p>Branch: {u.branch}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ListRendering