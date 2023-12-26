document.addEventListener("DOMContentLoaded", function () {
    const dateList = document.getElementById("date-list");
    const recipeList = document.getElementById("recipe-list");

    // Dummy data for illustration
    const dateData = [
        { name: "Medjool", description: "Large, sweet date variety" },
        { name: "Deglet Noor", description: "Small and firm, rich flavor" },
        { name: "Barhi", description: "Soft and caramel-like taste" }
    ];

    const recipeData = [
        { name: "Date Smoothie", description: "A refreshing smoothie with dates" },
        { name: "Stuffed Dates", description: "Dates stuffed with nuts and cheese" },
        { name: "Date Energy Bites", description: "Healthy energy bites with dates" }
    ];

    // Function to create a card for each item
    function createCard(container, data) {
        data.forEach(item => {
            const card = document.createElement("div");
            card.className = `${container}-card`;
            card.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p>`;
            container.appendChild(card);
        });
    }

    // Populate date and recipe lists
    createCard(dateList, dateData);
    createCard(recipeList, recipeData);
});
