$(document).ready(function () {
  $(".nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70,
        },
        800
      );
    }
  });

  // Animate name letters one by one
  const name = "Advait!";
  let delay = 0;
  for (let i = 0; i < name.length; i++) {
    const letter = $("<span>").text(name[i]);
    $(".hero-name").append(letter);
    letter.css("animation-delay", `${delay}s`);
    delay += 0.1;
  }

  // Animate roles one by one
  const roles = $(".role");
  roles.each(function (index) {
    setTimeout(() => {
      $(this).removeClass("hidden").css({
        animation: "dropIn 0.6s forwards",
        "animation-delay": "0s",
      });
    }, 1000 + index * 700);
  });

  // Animate skill icons on scroll into view
  const skillIcons = $("#about i");

  function revealSkillsOnScroll() {
    const triggerPoint = window.innerHeight * 0.85;

    skillIcons.each(function (i) {
      const top = this.getBoundingClientRect().top;

      if (top < triggerPoint) {
        const el = $(this);
        setTimeout(() => {
          el.addClass("visible");
        }, i * 150); // Delay each icon
      }
    });
  }

  $(window).on("scroll", revealSkillsOnScroll);
  revealSkillsOnScroll(); // Also run once on load

  // Toggle full description on "View more"
  $(document).on("click", ".view-more", function () {
    const $text = $(this).prev(".card-text");
    if ($text.hasClass("short-text")) {
      $text.removeClass("short-text").css("-webkit-line-clamp", "unset");
      $(this).text("View less");
    } else {
      $text.addClass("short-text").css("-webkit-line-clamp", "3");
      $(this).text("View more");
    }
  });

  // Reveal project cards on scroll
  const projectCards = $(".project-card");

  function revealProjectsOnScroll() {
    const triggerPoint = window.innerHeight * 0.9;

    projectCards.each(function (i) {
      const top = this.getBoundingClientRect().top;

      if (top < triggerPoint) {
        const el = $(this);
        setTimeout(() => {
          el.addClass("visible");
        }, i * 200); // Stagger each card
      }
    });
  }

  $(window).on("scroll", revealProjectsOnScroll);
  revealProjectsOnScroll(); // Initial call

  // Toggle full description on "View more"
  $(document).on("click", ".view-more", function () {
    const $text = $(this).prev(".card-text");
    if ($text.hasClass("short-text")) {
      $text.removeClass("short-text").css("-webkit-line-clamp", "unset");
      $(this).text("View less");
    } else {
      $text.addClass("short-text").css("-webkit-line-clamp", "3");
      $(this).text("View more");
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("All fields are required.");
    e.preventDefault();
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email.");
    e.preventDefault();
  }
});
