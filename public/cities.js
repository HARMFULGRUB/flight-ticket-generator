document.addEventListener("DOMContentLoaded", function() {
    // Function to populate a dropdown
    function populateDropdown(selectId, data) {
        const select = document.getElementById(selectId);
        data.forEach(city => {
            const option = document.createElement('option');
            option.value = city.code;
            option.textContent = city.code;
            select.appendChild(option);
        });
    }

    // Function to update fields based on selected code
    function updateCityFields(selectId, cityFullId) {
        const select = document.getElementById(selectId);
        select.addEventListener('change', function() {
            const selectedCode = this.value;
            fetch('cities.json')
                .then(response => response.json())
                .then(data => {
                    const city = data.find(city => city.code === selectedCode);
                    if (city) {
                        document.getElementById(cityFullId).value = `${city.city}, ${city.country}`;
                    }
                })
                .catch(error => console.error('Error finding city:', error));
        });
    }

    // Fetch and populate city dropdowns
    fetch('cities.json')
        .then(response => response.json())
        .then(data => {
            populateDropdown('departure_city', data);
            populateDropdown('arrival_city', data);
            populateDropdown('connecting_departure_city', data);
            populateDropdown('connecting_arrival_city', data);
        })
        .catch(error => console.error('Error loading cities:', error));

    // Set up event listeners for updating city fields
    updateCityFields('departure_city', 'departure_city_full');
    updateCityFields('arrival_city', 'arrival_city_full');
    updateCityFields('connecting_departure_city', 'connecting_departure_city_full');
    updateCityFields('connecting_arrival_city', 'connecting_arrival_city_full');
});
