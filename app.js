///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

const navEl = document.querySelector(".main-nav");

btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
    navEl.style.display = "flex";
});

///////////////////////////////////////////////////////////

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        // Close mobile naviagtion
        if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
    });
});



function Project1() {
    window.open(
        "https://github.com/subho-lwf7/BookShop-Automation.git", "_blank");
}
function Project2() {
    window.open(
        "https://github.com/subho-lwf7/AlzheimerPrediction.git", "_blank");
}

function gh(){
    window.open("https://github.com/subho-lwf7","_blank");
  }
  function insta(){
    window.open("https://www.instagram.com/cristiano.subho.cr7/?hl=en" ,"_blank");
  }
  

  function lin(){
    window.open("https://www.linkedin.com/in/suvam-roy07/","_blank");
  }
  
  function twit(){
    window.open("https://twitter.com/elonmusk","_blank");
  }
  
