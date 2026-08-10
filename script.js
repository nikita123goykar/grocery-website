function searchProduct() {

    let product = document.getElementById("product").value.toLowerCase();
    let result = document.getElementById("result");

    if (product == "") {
        result.innerHTML = "<h3>Please enter a product name.</h3>";
    }

    else if (product == "rice") {
        result.innerHTML =
        "<h2>🌾 Rice Price Comparison</h2>" +
        "<table>" +
        "<tr><th>Store</th><th>Price</th></tr>" +
        "<tr><td>D-Mart</td><td>₹50</td></tr>" +
        "<tr><td>Big Basket</td><td>₹55</td></tr>" +
        "<tr><td>Amazon</td><td>₹48</td></tr>" +
        "</table>" +
        "<h3>✅ Lowest Price: ₹48 (Amazon)</h3>" +
        "<p><b>🤖 AI Recommendation:</b> Buy from Amazon to save money.</p>";
    }

    else if (product == "sugar") {
        result.innerHTML =
        "<h2>🍬 Sugar Price Comparison</h2>" +
        "<table>" +
        "<tr><th>Store</th><th>Price</th></tr>" +
        "<tr><td>D-Mart</td><td>₹45</td></tr>" +
        "<tr><td>Big Basket</td><td>₹48</td></tr>" +
        "<tr><td>Amazon</td><td>₹43</td></tr>" +
        "</table>" +
        "<h3>✅ Lowest Price: ₹43 (Amazon)</h3>" +
        "<p><b>🤖 AI Recommendation:</b> Buy from Amazon to save money.</p>";
    }

    else if (product == "milk") {
        result.innerHTML =
        "<h2>🥛 Milk Price Comparison</h2>" +
        "<table>" +
        "<tr><th>Store</th><th>Price</th></tr>" +
        "<tr><td>D-Mart</td><td>₹30</td></tr>" +
        "<tr><td>Big Basket</td><td>₹32</td></tr>" +
        "<tr><td>Amazon</td><td>₹29</td></tr>" +
        "</table>" +
        "<h3>✅ Lowest Price: ₹29 (Amazon)</h3>" +
        "<p><b>🤖 AI Recommendation:</b> Buy from Amazon to save money.</p>";
    }

    else if (product == "oil") {
        result.innerHTML =
        "<h2>🫒 Oil Price Comparison</h2>" +
        "<table>" +
        "<tr><th>Store</th><th>Price</th></tr>" +
        "<tr><td>D-Mart</td><td>₹120</td></tr>" +
        "<tr><td>Big Basket</td><td>₹125</td></tr>" +
        "<tr><td>Amazon</td><td>₹118</td></tr>" +
        "</table>" +
        "<h3>✅ Lowest Price: ₹118 (Amazon)</h3>" +
        "<p><b>🤖 AI Recommendation:</b> Buy from Amazon to save money.</p>";
    }

    else {
        result.innerHTML =
        "<h2>❌ Product not found!</h2>" +
        "<p>Please enter: Rice, Sugar, Milk or Oil.</p>";
    }
}