// Entrée principale de l'application.
import './style.css';
import { initmodal } from './js/modals/explain-modal.js';
import { initLandingPage } from './js/landing.js';
import { searchInit } from './js/search.js';

document.addEventListener("DOMContentLoaded", () => {

    // initLandingPage();
    // initmodal();
    searchInit();
    
 });
 