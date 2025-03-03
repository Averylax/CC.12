const dashboard1 = document.getElementById("dashboard");
const dashboard2 = document.querySelector("#dashboard");

// Ensure the dashboard exists
if (dashboard1 && dashboard2) {
    // Create a new div element for the metric card
    const revenueCard = document.createElement("div");

    // Set class and id attributes
    revenueCard.setAttribute("class", "metric-card");
    revenueCard.setAttribute("id", "revenueCard");

    // Populate the card with a title and a placeholder value
    revenueCard.innerHTML = `
        <h3>Revenue</h3>
        <p>$0</p>
    `;

    // Append the new metric card to the dashboard
    dashboard1.appendChild(revenueCard);
}
// Task 1 - Created Revenue Metric Card