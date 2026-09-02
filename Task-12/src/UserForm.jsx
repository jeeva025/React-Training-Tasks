
import { useEffect, useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  website: "",
};

function UserForm({onSubmit,editingUser,onCancelEdit,}) {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name,
        email: editingUser.email,
        phone: editingUser.phone,
        website: editingUser.website,
      });
    } else {
      setFormData(initialFormData);
    }
  }, [editingUser]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingUser) {
      onSubmit({
        id: editingUser.id,
        ...formData,
      });
    } else {
      onSubmit(formData);
    }

    setFormData(initialFormData);
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    onCancelEdit();
  };

  return (
    <div className="form-card">

      <div className="form-header">
        <h2>
          {editingUser ? "Edit User" : "Add New User"}
        </h2>

        <p>
          {editingUser
            ? "Update the user's information"
            : "Enter the details of the new user"}
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="form-grid">

          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone"
              required
            />
          </div>

          <div className="form-group">
            <label>Website</label>

            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Enter website"
              required
            />
          </div>

        </div>

        <div className="form-actions">

          <button
            type="submit"
            className="btn btn-primary"
          >
            {editingUser ? "Update User" : "Add User"}
          </button>

          {editingUser && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}

        </div>

      </form>
    </div>
  );
}

export default UserForm;

