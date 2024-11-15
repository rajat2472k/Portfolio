// Element toggle function remains the same
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const targetPage = this.textContent.trim().toLowerCase();

    for (let j = 0; j < pages.length; j++) {
      if (targetPage === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}


const navProjectLinks = document.querySelectorAll("[project-nav-link]");
const projectItems = document.querySelectorAll("[project-page]");

// Function to show the "All" section by default when the page loads
function showAllProjects() {
  navProjectLinks.forEach((link) => link.classList.remove("active"));
  projectItems.forEach((item) => item.classList.add("active"));
  
  // Set the "All" button as active
  const allButton = Array.from(navProjectLinks).find(link => link.textContent.trim().toLowerCase() === "all");
  if (allButton) {
    allButton.classList.add("active");
  }
}

// Run the function on page load to ensure "All" projects are shown
showAllProjects();

// Event listeners for navigation buttons
navProjectLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const targetPage = this.textContent.trim().toLowerCase();

    // Toggle active class for the navigation links.
    navProjectLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");

    // Show or hide the project items based on the target page.
    projectItems.forEach((item) => {
      if (item.getAttribute("project-page") === targetPage || targetPage === "all") {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('dark-mode-toggle');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
  });
});

