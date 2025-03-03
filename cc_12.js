const dashboard = document.getElementById("dashboard");
const dashboardSelector = document.querySelector("#dashboard");

function createMetricCard(id, title, initialValue) {
    let card = document.createElement("div");
    card.setAttribute("class","metric-card"); 
    card.setAttribute("id",id); 
    card.innerHTML = `<h3>${title}</h3><p>$${initvalue}</p>`; 
    dashboard.appendChild(card); 
};

createMetricCard("revenueCard", "Revenue", 0); //Invoking our createMetricCard() for the Revenue Card
// Task 1 - Created Revenue Metric Card
