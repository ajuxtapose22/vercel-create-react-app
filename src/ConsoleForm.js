import React, { useState } from "react";
import "./ConsoleForm.css";

function ConsoleForm() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  
  const handleSubmit = (event) => {
    event.preventDefault()
    let validationErrors = {}

    if (!name) {
      validationErrors.name = "Name is required"
    } else if (name.length < 3) {
      validationErrors.name = "Name must be at least 3 Characters long"
    }
    
    // console.log(`Name: ${name}, Message: ${message}`);


  };

 
  
  
  const handleReset = (event) => {
    setName('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="name_div">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="message_div">
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>
      <button type="submit">Submit</button>
<button onClick={handleReset} type="reset">Reset</button>
      </div>
    </form>
  );
}

export default ConsoleForm;
