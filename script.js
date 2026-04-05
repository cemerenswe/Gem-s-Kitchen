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

let dueruemDishes = [
    {
        "name": "Dürüm Kalb",
        "description": "Dürüm mit 200gr. Kalbfleisch, frischem Gemüse und hausgemachtem Fladenbrot",
        "price": 6.20,
        "image": "./assets/img/dueruem-kalb.png"
    },
    {
        "name": "Dürüm Huhn",
        "description": "Saftiger Hühnerdürüm (200gr.) mit knackigem Salat und Sauce nach Wahl",
        "price": 6.20,
        "image": "./assets/img/dueruem-huhn.png"
    },
    {
        "name": "Adana Dürüm",
        "description": "Würziger Adana-Spieß im Dürüm mit frischem Gemüse und orientalischen Gewürzen",
        "price": 7.00,
        "image": "./assets/img/adana-dueruem.png"
    },
    {
        "name": "Spezial Dürüm",
        "description": "Großer Dürüm mit Kalbfleisch, extra Zutaten und hausgemachter Sauce",
        "price": 8.00,
        "image": "./assets/img/dueruem-spezial.png"
    }
]

function renderDishes(id, dishesObj) {
    let dishContainer = document.getElementById(id);
    dishContainer.innerHTML = "";

    dishesObj.forEach((dish, index) => {
        dishContainer.innerHTML += dishTemplate(dish, index)
    });
}

renderDishes("kebap-dishes", kebapDishes);
renderDishes("dürüm-dishes", dueruemDishes);

