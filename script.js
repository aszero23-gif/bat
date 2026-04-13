// Language toggle function for BAT platform
// Switches between English (LTR) and Arabic (RTL)
function toggleLanguage() {
    const body = document.body;
    const btn = document.getElementById('lang-scaler');
    const elements = document.querySelectorAll('[data-en][data-ar]');
    
    if (body.dir === 'ltr') {
        // Switch to Arabic (RTL)
        body.dir = 'rtl';
        body.lang = 'ar';
        btn.textContent = 'English';
        elements.forEach( el => {
            el.textContent = el.getAttribute('data-ar');
        });
    } else {
        // Switch to English (LTR)
        body.dir = 'ltr';
        body.lang = 'en';
        btn.textContent = 'عربي';
        elements.forEach( el => {
            el.textContent = el.getAttribute('data-en');
             
        });
    }
}

// Initialize map when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Leaflet map for MENA region
    const map = L.map('map').setView([25, 40], 4); // Centered on MENA
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 11
    }).addTo(map);
    
    // Add BAT station markers (sample data)
    const stations = [
        {coords: [24.7136, 46.6753], name: 'Riyadh HQ', popup: 'BAT Energy HQ'},
        {coords: [25.2769, 55.2963], name: 'Dubai Station', popup: 'BAT Dubai'},
        {coords: [30.0444, 31.2357], name: 'Cairo Station', popup: 'BAT Cairo'},
    ];
    
    stations.forEach(station => {
        L.marker(station.coords)
            .addTo(map)
            .bindPopup(`<div class="map-info-card">${station.popup}</div>`);
    });
    
    // Toggle language on button click (redundant but ensures function is global)
    document.getElementById('lang-scaler').addEventListener('click', toggleLanguage);
});
