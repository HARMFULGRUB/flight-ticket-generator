document.addEventListener("DOMContentLoaded", function() {
    const airlineSelect = document.getElementById('airline');

    // Fetch airline data from the JSON file
    fetch('airlines.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Populate the dropdown with the airline options
            data.forEach(airline => {
                const option = document.createElement('option');
                option.value = airline.name;
                option.textContent = airline.name;
                airlineSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading airlines:', error));
});
