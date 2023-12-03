const menu_button = $("nav");
const menu_transform = $(".nav__list");

menu_button.click(function () {
  menu_button.toggleClass("active");

  if (menu_transform.css("transform") === "matrix(1, 0, 0, 1, 0, 0)") {
    menu_transform.css("transform", "translateX(100%)");
  } else {
    menu_transform.css("transform", "translateX(0%)");
  }
});
