// This function enables users to remove blog posts from the dashboard page and then redirects them to the refreshed dashboard
const deletePostHandler = async (event) => {
    event.preventDefault();
    console.log("clicked me");
    console.log(event.target);
  
    let blogPostId = event.target.getAttribute("data-id");
    console.log(blogPostId);
  
    const response = await fetch(`/api/blogPost/${blogPostId}`, {
      method: "DELETE",
    });
  
    if (response.ok) {
      document.location.assign(`/dashboard`);
    } else {
      alert(response.statusText);
    }
};

// This function enables users to modify blog posts on the dashboard page by redirecting them to the /create/:id page
const editBlogPost = async (event) => {
    event.preventDefault();
    console.log("clicked me");
  
    let blogPostId = event.target.getAttribute("data-id");
  
    document.location.assign(`/create/${blogPostId}`);
};

const editButton = document.querySelectorAll("#editBtn");

// This loop attaches the edit functionality to all buttons on the page
for (let i = 0; i < editButton.length; i++) {
    editButton[i].addEventListener("click", editBlogPost);
}

const deleteButton = document.querySelectorAll("#deleteBtn");

// This loop attaches the delete functionality to all buttons on the page
for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", deletePostHandler);
}