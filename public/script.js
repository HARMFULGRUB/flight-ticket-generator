// Function to clear the form
function clearForm() {
    document.getElementById('ticketForm').reset(); // Resets all fields in the form
}

// Set up event listener for clear button
document.getElementById('clear-btn').addEventListener('click', clearForm);

document.getElementById('ticketForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Form Values
    const departureDate = document.getElementById('departure_date').value;
    const passengerName = document.getElementById('passenger_name').value;
    const reservationCode = document.getElementById('reservation_code').value;
    const airlineReservationCode = document.getElementById('airline_reservation_code').value;
    const departureDayDate = document.getElementById('departure_day_date').value;
    const airline = document.getElementById('airline').value;
    const airlineCode = document.getElementById('airline_code').value;
    const flightDuration = document.getElementById('flight_duration').value;
    const baggageAllowance = document.getElementById('baggage_allowance').value;
    const aircraftType = document.getElementById('aircraft_type').value;
    const eticketNumber = document.getElementById('eticket_number').value;
    const departureCity = document.getElementById('departure_city').value;
    const departureCityFull = document.getElementById('departure_city_full').value;
    const arrivalCity = document.getElementById('arrival_city').value;
    const arrivalCityFull = document.getElementById('arrival_city_full').value;
    const departureTime = document.getElementById('departure_time').value;
    const departureDateShort = document.getElementById('departure_date_short').value;
    const arrivalTime = document.getElementById('arrival_time').value;
    const arrivalDateShort = document.getElementById('arrival_date_short').value;
    const layoverTime = document.getElementById('layover_time').value;
    const connectingDepartureCity = document.getElementById('connecting_departure_city').value;
    const connectingDepartureCityFull = document.getElementById('connecting_departure_city_full').value;
    const connectingDepartureTime = document.getElementById('connecting_departure_time').value;
    const connectingDepartureDate = document.getElementById('connecting_departure_date').value;
    const connectingArrivalCity = document.getElementById('connecting_arrival_city').value;
    const connectingArrivalCityFull = document.getElementById('connecting_arrival_city_full').value;
    const connectingArrivalTime = document.getElementById('connecting_arrival_time').value;
    const connectingArrivalDate = document.getElementById('connecting_arrival_date').value;

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text('DEPARTURE', 20, 20);
    doc.text(departureDayDate, 66, 20);
    doc.setLineWidth(0.6);
    doc.line(20, 22, 190, 22); 

    // Passenger Information
    doc.setFontSize(20);
    doc.text('Passenger Information', 20, 32);

    // Passenger Name
    let yOffset = 40;
    doc.setFontSize(16);
    doc.text('Passenger Name(s)', 20, yOffset);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    yOffset += 6;

    const passengerNames = passengerName.split(',');
    passengerNames.forEach(name => {
        doc.text(name.trim(), 20, yOffset);
        yOffset += 6;
    });
    yOffset += 4;

    // Reservation Code
    if (reservationCode) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16); 
        doc.text('Reservation Code', 20, yOffset);
        yOffset += 6;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(14);
        doc.text(reservationCode || '-', 20, yOffset);
        yOffset += 10;
    }

    // Airline Reservation Code
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);  
    doc.text('Airline Reservation Code(s)', 20, yOffset);
    yOffset += 6;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    const airlineCodes = airlineReservationCode.split(',');
    airlineCodes.forEach(code => {
        doc.text(code.trim(), 20, yOffset);
        yOffset += 6; 
    });
    yOffset += 4; 

    // Airline Information
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text('Airline Information', 20, yOffset);
    doc.line(20, yOffset + 2, 190, yOffset + 2);
    yOffset += 10;

    doc.setFontSize(14);
    doc.text('Airline', 20, yOffset);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`${airline}`, 20, yOffset + 6);
    yOffset += 16;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text('Baggage Allowance', 20, yOffset);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`1x${baggageAllowance}kg Check-In Baggage`, 20, yOffset + 6);
    doc.text(`1x7kg Cabin Baggage`, 20, yOffset + 12);
    yOffset += 22;

    let rightyOffset = yOffset - 38;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text('Airline Code', 120, rightyOffset);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`${airlineCode}`, 120, rightyOffset +6);
    rightyOffset += 16;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text('Aircraft', 120, rightyOffset);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`${aircraftType}`, 120, rightyOffset +6);
    rightyOffset += 16;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text('Flight Duration', 120, rightyOffset);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`${flightDuration}`, 120, rightyOffset +6);
    rightyOffset += 16;

    let eticketyOffset = yOffset;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text('eTicket Number', 20, eticketyOffset);
    eticketyOffset += 6;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    
    if (eticketNumber) {
        const etickets = eticketNumber.split(',');
        etickets.forEach(ticket => {
            doc.text(ticket.trim(), 20, eticketyOffset);
            eticketyOffset += 6;
        });
    } else {
        doc.text('-', 20, eticketyOffset);
        eticketyOffset += 12;
    }
    yOffset = eticketyOffset += 4;

    // Departure and Arrival Information
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text('Departure & Arrival Information', 20, yOffset);
    doc.line(20, yOffset +2, 190, yOffset +2);
    yOffset +=10; 

    // Departure Information
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text('Departure City', 20, yOffset);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(departureCity, 20, yOffset +6);
    doc.text(departureCityFull, 20, yOffset +12);
    yOffset +=22;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text('Departure Time', 20, yOffset);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(departureTime, 20, yOffset +6);
    doc.text((departureDateShort), 20, yOffset +12);
    yOffset +=22;

    // Arrival Information
    let arrivalYOffset = yOffset - 44;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text('Arrival City', 120, arrivalYOffset);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(arrivalCity, 120, arrivalYOffset +6);
    doc.text(arrivalCityFull, 120, arrivalYOffset +12);
    arrivalYOffset +=22;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text('Arrival Time', 120, arrivalYOffset);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(arrivalTime, 120, arrivalYOffset +6);
    doc.text(arrivalDateShort, 120, arrivalYOffset +12);

    if (layoverTime) {
        yOffset += 0;

        // Set color to grey for the dotted line
        doc.setDrawColor(128, 128, 128); // RGB for grey

        // Draw the first half of the dotted line
        doc.setLineWidth(0.6);
        doc.setLineDash([2, 2], 0); // Dotted line: [2, 2] means 2 units of dash and 2 units of space
        doc.line(20, yOffset, 90, yOffset); // First half of the line (left side)

        // Draw the second half of the dotted line
        doc.line(120, yOffset, 190, yOffset); // Second half of the line (right side)

        // Reset line style to solid and color back to default (black)
        doc.setLineDash();
        doc.setDrawColor(0, 0, 0);

        // Centered layover time
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.text(layoverTime, 105, yOffset, null, null, 'center'); // Centered text
        yOffset += 10; // Space after the line
    }

    if (connectingDepartureCity && connectingDepartureTime) {
        // Connecting Departure
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text('Departure City', 20, yOffset);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(connectingDepartureCity, 20, yOffset + 6);
        doc.text(connectingDepartureCityFull, 20, yOffset + 12);
        yOffset += 22;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text('Departure Time', 20, yOffset);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(connectingDepartureTime, 20, yOffset + 6);
        doc.text(connectingDepartureDate, 20, yOffset + 12);
        yOffset += 22;

        // Connecting Arrival
        let cayOffset = yOffset - 44;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text('Arrival City', 120, cayOffset);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(connectingArrivalCity, 120, cayOffset + 6);
        doc.text(connectingArrivalCityFull, 120, cayOffset + 12);
        cayOffset += 22;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text('Arrival Time', 120, cayOffset);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(connectingArrivalTime, 120, cayOffset + 6);
        doc.text(connectingArrivalDate, 120, cayOffset + 12);
    }

    // Save
    doc.save(`${departureDate} Itinerary.pdf`);
});
