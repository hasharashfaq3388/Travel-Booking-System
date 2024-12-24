// Home Page: Handle Search
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchValue = document.getElementById('search-bar').value;
    window.location.href = `search-results.html?destination=${searchValue}`;
});

// Search Results Page: Generate Dynamic Content
if (window.location.pathname.includes('search-results.html')) {
    const params = new URLSearchParams(window.location.search);
    const destination = params.get('destination');

    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = `
        <h2>Available Options for ${destination}</h2>
        <div class="result">
            <p>Flight to ${destination} - $500</p>
            <button onclick="bookNow('${destination}')">Book Now</button>
        </div>
    `;
}

// Booking Page: Handle Booking Form
if (window.location.pathname.includes('booking.html')) {
    document.getElementById('booking-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Booking Confirmed! Thank you.');
        window.location.href = 'confirmation.html';
    });
}

