const mobileHeader = document.querySelector(".mobile_header");
const mobileNav = document.querySelector(".mobile_nav");
document.querySelector(".open_nav").addEventListener("click", function () {
  mobileHeader.classList.remove("hidden");
  mobileNav.classList.remove("hidden");
  document.querySelector(".open_nav").style.display = "none";
  document.querySelector(".close_nav").style.display = "block";
});
document.querySelector(".close_nav").addEventListener("click", function () {
  mobileHeader.classList.add("hidden");
  mobileNav.classList.add("hidden");
  document.querySelector(".open_nav").style.display = "block";
  document.querySelector(".close_nav").style.display = "none";
});

////////////////////////////
//Sticky navigation
const sectionHeroEl = document.querySelector(".hero-section");
const nav = document.querySelector(".section-body-nav");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      nav.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      nav.classList.remove("sticky");
    }
  },
  {
    root: null, //inside the viewport
    theshold: 0, //we will have and event as soon as 0% of the herosection is inside the viewport
    //if its 1 means when the section hero is completely inside the viewport
    rootMargin: "-10px", //is has to be px, and its the height of the navigation bar
  }
);
obs.observe(sectionHeroEl);

////////////////////////////////////
//adding the class active when we reach the respective id section
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".body-nav-link");

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 150) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("link-active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("link-active");
      }
    });
  });
});
//////////////////////////////////
// Select the arrow elements
const arrows = document.querySelectorAll(".arrow-icon");

// Loop through each arrow element
arrows.forEach(function (arrow) {
  // Add a mouseenter event listener
  arrow.closest("a").addEventListener("mouseenter", function () {
    arrow.classList.add("icon-active"); // Adds class to trigger the CSS transition
  });

  // Add a mouseleave event listener
  arrow.closest("a").addEventListener("mouseleave", function () {
    arrow.classList.remove("icon-active"); // Removes the class to reset the transition
  });
});

//////////////////////
//selecting option color change
const selectElement = document.getElementById("select-where");

selectElement.addEventListener("change", function () {
  if (this.value === "") {
    this.style.color = "gray"; // Keeps the default option gray
  } else {
    this.style.color = "black"; // Changes to black when any other option is selected
  }
});
