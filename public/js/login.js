// Handler for logging in existing users
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Retrieve input values from the login form
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  
    if (email && password) {
      // Send a POST request to the login API endpoint
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        // If login is successful, redirect to the home page
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  // Handler for new user registration
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector("#name-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    if (name && email && password) {
      // Send a POST request to the users API endpoint to create a new user
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        // If registration is successful, redirect to the home page
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  };