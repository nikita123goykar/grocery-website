function searchProduct() {

    let product = document
        .getElementById("product")
        .value
        .toLowerCase()
        .trim();

    let result = document.getElementById("result");


    const products = {

        "rice": {
            "D-Mart": { price: 45, offer: 10 },
            "Big Basket": { price: 47, offer: 15 },
            "Amazon": { price: 44, offer: 5 }
        },

        "sugar": {
            "D-Mart": { price: 51, offer: 5 },
            "Big Basket": { price: 53, offer: 10 },
            "Amazon": { price: 50, offer: 5 }
        },

        "milk": {
            "D-Mart": { price: 61, offer: 10 },
            "Big Basket": { price: 63, offer: 5 },
            "Amazon": { price: 60, offer: 8 }
        },

        "oil": {
            "D-Mart": { price: 189, offer: 10 },
            "Big Basket": { price: 192, offer: 15 },
            "Amazon": { price: 187, offer: 5 }
        },

        "wheat": {
            "D-Mart": { price: 31, offer: 5 },
            "Big Basket": { price: 33, offer: 10 },
            "Amazon": { price: 30, offer: 5 }
        },

        "atta": {
            "D-Mart": { price: 37, offer: 10 },
            "Big Basket": { price: 39, offer: 5 },
            "Amazon": { price: 36, offer: 8 }
        },

        "poha": {
            "D-Mart": { price: 55, offer: 10 },
            "Big Basket": { price: 58, offer: 15 },
            "Amazon": { price: 53, offer: 5 }
        },

        "toor dal": {
            "D-Mart": { price: 123, offer: 10 },
            "Big Basket": { price: 126, offer: 15 },
            "Amazon": { price: 121, offer: 5 }
        },

        "moong dal": {
            "D-Mart": { price: 112, offer: 5 },
            "Big Basket": { price: 115, offer: 10 },
            "Amazon": { price: 110, offer: 8 }
        },

        "masoor dal": {
            "D-Mart": { price: 90, offer: 10 },
            "Big Basket": { price: 93, offer: 5 },
            "Amazon": { price: 88, offer: 15 }
        },

        "chana dal": {
            "D-Mart": { price: 87, offer: 5 },
            "Big Basket": { price: 90, offer: 10 },
            "Amazon": { price: 85, offer: 8 }
        },

        "salt": {
            "D-Mart": { price: 22, offer: 5 },
            "Big Basket": { price: 24, offer: 10 },
            "Amazon": { price: 21, offer: 5 }
        },

        "tea": {
            "D-Mart": { price: 275, offer: 10 },
            "Big Basket": { price: 285, offer: 15 },
            "Amazon": { price: 270, offer: 5 }
        },

        "coffee": {
            "D-Mart": { price: 240, offer: 10 },
            "Big Basket": { price: 250, offer: 15 },
            "Amazon": { price: 235, offer: 5 }
        },

        "bread": {
            "D-Mart": { price: 40, offer: 5 },
            "Big Basket": { price: 42, offer: 10 },
            "Amazon": { price: 38, offer: 5 }
        },

        "biscuits": {
            "D-Mart": { price: 30, offer: 10 },
            "Big Basket": { price: 32, offer: 15 },
            "Amazon": { price: 28, offer: 5 }
        },

        "noodles": {
            "D-Mart": { price: 50, offer: 10 },
            "Big Basket": { price: 52, offer: 15 },
            "Amazon": { price: 48, offer: 5 }
        },

        "chips": {
            "D-Mart": { price: 20, offer: 5 },
            "Big Basket": { price: 22, offer: 10 },
            "Amazon": { price: 19, offer: 5 }
        },

        "bath soap": {
            "D-Mart": { price: 38, offer: 10 },
            "Big Basket": { price: 40, offer: 15 },
            "Amazon": { price: 36, offer: 5 }
        },

        "shampoo": {
            "D-Mart": { price: 180, offer: 10 },
            "Big Basket": { price: 190, offer: 15 },
            "Amazon": { price: 175, offer: 5 }
        },

        "toothpaste": {
            "D-Mart": { price: 100, offer: 5 },
            "Big Basket": { price: 105, offer: 10 },
            "Amazon": { price: 98, offer: 15 }
        },

        "toothbrush": {
            "D-Mart": { price: 55, offer: 10 },
            "Big Basket": { price: 60, offer: 15 },
            "Amazon": { price: 52, offer: 5 }
        },

        "handwash": {
            "D-Mart": { price: 95, offer: 10 },
            "Big Basket": { price: 100, offer: 15 },
            "Amazon": { price: 92, offer: 5 }
        },

        "detergent powder": {
            "D-Mart": { price: 220, offer: 10 },
            "Big Basket": { price: 230, offer: 15 },
            "Amazon": { price: 215, offer: 5 }
        },

        "dishwash liquid": {
            "D-Mart": { price: 120, offer: 5 },
            "Big Basket": { price: 125, offer: 10 },
            "Amazon": { price: 115, offer: 15 }
        },

        "floor cleaner": {
            "D-Mart": { price: 150, offer: 10 },
            "Big Basket": { price: 160, offer: 15 },
            "Amazon": { price: 145, offer: 5 }
        },

        "toilet cleaner": {
            "D-Mart": { price: 110, offer: 5 },
            "Big Basket": { price: 115, offer: 10 },
            "Amazon": { price: 105, offer: 15 }
        },

        "eggs": {
            "D-Mart": { price: 85, offer: 10 },
            "Big Basket": { price: 88, offer: 15 },
            "Amazon": { price: 82, offer: 5 }
        },

        "potato": {
            "D-Mart": { price: 23, offer: 5 },
            "Big Basket": { price: 25, offer: 10 },
            "Amazon": { price: 22, offer: 5 }
        },

        "onion": {
            "D-Mart": { price: 36, offer: 10 },
            "Big Basket": { price: 39, offer: 15 },
            "Amazon": { price: 34, offer: 5 }
        },

        "tomato": {
            "D-Mart": { price: 39, offer: 5 },
            "Big Basket": { price: 42, offer: 10 },
            "Amazon": { price: 37, offer: 15 }
        },

        "ginger": {
            "D-Mart": { price: 38, offer: 10 },
            "Big Basket": { price: 42, offer: 15 },
            "Amazon": { price: 36, offer: 5 }
        },

        "garlic": {
            "D-Mart": { price: 44, offer: 5 },
            "Big Basket": { price: 47, offer: 10 },
            "Amazon": { price: 42, offer: 15 }
        }

    };


    if (product === "") {

        result.innerHTML =
            "<h3>⚠️ Please enter a product name.</h3>";

        return;
    }


    if (products[product]) {

        let data = products[product];


        let dmart =
            data["D-Mart"].price -
            (data["D-Mart"].price *
            data["D-Mart"].offer / 100);


        let bigbasket =
            data["Big Basket"].price -
            (data["Big Basket"].price *
            data["Big Basket"].offer / 100);


        let amazon =
            data["Amazon"].price -
            (data["Amazon"].price *
            data["Amazon"].offer / 100);


        let lowestPrice =
            Math.min(dmart, bigbasket, amazon);


        let lowestStore;


        if (lowestPrice === dmart) {

            lowestStore = "D-Mart";

        }
        else if (lowestPrice === bigbasket) {

            lowestStore = "Big Basket";

        }
        else {

            lowestStore = "Amazon";

        }


        result.innerHTML = `

            <h2>
                🛒 ${product.toUpperCase()} Price Comparison
            </h2>


            <table>

                <tr>

                    <th>Store</th>

                    <th>Original Price</th>

                    <th>Offer</th>

                    <th>Final Price</th>

                </tr>


                <tr>

                    <td>🛒 D-Mart</td>

                    <td>
                        ₹${data["D-Mart"].price}
                    </td>

                    <td>
                        🔥 ${data["D-Mart"].offer}% OFF
                    </td>

                    <td>
                        ₹${dmart.toFixed(2)}
                    </td>

                </tr>


                <tr>

                    <td>🛍️ Big Basket</td>

                    <td>
                        ₹${data["Big Basket"].price}
                    </td>

                    <td>
                        🔥 ${data["Big Basket"].offer}% OFF
                    </td>

                    <td>
                        ₹${bigbasket.toFixed(2)}
                    </td>

                </tr>


                <tr>

                    <td>📦 Amazon</td>

                    <td>
                        ₹${data["Amazon"].price}
                    </td>

                    <td>
                        🔥 ${data["Amazon"].offer}% OFF
                    </td>

                    <td>
                        ₹${amazon.toFixed(2)}
                    </td>

                </tr>

            </table>


            <h3>

                🏆 BEST DEAL:
                ₹${lowestPrice.toFixed(2)}
                (${lowestStore})

            </h3>


            <p>

                <b>🤖 AI Recommendation:</b>

                Buy from
                <b>${lowestStore}</b>
                to save money after applying the offer.

            </p>

        `;

    }


    else {

        result.innerHTML = `

            <h2>❌ Product Not Found!</h2>

            <p>
                Please enter a valid product name.
            </p>

            <p>
                Example: Rice, Sugar, Milk, Oil
            </p>

        `;

    }

}
