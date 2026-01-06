
export function showError(error) {
  const errorDiv = document.getElementById("errorDiv");

  errorDiv.textContent = error.message;
  errorDiv.classList.remove('hidden');
}
