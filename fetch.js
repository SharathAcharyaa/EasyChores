document.getElementById("view-button").addEventListener("click", function() {
    const sheetUrl = "https://docs.google.com/spreadsheets/d/1Mk0BKn3bThRaUDw9qp-xnjKIZK6iX8afIxJ0yXg0XDc/edit?gid=0#gid=0"; // Replace with your actual Google Sheet URL
    window.open(sheetUrl, "_blank");
});

// Add your existing fetch functionality here if you have it