import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found");
        }

        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2 className="status">Loading ...</h2>;
  }

  if (error) {
    return (
      <div className="status">
        <h2>{error}</h2>
        <Link to="/users" className="back-button">
          ← Back to Users
        </Link>
      </div>
    );
  }

  return (
    <div className="details-container">
      <Link to="/users" className="back-button">
        ← Back to Users
      </Link>

      <div className="details-card">
        <div className="details-header">
          <div className="large-avatar">
            {user.name.charAt(0)}
          </div>

          <div>
            <h1>{user.name}</h1>
            <p>@{user.username}</p>
          </div>
        </div>

        <div className="details-grid">
          <div className="detail-item">
            <span>Name</span>
            <strong>{user.name}</strong>
          </div>

          <div className="detail-item">
            <span>Username</span>
            <strong>{user.username}</strong>
          </div>

          <div className="detail-item">
            <span>Email</span>
            <strong>{user.email}</strong>
          </div>

          <div className="detail-item">
            <span>Phone</span>
            <strong>{user.phone}</strong>
          </div>

          <div className="detail-item">
            <span>Website</span>
            <strong>{user.website}</strong>
          </div>

          <div className="detail-item">
            <span>City</span>
            <strong>{user.address.city}</strong>
          </div>

          <div className="detail-item">
            <span>Company</span>
            <strong>{user.company.name}</strong>
          </div>

          <div className="detail-item">
            <span>Street</span>
            <strong>{user.address.street}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;