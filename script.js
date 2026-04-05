let kebapDishes = [
    {
        "name": "Kebap Kalb",
        "description": "Kebap mit 200gr. Kalbfleisch und hausgemachtem Brot",
        "price": 5.70,
        "image": "./assets/img/kebap-kalb.jpg"
    },
    {
        "name": "Kebap Huhn",
        "description": "saftiger Hühnerkebap(200gr.)",
        "price": 5.70,
        "image": "./assets/img/kebap-huhn.jpg"
    },
    {
        "name": "Kebapteller",
        "description": "Ein Kebap ohne Brot :)",
        "price": 5.50,
        "image": "./assets/img/kebap-teller.jpg"
    },
    {
        "name": "Iskender",
        "description": "Kalbsdöner auf geröstetem Brot mit Tomatensauce, Joghurt und Butter",
        "price": 9.70,
        "image": "./assets/img/iskender.jpg"
    }
]

function renderKebapDishes() {
    let kebapContent = document.getElementById('kebap-dishes');
    kebapContent.innerHTML = "";

    for (let kebapDishesIndex = 0; kebapDishesIndex < kebapDishes.length; kebapDishesIndex++) {
        let kebapDish = kebapDishes[kebapDishesIndex];
        
        kebapContent.innerHTML += `
            <div class="dish">
                <img src="${kebapDish.image}" alt="Kalbs Kebap">
                <div>
                    <h3>${kebapDish.name}</h3>
                    <p>${kebapDish.description}</p>
                    <span class="price">${kebapDish.price.toFixed(2)} €</span>
                </div>
            </div>
            `
        }
}



renderKebapDishes()