// Show the decorations phase after start button is clicked
document.getElementById("start-btn").addEventListener("click", function() {
  document.getElementById("welcome-message").style.display = "none";
  document.getElementById("decorations").style.display = "block";
});

// Function to create balloons when the balloon button is clicked
function createBalloons() {
  for (let i = 0; i < 10; i++) { // Increase the number of balloons
    const balloon = document.createElement("img"); // Use img instead of div
    balloon.src = "images/balloon.png"; // Balloon image source
    balloon.alt = "Balloon"; // Alt text for the image
    balloon.classList.add("balloon"); // Add CSS class for animation and styling
    balloon.style.position = "absolute";
    balloon.style.left = `${Math.random() * 100}%`; // Random horizontal position
    balloon.style.bottom = "0"; // Start from the bottom of the screen
    balloon.style.width = "100px"; // Set a smaller size for the balloons
    balloon.style.height = "auto"; // Maintain aspect ratio of the balloon
    balloon.style.animation = "balloonAnimation 4s forwards"; // Animation for floating upwards
    document.body.appendChild(balloon); // Add the balloon to the body
  }
}

// Function to show the ribbon image and make the memories button visible
function showRibbon() {
  const ribbon = document.createElement("img");
  ribbon.src = "images/kittu.png"; // Replace with your ribbon image URL
  ribbon.alt = "Ribbon Image"; // Alternative text for the image

  // Position the ribbon image at the top (start position off-screen)
  ribbon.style.position = "absolute";
  ribbon.style.left = "50%";
  ribbon.style.transform = "translateX(-50%)";
  ribbon.style.top = "-150px"; // Start position above the screen

  // Add the ribbon image to the container
  const ribbonContainer = document.getElementById("ribbon-container");
  ribbonContainer.appendChild(ribbon);

  // Add the ribbon animation to make it appear from the top
  ribbon.classList.add("ribbon-animation");

  

  // Show the memories button after ribbon action
  document.getElementById("memories-btn").style.display = "inline-block";
}

