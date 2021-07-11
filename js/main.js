const projects = [
  {
    id: 1,
    title: "Random Quotes",
    img: "./projects/random-quotes.png",
    site: "https://random-quotes-generator-t4.netlify.app/",
    github:
      "https://github.com/Teja54/Javascript-Applications/tree/main/Random%20Quotes",
    text: "Random Quotes Generator application created using vanilla Javascript. It will generate random quote using fetch API also it has features of copy to clipboard and enabled twitter share.",
  },
  {
    id: 2,
    title: "Google Homepage",
    img: "./projects/google-homepage.png",
    site: "https://teja54.github.io/google-homepage/",
    github: "https://github.com/Teja54/google-homepage",
    text: "Recreated responsive Google Homepage using HTML, CSS. And also activated seach engine using vanilla Javascript which work same as Google.",
  },
  {
    id: 3,
    title: "Frontend Mentor Challenges",
    img: "./projects/frontend-mentor-solutions.png",
    site: "https://frontend-mentor-solutions-teja54.netlify.app/",
    github: "https://github.com/Teja54/frontend-mentor-challenges",
    text: "A collection of frontend challenges from Frontend mentor that I created using HTML, CSS, Vanilla Javascript and React.",
  },
  {
    id: 4,
    title: "Comfy House Store",
    img: "./projects/comfy-house-store.png",
    site: "https://teja54.github.io/ecommerce/",
    github: "https://github.com/Teja54/ecommerce",
    text: "A furniture store created using HTML, CSS and vanilla Javascript which contains the features of add the cart, modify cart items, clear cart.",
  },
  {
    id: 5,
    title: "Search Movies",
    img: "./projects/search-movies.png",
    site: "https://search-movies-teja54.netlify.app/",
    github:
      "https://github.com/Teja54/Javascript-Applications/tree/main/Movie%20Search%20App",
    text: "A movie search application which takes input from user and fetches movie from movies API created using vanilla Javascript",
  },
  {
    id: 6,
    title: "To Do List",
    img: "./projects/to-do-list.png",
    site: "https://tejas-to-do-list.netlify.app/",
    github:
      "https://github.com/Teja54/Javascript-Applications/tree/main/To%20Do%20App",
    text: "A Todo list application helps you to keep fresh and upto date also helps you to prioritize your work in efficient manner and hence increase your productivity.",
  },
];

const menuBtn = document.querySelector(".hamburger_btn");
const menu = document.querySelector(".nav_list");
const menuItems = document.querySelectorAll(".nav_item");
const themeBtn = document.querySelector(".theme_btn");
const navbar = document.getElementById("nav");
const year = document.querySelector(".year");
const scrollTopBtn = document.querySelector(".top_link");

year.textContent = new Date().getFullYear();

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("open");
  menuItems.forEach((item) => item.classList.toggle("open"));
});

menuItems.forEach((item) =>
  item.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    menu.classList.remove("open");
    menuItems.forEach((item) => item.classList.remove("open"));
  })
);

const scrollItems = document.querySelectorAll(".nav_link");
scrollItems.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
}

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});

const list = document.getElementById("list");

window.addEventListener("DOMContentLoaded", (event) => {
  displayPageItems(projects);
});

function displayPageItems(items) {
  let page = items
    .map(function (item) {
      return `<li>
        <a href="${item.site}" target="_blank">
          <img src="${item.img}" alt="${item.title}" />
        </a>
        <div class="intro">
          <div class="info">
            <h4>${item.title}</h4>
            <div class="links-container">
              <a href="${item.github}" target="_blank" class="git-link">
                <i class="fab fa-github"></i>
              </a>
              <a href="${item.site}" target="_blank" class="preview">
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
          <p>
            ${item.text}
          </p>
        </div>
      </li>`;
    })
    .join(" ");
  list.innerHTML = page;
}


function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
scrollTopBtn.addEventListener("click", scrollToTop);
