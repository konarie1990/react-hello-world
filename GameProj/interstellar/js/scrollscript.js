// "use strict";

// $(document).ready(function() {
// Update entry
// const updateSection = entry => {
//   if (entry.isIntersecting) {
//     entry.target.classList.add("visible");
//   }
//   if (!entry.isIntersecting) {
//     entry.target.classList.remove("visible");
//   }
// };

// Handle callback
// const intersectCallback = (entries, observer) => {
//   for (let entry of entries) {
//     updateSection(entry);
//   }
// };

// Create Observer
// const options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.5
// };

// const observer = new IntersectionObserver(intersectCallback, options);

// Observe sections
//   const sections = document.getElementsByClassName("game hidden");

//   for (let section of sections) {
//     observer.observe(section);
//   }

//   const hero_ScrollArrow = $("#scroll-arrow");

//   hero_ScrollArrow.hover(
//     function() {
//       $(this).addClass("bounce");
//     },
//     function() {
//       $(this).removeClass("bounce");
//     }
//   );
// });
