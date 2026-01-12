// Module d'affichage des erreurs utilisateur

export function showError(error) {
  const errorDiv = document.getElementById("errorDiv");

  // Affiche le message d'erreur dans la div d'erreur et rend le bloc visible
  errorDiv.textContent = error.message;
  errorDiv.classList.remove('hidden');
}
