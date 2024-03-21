const card = document.querySelector(".card");
const sideMenu = document.querySelector(".side-menu");
const listItems = document.querySelectorAll(".list-item");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");
const firstListItem = document.querySelector(".list-item");
const menuBtn = document.querySelector(".menu-btn");

function toggleMenuAndSearch(isMenu) {
  const isMenuOpen = sideMenu.classList.contains("show-menu");
  const isSearchOpen = searchInput.classList.contains("show");

  if (isMenu) {
    sideMenu.classList.toggle("show-menu");
    card.classList.toggle("slide-right");
    if (isMenuOpen) {
      listItems.forEach((item) => (item.tabIndex = -1));
      menuBtn.tabIndex = 0;
      searchBtn.tabIndex = 0;
    } else {
      listItems.forEach((item) => (item.tabIndex = 0));
      searchBtn.tabIndex = -1;
      menuBtn.focus();
      menuBtn.tabIndex = -1;
      if (isSearchOpen) searchInput.classList.remove("show");
    }
  } else {
    searchInput.classList.toggle("show");
    if (isSearchOpen) {
    } else {
      if (isMenuOpen) {
        sideMenu.classList.remove("show-menu");
        card.classList.remove("slide-right");
      }
    }
  }
}

const lastListItem = listItems[listItems.length - 1];
lastListItem.addEventListener("keydown", function (event) {
  if (event.key === "Tab" && !event.shiftKey) {
    event.preventDefault();
    menuBtn.tabIndex = 0;
    menuBtn.focus();
  }
});

document.querySelector(".menu-btn").addEventListener("click", function () {
  toggleMenuAndSearch(true);
});

document.querySelector(".search-btn").addEventListener("click", function () {
  toggleMenuAndSearch(false);
});
