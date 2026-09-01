
import React from "react";
import { useSearchParams } from "react-router-dom";
import './UserDetails.css'

function UserDetails({ users }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 5;

  const allItems = users;

  const totalPage = Math.ceil(allItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIntedx = startIndex + itemsPerPage;

  const currentItems = allItems.slice(startIndex, endIntedx);

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPage) {
      setSearchParams({ page: pageNum });
    }
  };

  const nextPage = () => {
    if (currentPage < totalPage) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  return (
    <div className="users-page">
      <div className="users-container">

        <div className="page-header">
          <h1>Users</h1>
          <p>Manage and view all users</p>
        </div>

        <div className="user-list">
          {currentItems.map((u, i) => (
            <div className="user-card" key={i}>
              <div className="user-info">
                

                <div className="user-name">
                  <h2>{u.name}</h2>
                  <span>ID: {u.id}</span>
                </div>
              </div>

              <div className="user-details">
                <div className="detail">
                  <span className="detail-label">Email</span>
                  <span className="detail-value">{u.email}</span>
                </div>

                <div className="detail">
                  <span className="detail-label">Role</span>
                  <span className="role-badge">{u.role}</span>
                </div>

                <div className="detail">
                  <span className="detail-label">City</span>
                  <span className="detail-value">{u.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">

          <button
            className="pagination-btn"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            ← Previous
          </button>

          <div className="page-numbers">
            {Array.from(
              { length: totalPage },
              (_, i) => i + 1
            ).map((pageNum) => (
              <button
                className={`page-number ${
                  currentPage === pageNum ? "active" : ""
                }`}
                key={pageNum}
                onClick={() => goToPage(pageNum)}
              >
                {pageNum}
              </button>
            ))}
          </div>

          <button
            className="pagination-btn"
            onClick={nextPage}
            disabled={currentPage === totalPage}
          >
            Next →
          </button>

        </div>

        <div className="page-indicator">
          Page <strong>{currentPage}</strong> of{" "}
          <strong>{totalPage}</strong>
        </div>

      </div>
    </div>
  );
}

export default UserDetails;
