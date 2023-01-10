//JS for responsive menu
function menu() {
  let menu = document.getElementById("main_menu");
  menu.classList.toggle("show_menu");

  let menuIcon = document.getElementById("menu_icon");

  if (menu.classList.contains("show_menu")) {
    menuIcon.innerHTML = "close";
    menu.classList.add("smooth_menu");
  } else {
    menuIcon.innerHTML = "menu";
  }
}

//Hide menu in mobile view when click any menu item
function hideMenu() {
  let menu = document.getElementById("main_menu");
  let menuIcon = document.getElementById("menu_icon");
  menu.classList.remove("show_menu");
  menuIcon.innerHTML = "menu";
}

//SVG animate when its in the viewport

// Animation for Maintenance svg
const maintenance = document.getElementById("maintenance_svg");
const sq2 = document.getElementById("sq2");
const req = document.getElementById("req");

const observer1 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    maintenance.classList.add("svg_appear");
    maintenance.style.opacity = "1";
    sq2.classList.add("sq2_anm");
    req.classList.add("req_anm");
  } else {
    maintenance.classList.remove("svg_appear");
    maintenance.style.opacity = "0";
    sq2.classList.remove("sq2_anm");
    req.classList.remove("req_anm");
  }
});

observer1.observe(maintenance);

// Animation for Contact svg
const contact = document.getElementById("contact_svg");

const observer2 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    contact.classList.add("svg_appear");
    contact.style.opacity = "1";
  } else {
    contact.classList.remove("svg_appear");
    contact.style.opacity = "0";
  }
});

observer2.observe(contact);
