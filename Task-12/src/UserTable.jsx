
function UserTable({
  users,
  onEdit,
  onDelete,
}) {
  return (
    <div className="table-card">

      <div className="table-header">
        <div>
          <h2>Users</h2>
          <p>{users.length} users found</p>
        </div>
      </div>

      <div className="table-wrapper">

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user) => (
              <tr key={user.id}>

                <td>
                  <span className="user-id">
                    {user.id}
                  </span>
                </td>

                <td>
                  <div className="name-cell">
                    {/* <div className="avatar">
                      {user.name.charAt(0)}
                    </div> */}

                    <span>{user.name}</span>
                  </div>
                </td>

                <td>{user.email}</td>

                <td>{user.phone}</td>

                <td>{user.website}</td>

                <td>
                  <div className="action-buttons">

                    <button
                      className="btn-edit"
                      onClick={() => onEdit(user)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn-delete"
                      onClick={() => onDelete(user.id)}
                    >
                      Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default UserTable;

