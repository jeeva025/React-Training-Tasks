import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="status">Loading users...</h2>;
  }

  if (error) {
    return <h2 className="status error">{error}</h2>;
  }

  return (
    <div className="container">
      <h1>Users</h1>
      <p className="subtitle">Select a user to view their details</p>

      <div className="user-grid">
        {users.map((user) => (
          <Link
            to={`/users/${user.id}`}
            className="user-card"
            key={user.id}
          >
            <div className="avatar">
              {user.name.charAt(0)}
            </div>

            <div>
              <h2>{user.name}</h2>
              <p>@{user.username}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserList;