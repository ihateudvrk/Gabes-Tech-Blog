// Function to handle the creation of new comments
async function newCommentHandler(event) {
    event.preventDefault();
  
    // Retrieve the comment text and remove any leading or trailing whitespace
    const comment_body = document.getElementById("comment").value.trim();
    // Extract the blog post ID from the current URL
    const url = window.location.toString().split("/");
    const blogPost_id = url[url.length - 1];
  
    if (comment_body) {
      // Send a POST request to the comment API endpoint to create a new comment
      const response = await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({
          blogPost_id,
          comment_body,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        // If the comment is successfully created, reload the page
        document.location.reload();
      } else {
        // If the request fails, display an alert with the status text of the response
        alert(response.statusText);
      }
    }
  }
  
  // Attach an event listener to the comment form to handle submit events
  document
    .getElementById("comment-form")
    .addEventListener("submit", newCommentHandler);