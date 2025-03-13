var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";

function parsePrices(services) {
    return Object.values(services).map(price => parseInt(price));
}

var serviceMethods = {
    price: function() {
        return parsePrices(services).reduce((sum, price) => sum + price, 0) + " грн";
    },
    minPrice: function() {
        return Math.min(...parsePrices(services)) + " грн";
    },
    maxPrice: function() {
        return Math.max(...parsePrices(services)) + " грн";
    }
};

console.log("Загальна вартість: ", serviceMethods.price());
console.log("Мінімальна ціна: ", serviceMethods.minPrice());
console.log("Максимальна ціна: ", serviceMethods.maxPrice());
