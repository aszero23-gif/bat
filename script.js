// Proper map instance management
function manageMapInstances() {
    // Logic to remove old map instances
}

// Fix language toggle to reinitialize map
function toggleLanguage() {
    // Logic to reinitialize the map
}

// Mobile menu toggle function with aria-expanded support
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const isExpanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', !isExpanded);
    // Logic for toggling the menu
}

// Error handling for map initialization
function initializeMap() {
    try {
        // Logic to initialize map
    } catch (error) {
        console.error('Error initializing map:', error);
        // Additional error handling logic
    }
}