import React, { useState } from "react";

export default function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field-group">
        <label className="input-label width-50">
          First Name
          <input
            className="input-field"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label className="input-label width-50">
          Last Name
          <input
            className="input-field"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
      <label className="input-label">
        Email
        <input
          className="input-field"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="input-label">
        Password
        <input
          className="input-field"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label className="input-label">
        Re-enter password
        <input
          className="input-field"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </label>
      <div className="checkbox-group">
        <input
        className="checkbox"
          type="checkbox"
          value="Terms"
          onChange={(e) => setAcceptTerms(!acceptTerms)}
        />
        <label className="input-label">
          I have read & agree with Terms & Conditions and Privacy Policy
        </label>
      </div>
      <input className="submit-button" type="submit" />
    </form>
  );
}
