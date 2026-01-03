const form = document.getElementById("foodForm");
const foodItems = document.getElementById("foodItems");

let foods = JSON.parse(localStorage.getItem("foods")) || [];

function renderFoods() {
    foodItems.innerHTML = "";

    foods.forEach((food, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${food.meal}</strong> from <b>${food.hostel}</b><br>
            Plates: ${food.quantity}<br>
            Available till: ${food.expiry}
            <button class="request-btn" onclick="requestFood(${index})">
                Request Food
            </button>
        `;
        foodItems.appendChild(li);
    });
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const food = {
        hostel: document.getElementById("hostel").value,
        meal: document.getElementById("meal").value,
        quantity: document.getElementById("quantity").value,
        expiry: document.getElementById("expiry").value
    };

    foods.push(food);
    localStorage.setItem("foods", JSON.stringify(foods));
    form.reset();
    renderFoods();
});

function requestFood(index) {
    alert(`Food requested from ${foods[index].hostel}!`);
    foods.splice(index, 1);
    localStorage.setItem("foods", JSON.stringify(foods));
    renderFoods();
}

renderFoods();
