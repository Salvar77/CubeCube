const cube = document.querySelector(".cube");
const cubeBox = document.querySelector(".cube-box");
const buttonBox = document.querySelector(".buttons");
const buttons = document.querySelectorAll(".button-menu");
const contactForm = document.querySelector(".contact__form");
const navBtn = document.querySelector(".hamburger");
const allNavItems = document.querySelectorAll(".button-menu");
const wrapper = document.querySelectorAll(".wrapper");
const bgIcon = document.querySelectorAll(".bg-icon");
const tempContent = document.querySelectorAll(".temp-content");
const mediaQuery = window.matchMedia("(max-width: 768px)");

// Dodanie event listenera do przycisku hamburger, aby przełączał menu i ikonę
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("is-active");
  buttonBox.classList.toggle("buttons--isactive");
});

// Dodanie event listenerów do wszystkich elementów menu, aby zamykały menu po kliknięciu
allNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    buttonBox.classList.remove("buttons--isactive");
    navBtn.classList.remove("is-active");
  });
});

// Funkcja odpowiedzialna za pokazywanie sekcji na stronie
let cubeClass = "front-active";
const showSection = (id) => {
  if (id === cubeClass) {
    return;
  }

  cube.classList.remove(cubeClass);
  cubeBox.classList.add("cube-box-scaleDown");
  buttonBox.classList.add("buttons-disable");

  if (mediaQuery.matches) {
    wrapper.forEach((wrap) => wrap.classList.add("hide-content"));
    bgIcon.forEach((icon) => icon.classList.add("hide-content"));
    tempContent.forEach((temp) => temp.classList.add("temp-content-active"));
  }

  setTimeout(() => cubeBox.classList.remove("cube-box-scaleDown"), 2100);
  setTimeout(() => buttonBox.classList.remove("buttons-disable"), 2100);

  if (mediaQuery.matches) {
    setTimeout(
      () => wrapper.forEach((wrap) => wrap.classList.remove("hide-content")),
      2100
    );
    setTimeout(
      () => bgIcon.forEach((icon) => icon.classList.remove("hide-content")),
      2100
    );
    setTimeout(
      () =>
        tempContent.forEach((temp) =>
          temp.classList.remove("temp-content-active")
        ),
      2100
    );
  }

  buttons.forEach((button) => button.classList.remove("button-menu-active"));
  const currentActiveSection = document.querySelector(`[data-id=${id}]`);
  currentActiveSection.classList.add("button-menu-active");
  cube.classList.add(id);
  cubeClass = id;
};
