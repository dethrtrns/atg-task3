// // Initial setup
// gsap.set(".container-app-page", { y: "100%", autoAlpha: 1 }); // Start all sections below viewport
// gsap.set("#page1", { y: "0%" }); // Except the first one

// // Setup
// const sections = document.querySelectorAll(".container-app-page");
// const navDots = document.querySelectorAll(".dots-nav");
// let scrollPos = 0;
// let isAnimating = false;

// // Update Nav Dots
// function updateNavDots(index) {
//   navDots.forEach((dot) => {
//     const fill = dot.querySelector(".dotsst");
//     const stroke = dot.querySelector(".dotsstro");

//     // Reset to default colors
//     fill.style.fill = "transparent";
//     stroke.style.stroke = "#fff";
//   });

//   const fill = navDots[index].querySelector(".dotsst");
//   const stroke = navDots[index].querySelector(".dotsstro");

//   // Set active color
//   fill.style.fill = "rgb(0, 146, 255)";
//   stroke.style.stroke = "rgb(0, 146, 255)";
// }

// // Animate text and images
// function animateText(section, direction) {
//   const texts = section.querySelectorAll(".text-info-section");
//   gsap.to(texts, {
//     rotationX: direction === "up" ? -90 : 90,
//     duration: 0.5,
//     onComplete: () => gsap.set(texts, { rotationX: 0 }),
//   });
// }

// function animateImages(section, direction) {
//   const images = section.querySelectorAll(".image-container");
//   gsap.to(images, {
//     y: direction === "up" ? "100%" : "-100%",
//     duration: 0.5,
//     onComplete: () => gsap.set(images, { y: "0%" }),
//   });
// }

// // Navigate to section
// function navigateTo(index) {
//   // If index is out of bounds, do nothing
//   if (index < 0 || index >= sections.length || isAnimating) return;

//   // Flag to prevent multiple animations
//   isAnimating = true;

//   // Determine scroll direction
//   const direction = index > scrollPos ? "down" : "up";

//   const currentSection = sections[scrollPos];
//   const targetSection = sections[index];

//   // Animate text and images
//   animateText(currentSection, direction);
//   animateImages(currentSection, direction);

//   // Animate Out Current Section
//   gsap.to(currentSection, {
//     y: direction === "up" ? "100%" : "-100%",
//     duration: 0.5,
//   }); // Adjust this to your desired animation

//   // Animate In Target Section
//   gsap.fromTo(
//     targetSection,
//     { y: direction === "up" ? "-100%" : "100%" },
//     { y: "0%", duration: 0.5 }
//   ); // Adjust this to your desired animation

//   // Update Scroll Position
//   scrollPos = index;

//   // Update Nav Dots
//   updateNavDots(scrollPos);

//   // Clear animation flag
//   gsap.delayedCall(0.5, () => {
//     isAnimating = false;
//   });
// }

// // Listen for scroll event
// window.addEventListener("wheel", (event) => {
//   const direction = event.deltaY > 0 ? 1 : -1;
//   navigateTo(scrollPos + direction);
// });
