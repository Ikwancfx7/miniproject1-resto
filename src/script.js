const menuButton = document.getElementById("menuButton");
const listMenu = document.getElementById("listMenu");
const xButton = document.getElementById("menuButtonX");

menuButton.addEventListener("click",function(){
    listMenu.classList.toggle('opacity-0');
    listMenu.classList.toggle('scale-y-0');
});

let cart = [];

    function addToCart(name, price) {
        cart.push({ name, price });
        updateCart();
        }

    function updateCart() {
        const cartItems = document.getElementById("cart-items");
        const cartCount = document.getElementById("cart-count");
        const cartTotal = document.getElementById("cart-total");
            
        cartItems.innerHTML = "";
        let total = 0;
            
        cart.forEach((item, index) => {
            total += item.price;
            cartItems.innerHTML += `
                <li class="flex justify-between bg-gray-200 p-2 rounded">
                    <span>${item.name}</span>
                    <button onclick="removeFromCart(${index})" class="text-red-500">❌</button>
                </li>
               `;
        });

            cartCount.innerText = cart.length;
            cartTotal.innerText = total.toLocaleString();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        function clearCart() {
            cart = [];
            updateCart();
        }

        function closeCart() {
            document.getElementById("cart-modal").classList.add("hidden");
        }

        function orderCart(){
            document.getElementById("cart-modal").classList.add("hidden")
        }

        document.getElementById("cart-button").addEventListener("click", () => {
            document.getElementById("cart-modal").classList.remove("hidden");
        });