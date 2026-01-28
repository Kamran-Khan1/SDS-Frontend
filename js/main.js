const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const trigger = question.querySelector(".trigger");
  const paragraph = question.querySelector("p");

  trigger.addEventListener("click", () => {
    paragraph.classList.toggle("hidden");

    if (trigger.classList.contains("fa-plus")) {
      trigger.classList.remove("fa-plus");
      trigger.classList.add("fa-minus");
    } else {
      trigger.classList.remove("fa-minus");
      trigger.classList.add("fa-plus");
    }
  });
});

const background = document.querySelector(".background");
const menu = document.querySelector(".mobile-menu i");

menu.addEventListener("click", () => {
  if (background.classList.contains("hidden")) {
    background.classList.remove("hidden");
    menu.style.color = "#fff";
    menu.nextElementSibling.classList.remove("hidden");
  } else {
    background.classList.add("hidden");
    menu.style.color = "#000000";
    menu.nextElementSibling.classList.add("hidden");
  }
});
