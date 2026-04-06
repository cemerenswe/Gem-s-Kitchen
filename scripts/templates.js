function dishTemplate(dish, index) {
    return `
            <div class="dish">
                <img class="dish-img" src="${dish.image}">
                <div>
                    <h3>${dish.name}</h3>
                    <p>${dish.description}</p>
                    <span class="price">${dish.price.toFixed(2)} €</span>
                    <a>
                        <img class="add-basket"
                        src="./assets/icons/plus-sign.png" alt="add to basket"
                        onclick="addToBasket(${index}, '${dish.name}',${dish.price})">
                    </a>
                </div>
            </div>
            `
        
}