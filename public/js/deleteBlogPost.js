// This function enables users to remove blog posts from the individual blog post page
const deletePostHandler = async (event) => {
    event.preventDefault();
    console.log("clicked me");
    console.log(event.target);
  
    let blogPost = window.location.pathname.split("/");
    console.log(blogPost);
  
    // Sends a DELETE request to the server to remove the specified blog post
    const response = await fetch(`/api/blogPost/${blogPost[2]}`, {
      method: "DELETE",
    });
  
    // If the request is successful, the user is redirected to the dashboard
    if (response.ok) {
      document.location.assign(`/dashboard`);
    } else {
      // If the request fails, an alert is displayed with the status text of the response
      alert(response.statusText);
    }
};
  
const deleteButton = document.querySelectorAll("#deleteBtn");
  
// This loop attaches the delete functionality to all buttons on the page
for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", deletePostHandler);
}