import React from 'react';
import './index.styles.css';
import RegistrationForm from '../RegistrationForm'

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <header className="header">
          <h1>Create a new account</h1>
        </header>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;
