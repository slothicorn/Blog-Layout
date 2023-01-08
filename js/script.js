// vyjizdeci search input na headeru
const headerSearch = document.getElementById("header__search");
const input = document.getElementById("header__search--input");

headerSearch.addEventListener("click", () => {
  headerSearch.classList.add("opened");
  input.focus();
});

document.addEventListener("click", (event) => {
  if (!headerSearch.contains(event.target) && event.target !== headerSearch) {
    headerSearch.classList.remove("opened");
  }
  console.log(event.target);
});

// vyjizdeci menu

const navigationEl = document.getElementById("navigation");
const navOpenerEl = document.getElementById("header__nav--opener");
const navCloserEl = document.getElementById("navigation__closer");

document.addEventListener("click", (event) => {
  if (
    (navigationEl.classList.contains("open") &&
      !navigationEl.contains(event.target) &&
      event.target !== navigationEl) ||
    event.target === navCloserEl
  ) {
    navigationEl.classList.remove("open");
  }
});

navOpenerEl.addEventListener("click", (event) => {
  event.stopPropagation();
  navigationEl.classList.add("open");
});
