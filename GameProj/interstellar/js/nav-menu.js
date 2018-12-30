/** ==============================================
 *  IMPORTS AND INSERTS HTML link (nav-menu.html)
 *  ==============================================
 * */

/** ______________________________________________________________________________________
 *  get current page HTML link (nav-menu.html), then insert it before current page <main>
 *  */
var link = document.querySelector('link[rel="import"]');
var content = link.import;
var el = content.querySelector(".nav-container");
document.body.insertBefore(
  el.cloneNode(true),
  document.getElementsByTagName("main")[0]
);

/** ==============================
 *  INIT PAGE VARIABLES / CLASSES
 *  ==============================
 * */
const pageContent = document.body.getElementsByTagName("main")[0];
const homePageContent = document.querySelector("#hero-content");
const navToggle = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".nav-menu");
const main = document.getElementsByTagName("main")[0];
pageContent.classList.add("transition-transform");

/** =======================
 *  OPEN / CLOSE NAV-MENU
 *  =======================
 * */
navToggle.addEventListener("click", _ => {
  // toggle navbar when user clicks navToggle button
  pageContent.classList.toggle("body-open");
  homePageContent.classList.toggle("nav-open");
  navToggle.classList.toggle("nav-open");
  navMenu.classList.toggle("nav-open");
});
main.addEventListener("click", _ => {
  // close navbar if user clicks main content of page
  if (navMenu.classList.contains("nav-open")) {
    pageContent.classList.remove("body-open");
    homePageContent.classList.toggle("nav-open");
    navToggle.classList.remove("nav-open");
    navMenu.classList.remove("nav-open");
  }
});
document.onkeydown = function(e) {
  // close nav menu when user presses escape
  if (e.keyCode == 27 && navMenu.classList.contains("nav-open")) {
    pageContent.classList.remove("body-open");
    homePageContent.classList.toggle("nav-open");
    navToggle.classList.remove("nav-open");
    navMenu.classList.remove("nav-open");
  }
};