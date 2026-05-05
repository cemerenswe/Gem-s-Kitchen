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

let sideDishes = [
    {
        "name": "Pommes Frites",
        "description": "Knusprig goldene Pommes, frisch frittiert und leicht gesalzen.",
        "price": 3.50,
        "image": "./assets/img/pommes.jpg"
    },
    {
        "name": "Reis",
        "description": "Locker gekochter Basmatireis, perfekt als Beilage.",
        "price": 2.90,
        "image": "./assets/img/reis.jpg"
    },
    {
        "name": "Gemischter Salat",
        "description": "Frischer Salat mit Tomaten, Gurken und Hausdressing.",
        "price": 4.20,
        "image": "./assets/img/salat.jpg"
    },
    {
        "name": "Ofenkartoffeln",
        "description": "Würzige Kartoffelspalten aus dem Ofen mit Kräutern.",
        "price": 3.80,
        "image": "./assets/img/ofenkartoffel.jpg"
    }
]

let basket = []

function renderDishes(id, dishesObj) {
    let dishContainer = document.getElementById(id);
    dishContainer.innerHTML = "";

    dishesObj.forEach((dish, index) => {
        dishContainer.innerHTML += dishTemplate(dish, index)
    });
}

function addToBasket(index, name, price) {
    let existingItem = basket.find(item => item.name === name);

    if (existingItem) {
        existingItem.amount++;
    } else {
        basket.push({
            name: name,
            price: price,
            amount: 1
        });
    }
    updateAll();
}

function openDialog(){
    let dialog = document.getElementById("basket-dialog");

    if (!dialog.open) {
        dialog.showModal();
    }
}

function closeDialog() {
    const dialog = document.getElementById("basket-dialog");

        dialog.close();
}

function renderBasket(){
    let basketContainer = document.getElementById('basket-container');

    basketContainer.innerHTML = "";

    basket.forEach((item, basketIndex) => {

        let buttonLeft;

        if (item.amount === 1) {
            buttonLeft = `
                <img src="./assets/icons/delete.png"
                     onclick="amountDown(${basketIndex})"
                     class="basket-btn">
            `;
        } else {
            buttonLeft = `
                <button onclick="amountDown(${basketIndex})"
                        class="basket-btn">
                    -
                </button>
            `;
        }

        basketContainer.innerHTML += `
            <div class="layout-dialog">
                <div>${item.name} - ${(item.price * item.amount).toFixed(2)} € </div>

                <div>${buttonLeft}

                ${item.amount}

                <button onclick="amountUp(${basketIndex})"
                class="basket-btn">
                +
                </button></div>
            </div>
        `
    })

    let prices = calculateTotal();

    basketContainer.innerHTML += `
        <div class="price-summary">
            <div>Zwischensumme: ${prices.subtotal.toFixed(2)} €</div>
            <div>Lieferkosten: ${prices.deliveryFee.toFixed(2)} €</div>
            <div class="total-price">Gesamt: ${prices.total.toFixed(2)} €</div>
        </div>
    `;
}

function amountUp(basketIndex){
    basket[basketIndex].amount++;
    updateAll();
}

function amountDown(basketIndex){
    if (basket[basketIndex].amount > 1) {
        basket[basketIndex].amount--;
    } else {
        basket.splice(basketIndex, 1);
    }
    updateAll();
}

function getAmountFromBasket(name){
    let item = basket.find(item => item.name === name);
    
    if (item) {
        return item.amount;
    } else {
        return 0;
    }
}

function amountUpByName(name) {
    let item = basket.find(item => item.name === name);
    if (item) {
        item.amount++;
    }
    updateAll();
}

function amountDownByName(name) {
    let index = basket.findIndex(item => item.name === name);

    if (basket[index].amount > 1) {
        basket[index].amount--;
    } else {
        basket.splice(index, 1);
    }

    updateAll();
}

function updateAll() {
    renderBasket();
    renderDishes("kebap-dishes", kebapDishes);
    renderDishes("dürüm-dishes", dueruemDishes);
    renderDishes("side-dishes", sideDishes);
}

function calculateTotal() {
    let subtotal = basket.reduce((sum, item) => {
        return sum + item.price * item.amount;
    }, 0);

    let deliveryFee = subtotal > 0 ? 2.50 : 0; // nur wenn etwas im Warenkorb

    let total = subtotal + deliveryFee;

    return {
        subtotal: subtotal,
        deliveryFee: deliveryFee,
        total: total
    };
}

function showOrderPopup() {
    let popup = document.getElementById("order-popup");

    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 2000);
}

function closePopup() {
    let popup = document.getElementById("order-popup");
    popup.classList.remove("show");
}

renderDishes("kebap-dishes", kebapDishes);
renderDishes("dürüm-dishes", dueruemDishes);
renderDishes("side-dishes", sideDishes);

document.getElementById("close-btn").addEventListener("click", closeDialog);
document.getElementById("order-btn").addEventListener("click", () => {
    if (basket.length === 0) {
        alert("Dein Warenkorb ist leer!");
    } else {
        closeDialog();
        showOrderPopup();

        basket = [];
        updateAll();
    }
});

