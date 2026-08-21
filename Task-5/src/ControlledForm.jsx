import React, { useState } from "react";
import "./ControlledForm.css";

function ControlledForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
  };

  const [info, setInfo] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  function handleChanges(e) {
    const { name, value } = e.target;

    setInfo({
      ...info,
      [name]: value,
    });

    // Remove error when user starts correcting the field
    setErrors({
      ...errors,
      [name]: "",
    });

    setSuccessMessage("");
  }

  // Validate form
  function validateForm() {
    const newErrors = {};

    // First Name
    if (!info.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (info.firstName.trim().length < 2) {
      newErrors.firstName = "First name must contain at least 2 characters";
    } else if (!/^[A-Za-z ]+$/.test(info.firstName)) {
      newErrors.firstName = "First name can contain only letters";
    }

    // Last Name
    if (!info.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (info.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must contain at least 2 characters";
    } else if (!/^[A-Za-z ]+$/.test(info.lastName)) {
      newErrors.lastName = "Last name can contain only letters";
    }

    // Email
    if (!info.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Mobile Number
    if (!info.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(info.mobileNumber)) {
      newErrors.mobileNumber = "Enter a valid 10-digit Indian mobile number";
    }

    // Password
    if (!info.password) {
      newErrors.password = "Password is required";
    } else if (info.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters";
    }

    // Confirm Password
    if (!info.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (info.confirmPassword !== info.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Date of Birth
    if (!info.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    } else {
      const birthDate = new Date(info.dateOfBirth);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();

      const monthDifference = today.getMonth() - birthDate.getMonth();

      if (age < 18) {
        newErrors.dateOfBirth = "You must be at least 18 years old";
      } else if (age > 100) {
        newErrors.dateOfBirth = "Please enter a valid date of birth";
      }
    }

    // Gender
    if (!info.gender) {
      newErrors.gender = "Please select your gender";
    }

    // Address
    if (!info.address.trim()) {
      newErrors.address = "Address is required";
    } else if (info.address.trim().length < 10) {
      newErrors.address = "Address must contain at least 10 characters";
    }

    // City
    if (!info.city.trim()) {
      newErrors.city = "City is required";
    } else if (info.city.trim().length < 2) {
      newErrors.city = "City must contain at least 2 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      setSuccessMessage(
        "Registration successful! Your form has been submitted.",
      );
      setInfo(initialValues);
      setErrors({});
      setSuccessMessage("");
      console.log("Submitted Information:", info);
    }
  }

  // Today's date for DOB maximum
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="form-page">
      <div className="form-container">
        <div className="form-header">
          <h1>Create Account</h1>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            {/* First Name */}
            <div className="field">
              <label htmlFor="firstName">
                First Name <span>*</span>
              </label>

              <input
                type="text"
                id="firstName"
                name="firstName"
                value={info.firstName}
                onChange={handleChanges}
                placeholder="Enter your first name"
              />

              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div className="field">
              <label htmlFor="lastName">
                Last Name <span>*</span>
              </label>

              <input
                type="text"
                id="lastName"
                name="lastName"
                value={info.lastName}
                onChange={handleChanges}
                placeholder="Enter your last name"
              />

              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>

            {/* Email */}
            <div className="field">
              <label htmlFor="email">
                Email <span>*</span>
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={info.email}
                onChange={handleChanges}
                placeholder="example@gmail.com"
              />

              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            {/* Mobile Number */}
            <div className="field">
              <label htmlFor="mobileNumber">
                Mobile Number <span>*</span>
              </label>

              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={info.mobileNumber}
                onChange={handleChanges}
                placeholder="10-digit mobile number"
                maxLength="10"
              />

              {errors.mobileNumber && (
                <p className="error">{errors.mobileNumber}</p>
              )}
            </div>

            {/* Password */}
            <div className="field">
              <label htmlFor="password">
                Password <span>*</span>
              </label>

              <input
                type="password"
                id="password"
                name="password"
                value={info.password}
                onChange={handleChanges}
                placeholder="Enter a strong password"
              />

              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="field">
              <label htmlFor="confirmPassword">
                Confirm Password <span>*</span>
              </label>

              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={info.confirmPassword}
                onChange={handleChanges}
                placeholder="Re-enter your password"
              />

              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Date of Birth */}
            <div className="field">
              <label htmlFor="dateOfBirth">
                Date of Birth <span>*</span>
              </label>

              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={info.dateOfBirth}
                onChange={handleChanges}
                max={today}
              />

              {errors.dateOfBirth && (
                <p className="error">{errors.dateOfBirth}</p>
              )}
            </div>

            {/* City */}
            <div className="field">
              <label htmlFor="city">
                City <span>*</span>
              </label>

              <input
                type="text"
                id="city"
                name="city"
                value={info.city}
                onChange={handleChanges}
                placeholder="Enter your city"
              />

              {errors.city && <p className="error">{errors.city}</p>}
            </div>

            {/* Gender */}
            <div className="field full-width">
              <label>
                Gender <span>*</span>
              </label>

              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={info.gender === "male"}
                    onChange={handleChanges}
                  />
                  Male
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={info.gender === "female"}
                    onChange={handleChanges}
                  />
                  Female
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={info.gender === "other"}
                    onChange={handleChanges}
                  />
                  Other
                </label>
              </div>

              {errors.gender && <p className="error">{errors.gender}</p>}
            </div>

            {/* Address */}
            <div className="field full-width">
              <label htmlFor="address">
                Address <span>*</span>
              </label>

              <textarea
                id="address"
                name="address"
                value={info.address}
                onChange={handleChanges}
                placeholder="Enter your complete address"
                rows="4"
              />

              {errors.address && <p className="error">{errors.address}</p>}
            </div>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}

          {/* Buttons */}
          <div className="button-group">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ControlledForm;
