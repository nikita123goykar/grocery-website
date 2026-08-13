function searchProduct() {

    let product = document.getElementById("product").value.toLowerCase().trim();
    let result = document.getElementById("result");

    const products = {

        "rice": {
            "D-Mart": 45,
            "Big Basket": 47,
            "Amazon": 44
        },

        "sugar": {
            "D-Mart": 51,
            "Big Basket": 53,
            "Amazon": 50
        },

        "milk": {
            "D-Mart": 61,
            "Big Basket": 63,
            "Amazon": 60
        },

        "oil": {
            "D-Mart": 189,
            "Big Basket": 192,
            "Amazon": 187
        },

        "wheat": {
            "D-Mart": 31,
            "Big Basket": 33,
            "Amazon": 30
        },

        "atta": {
            "D-Mart": 37,
            "Big Basket": 39,
            "Amazon": 36
        },

        "poha": {
            "D-Mart": 55,
            "Big Basket": 58,
            "Amazon": 53
        },

        "toor dal": {
            "D-Mart": 123,
            "Big Basket": 126,
            "Amazon": 121
        },

        "moong dal": {
            "D-Mart": 112,
            "Big Basket": 115,
            "Amazon": 110
        },

        "masoor dal": {
            "D-Mart": 90,
            "Big Basket": 93,
            "Amazon": 88
        },

        "chana dal": {
            "D-Mart": 87,
            "Big Basket": 90,
            "Amazon": 85
        },

        "salt": {
            "D-Mart": 22,
            "Big Basket": 24,
            "Amazon": 21
        },

        "tea": {
            "D-Mart": 275,
            "Big Basket": 285,
            "Amazon": 270
        },

        "coffee": {
            "D-Mart": 240,
            "Big Basket": 250,
            "Amazon": 235
        },

        "bread": {
            "D-Mart": 40,
            "Big Basket": 42,
            "Amazon": 38
        },

        "biscuits": {
            "D-Mart": 30,
            "Big Basket": 32,
            "Amazon": 28
        },

        "noodles": {
            "D-Mart": 50,
            "Big Basket": 52,
            "Amazon": 48
        },

        "chips": {
            "D-Mart": 20,
            "Big Basket": 22,
            "Amazon": 19
        },

        "bath soap": {
            "D-Mart": 38,
            "Big Basket": 40,
            "Amazon": 36
        },

        "shampoo": {
            "D-Mart": 180,
            "Big Basket": 190,
            "Amazon": 175
        },

        "toothpaste": {
            "D-Mart": 100,
            "Big Basket": 105,
            "Amazon": 98
        },

        "toothbrush": {
            "D-Mart": 55,
            "Big Basket": 60,
            "Amazon": 52
        },

        "handwash": {
            "D-Mart": 95,
            "Big Basket": 100,
            "Amazon": 92
        },

        "detergent powder": {
            "D-Mart": 220,
            "Big Basket": 230,
            "Amazon": 215
        },

        "dishwash liquid": {
            "D-Mart": 120,
            "Big Basket": 125,
            "Amazon": 115
        },

        "floor cleaner": {
            "D-Mart": 150,
            "Big Basket": 160,
            "Amazon": 145
        },

        "toilet cleaner": {
            "D-Mart": 110,
            "Big Basket": 115,
            "Amazon": 105
        },

        "eggs": {
            "D-Mart": 85,
            "Big Basket": 88,
            "Amazon": 82
        },

        "potato": {
            "D-Mart": 23,
            "Big Basket": 25,
            "Amazon": 22
        },

        "onion": {
            "D-Mart": 36,
            "Big Basket": 39,
            "Amazon": 34
        },

        "tomato": {
            "D-Mart": 39,
            "Big Basket": 42,
            "Amazon": 37
        },

        "ginger": {
            "D-Mart": 38,
            "Big Basket": 42,
            "Amazon": 36
        },

        "garlic": {
            "D-Mart": 44,
            "Big Basket": 47,
            "Amazon": 42
        }
    };


    if (product === "") {

        result.innerHTML =
            "<h3>Please enter a product name.</h3>";

    }

    else if (products[product]) {

        let prices = products[product];

        let lowestPrice = Math.min(
            prices["D-Mart"],
            prices["Big Basket"],
            prices["Amazon"]
        );

        let lowestStore = "";

        if (lowestPrice === prices["D-Mart"]) {
            lowestStore = "D-Mart";
        }
        else if (lowestPrice === prices["Big Basket"]) {
            lowestStore = "Big Basket";
        }
        else {
            lowestStore = "Amazon";
        }

        result.innerHTML =
            "<h2>" + product.toUpperCase() +
            " Price Comparison</h2>" +

            "<table>" +
            "<tr><th>Store</th><th>Price</th></tr>" +

            "<tr><td>D-Mart</td><td>₹" +
            prices["D-Mart"] + "</td></tr>" +

            "<tr><td>Big Basket</td><td>₹" +
            prices["Big Basket"] + "</td></tr>" +

            "<tr><td>Amazon</td><td>₹" +
            prices["Amazon"] + "</td></tr>" +

            "</table>" +

            "<h3>Lowest Price: ₹" +
            lowestPrice + " (" +
            lowestStore + ")</h3>" +

            "<p><b>AI Recommendation:</b> " +
            "Buy from " + lowestStore +
            " to save money.</p>";

    }

    else {

        result.innerHTML =
            "<h2>❌ Product Not Found!</h2>" +
            "<p>Please enter a valid product name.</p>";
    }
}
