import React, { useState } from "react";
import welcome from "./welcome.jpg";

const Form = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements[0].value;
    const email = e.target.elements[1].value;

    // validate form entry
    if (!name || !email || !email.includes("@")) {
      setHasError(true);
      return;
    }
    setHasError(false);
    setHasSubmitted(true);
  };

  return (
    <>
      {/* if hasSubmitted === false */}
      {!hasSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username-input">Name</label>
            <input
              id="username-input"
              type="text"
              placeholder="e.g. John Smith"
            />
          </div>
          <div>
            <label htmlFor="email-input">Email</label>
            <input
              id="email-input"
              type="text"
              placeholder="e.g. john@smith.com"
            />
          </div>
          <button id="form-submit">Sign In</button>
          {hasError && <div>Sorry something went wrong</div>}
        </form>
      ) : (
        //   if truthty the form disappears and welcome message is shown
        <div>
          <p className="success">
            Thank you for submitting! We'll be in touch.
          </p>
          <img src={welcome} alt="welcome" name="welcome"></img>
        </div>
      )}
    </>
  );
};

export default Form;
