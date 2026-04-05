function dishTemplate(dish, index) {
    return `
            <div class="dish">
                <img src="${dish.image}" alt="Kalbs Kebap">
                <div>
                    <h3>${dish.name}</h3>
                    <p>${dish.description}</p>
                    <span class="price">${dish.price.toFixed(2)} €</span>
                    <button class="add-basket" onclick="addToBasket(${index}]">+</button>
                </div>
            </div>
            `
        
}