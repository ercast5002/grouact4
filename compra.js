document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartView();

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let product = {
                name: this.getAttribute("data-name"),
                price: parseFloat(this.getAttribute("data-price"))
            };

            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartView();
        });
    });

    function updateCartView() {
        document.getElementById("cart-count").innerText = cart.length;
        let cartItems = document.getElementById("cart-items");
        cartItems.innerHTML = "";

        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerHTML = `${item.name} - $${item.price} 
                <button class="delete-btn" onclick="removeFromCart(${index})">❌</button>`;
            cartItems.appendChild(li);
        });

        updateTotal();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartView();
    }

    function updateTotal() {
        let total = cart.reduce((sum, item) => sum + item.price, 0);
        document.getElementById("total").innerText = `Total: $${total.toFixed(2)}`;
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartView();

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let product = {
                name: this.getAttribute("data-name"),
                price: parseFloat(this.getAttribute("data-price"))
            };

            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartView();
        });
    });

    function updateCartView() {
        document.getElementById("cart-count").innerText = cart.length;
        let cartItems = document.getElementById("cart-items");
        cartItems.innerHTML = "";

        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerHTML = `${item.name} - $${item.price} 
                <button class="delete-btn" onclick="removeFromCart(${index})">❌</button>`;
            cartItems.appendChild(li);
        });

        updateTotal();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartView();
    }

    function updateTotal() {
        let total = cart.reduce((sum, item) => sum + item.price, 0);
        document.getElementById("total").innerText = `Total: $${total.toFixed(2)}`;
    }

    document.querySelector(".checkout-btn").addEventListener("click", function () {
        if (cart.length > 0) {
            alert("Gracias por tu compra! 🛍️ Los detalles de tu pedido serán enviados a tu correo.");
            localStorage.removeItem("cart");
            location.reload();
        } else {
            alert("Tu carrito está vacío.");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartView();

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let product = {
                name: this.getAttribute("data-name"),
                price: parseFloat(this.getAttribute("data-price"))
            };

            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartView();
            alert(`✅ Producto agregado: ${product.name}`);
        });
    });

    function updateCartView() {
        document.getElementById("cart-count").innerText = cart.length;
        let cartItems = document.getElementById("cart-items");
        if (!cartItems) return;

        cartItems.innerHTML = "";
        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerHTML = `${item.name} - $${item.price} 
                <button class="delete-btn" onclick="removeFromCart(${index})">❌</button>`;
            cartItems.appendChild(li);
        });

        updateTotal();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartView();
    }

    function updateTotal() {
        let total = cart.reduce((sum, item) => sum + item.price, 0);
        let totalElement = document.getElementById("total");
        if (totalElement) {
            totalElement.innerText = `Total: $${total.toFixed(2)}`;
        }
    }

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("checkout-btn")) {
            if (cart.length > 0) {
                alert("✅ Compra finalizada. Recibirás un correo con los detalles.");
                localStorage.removeItem("cart");
                location.reload();
            } else {
                alert("🚨 Tu carrito está vacío.");
            }
        }
    });
});
