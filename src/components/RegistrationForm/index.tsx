import React, { useState } from "react";
import './index.styles.css';

export default function RegistrationForm() {
    const defaultUser = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        acceptsTerms: false
    }

    const [user, setUser] = useState(defaultUser)
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert('Your information was submitted successfully')
  };

  const handleChange = (key: string, value: string) => {
    setUser({ ...user, [key]: value })
  };

  const handleValidatePassword = (event: any) => {
    const value = event.target.value
    setPasswordConfirmation(value)
    event.target.setCustomValidity((user.password !== value) ? 'Passwords must match' : '')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field-group">
        <label className="input-label width-50">
          First Name
          <input
            className="input-field"
            type="text"
            value={user.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            required
          />
        </label>
        <label className="input-label width-50">
          Last Name
          <input
            className="input-field"
            type="text"
            value={user.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            required
          />
        </label>
      </div>
      <label className="input-label">
        Email
        <input
          className="input-field"
          type="text"
          value={user.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
      </label>
      <label className="input-label">
        Password
        <input
          className="input-field"
          type="password"
          value={user.password}
          onChange={(e) => handleChange('password', e.target.value)}
          required
          minLength={8}
          />
      </label>
      <label className="input-label">
        Re-enter password
        <input
          className="input-field"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => handleValidatePassword(e)}
          required
          />
      </label>
      <div className="checkbox-group">
        <input
            className="checkbox"
          type="checkbox"
          value="Terms"
          onChange={(e) => handleChange('acceptsTerms', e.target.value)}
          required
          />
        <label className="input-label">
          I have read & agree with Terms & Conditions and Privacy Policy
        </label>
      </div>
      <input className="submit-button" type="submit" />
    </form>
  );
}
