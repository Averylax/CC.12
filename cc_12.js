const dashboard = document.getElementById("dashboard");
const dashboardSelector = document.querySelector("#dashboard");

function createMetricCard(id, title, initialValue) {
    let card = document.createElement("div");
    card.setAttribute("class","metric-card"); 
    card.setAttribute("id",id); 
    card.innerHTML = `<h3>${title}</h3><p>$${initialvalue}</p>`; 
    dashboard.appendChild(card); 
};

createMetricCard("revenueCard", "Revenue", 0); //Invoking our createMetricCard() for the Revenue Card
// Task 1 - Created Revenue Metric Card

createMetricCard("profitCard", "Profit", 0); 
createMetricCard("expensesCard", "Expenses", 0);

const metricCardList = document.querySelectorAll(".metric-card"); 
const metricCardArray = Array.from(metricCardList); 

metricCardArray.forEach(card => { 
    card.innerHTML += "<p><i> - Updated</i></p>"; 
    card.style.backgroundColor = "greenyellow"; 
});
// Task 2 - Updated Metric Via Array Conversion

const inventoryList = document.getElementById("inventoryList");

function addInventoryItem(product) { 
    let newLi = document.createElement("li");
    newLi.setAttribute("class","product-item"); 
    newLi.setAttribute("dataset",product);
    newLi.addEventListener("click", () => {removeInventoryItem(newLi)});
    newLi.textContent = product;
    inventoryList.appendChild(newLi); 
};

addInventoryItem("Click me");
addInventoryItem("Add a product below");

let productForm = document.getElementById('productForm');
let error = document.getElementById('error');

productForm.addEventListener('submit', (event) => {
    let productName = document.getElementById('productName').value; 
    if (productName.trim() === '') { 
        error.textContent = 'Product name is required'; 
        event.preventDefault(); 
    } else {
        error.textContent = '';
        addInventoryItem(productName); 
        event.preventDefault(); 
    }
});

function removeInventoryItem(item) { 
    inventoryList.removeChild(item); 
};
// Task 3 - Implemented Dynamic Inventory List

const customerCards = document.querySelectorAll(".customer-card"); 
const customerSection = document.getElementById("customerSection"); 

customerCards.forEach(card => { 
    card.addEventListener("click", (event) => { 
        console.log(`User clicked ${event.target.textContent}`);
        event.stopPropagation(); 
    });    
});

customerSection.addEventListener("click", () => { 
    console.log(`User clicked customerSection`); 
});    
// Task 4 - Demonstrated Event Bubbling in Customer Section
