document.getElementById("more-info-btn").addEventListener("click", function() {
    var description = document.getElementById("event-description");
    if (description.style.display === "none" || description.style.display === "") {
      description.style.display = "block"; // Show the description
      this.textContent = "⫘⫘⫘⫘⫘⫘ Less Info ⫘⫘⫘⫘⫘⫘"; // Change button text
    } else {
      description.style.display = "none"; // Hide the description
      this.textContent = "⫘⫘⫘⫘⫘⫘ More Info ⫘⫘⫘⫘⫘⫘"; // Reset button text
    }
  });
  



 