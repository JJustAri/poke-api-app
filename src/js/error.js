let message = "";

export function showError(message) {
  const errorDiv = document.getElementById("errorDiv");

  if (data.length === 0) {
    message = "pokémon not found";
    errorDiv.textContent = message;
    errorDiv.classList.remove("hidden");
  }
}
