function dishTemplate(dish, index) {
    let amount = getAmountFromBasket(dish.name);

    let controls = "";

    if (amount > 0) {

        let leftButton;

        if (amount === 1) {
            leftButton = `
                <img src="./assets/icons/delete.png"
                     onclick="amountDownByName('${dish.name}')"
                     class="basket-btn">
            `;
        } else {
            leftButton = `
                <button onclick="amountDownByName('${dish.name}')"
                        class="basket-btn">
                    -
                </button>
            `;
        }

        controls = `
            <div class="amount-controls">
                ${leftButton}
                <span>${amount}</span>
                <button onclick="amountUpByName('${dish.name}')"
                        class="basket-btn">
                    +
                </button>
            </div>
        `;

    } else {
        controls = `
            <img class="add-basket"
                 src="./assets/icons/plus-sign.png"
                 alt="add to basket"
                 onclick="addToBasket(${index}, '${dish.name}', ${dish.price})">
        `;
    }

    return `
        <div class="dish">
            <img class="dish-img" src="${dish.image}">
            <div>
                <h3>${dish.name}</h3>
                <p>${dish.description}</p>
                <span class="price">${dish.price.toFixed(2)} €</span>
                ${controls}
            </div>
        </div>
    `;
}