import { registerDeck } from './navigator.js';

/**
 * Main application element, simply registers the web components
 */
const app = async () => {
  registerDeck();
};

document.addEventListener('DOMContentLoaded', app);
