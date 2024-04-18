// Extract the blog post ID from the current URL
let blogPost = window.location.pathname.split("/");

// Define a function to handle the editing of blog posts
const editPost = async (event) => {
  event.preventDefault();
  console.log("clicked me");

  // Retrieve the comment text and remove any leading or trailing whitespace
  const comment_body = document.getElementById("editBtn").value.trim();

  console.log(blogPost);

  // Redirect the user to the edit page for the selected blog post
  document.location.assign(`/create/${blogPost[2]}`);
};

// Get all the edit buttons on the page
const editButton = document.querySelectorAll("#editBtn");

// Add an event listener to each edit button to handle click events
for (let i = 0; i < editButton.length; i++) {
  editButton[i].addEventListener("click", editPost);
}