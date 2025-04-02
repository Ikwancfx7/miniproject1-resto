// Script untuk navigation bar
const menuButton = document.getElementById("menuButton");
const listMenu = document.getElementById("listMenu");
const xButton = document.getElementById("menuButtonX");

menuButton.addEventListener("click",function(){
    listMenu.classList.toggle('opacity-0');
    listMenu.classList.toggle('scale-y-0');
});

// script untuk halaman Reeservation
function showBookingPopUp(event){
    event.preventDefault();
    document.getElementById("booking-success").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("booking-form").reset(); 
    }, 2000);
}
function closeBookingPopUp(){
    document.getElementById("booking-success").classList.add("hidden");

    location.reload();
}

// Script untuk halaman Order Online
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
    let orderButton = document.getElementById("order-click");
    orderButton.setAttribute("aria-disabled","true");
    orderButton.classList.remove("cursor-pointer");
}

function closeCart() {
    document.getElementById("cart-modal").classList.add("hidden");
    location.reload();
}

function orderCart(){
    document.getElementById("cart-modal").classList.add("hidden");
    document.getElementById("success-modal").classList.toggle("hidden");
    clearCart();
}

function closeSuccessModal(){
    document.getElementById("success-modal").classList.add("hidden");
}        

document.getElementById("cart-button").addEventListener("click", () => {
    document.getElementById("cart-modal").classList.remove("hidden");
    let orderButton = document.getElementById("order-click");
    if(cart.length > 0){
        orderButton.setAttribute("aria-disabled","false");
        orderButton.classList.add("hover:bg-green-500");
    }else{
        orderButton.setAttribute("aria-disabled","true");
        orderButton.classList.remove("cursor-pointer");
    }
});        

function checkFormReservation(){
    let nama = document.getElementById("nama").value.trim();
    let telepon = document.getElementById("telepon").value.trim();
    let jumlah = document.getElementById("jumlah").value.trim();
    let tanggal = document.getElementById("tanggal").value.trim();
    let waktu = document.getElementById("waktu").value.trim();
    let bookingBtn = document.getElementById("booking-btn");

    if(nama !== "" &&telepon !== "" && jumlah !== "" && tanggal !== "" && waktu !== ""){
        bookingBtn.setAttribute("aria-disabled","false");
        bookingBtn.classList.add("hover:bg-orange-500");
    }
    else{
        bookingBtn.setAttribute("aria-disabled","true");
    };
}
