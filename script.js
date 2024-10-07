// Handle Enter key press
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

function Search() {
  const form = document.getElementById('form');
  const container = document.getElementById('container');

  if (form.style.display === 'flex') {
    form.style.display = 'none';
  } else {
    form.style.display = 'flex';
    container.addEventListener('click', () => {
      form.style.display = 'none';
    });
  }
}
function searchProduct() {
  const productInput = document.getElementById('product').value.toLowerCase();
  const allProducts = document.querySelectorAll('#allProducts .child');
  const home = document.getElementById('banner');
  const about = document.getElementById('about');
  const category = document.getElementById('category');
  const item = document.getElementById('list-item');
  const list_btn = document.getElementById('list-btn');

  // Loop through all products
  allProducts.forEach(product => {
    const productName = product.querySelector('.menu-content h2').textContent.toLowerCase();

    // If the product name includes the search input, display it; otherwise, hide it
    if (productName.includes(productInput)) {
      product.style.display = 'flex';
      product.style.flexdirection = 'column';  // Show matching product
      home.style.display = 'none';
      about.style.display = 'none';
      category.style.display = 'none';
      item.style.display = 'none';
      list_btn.style.display = 'none';
    } else {
      product.style.display = 'none';   // Hide non-matching product
    }
  });
  // If no products match the query, you can add a message if needed
}
function filterMenuItems(searchTerm) {
  const items = document.querySelectorAll('.menu-card');
  items.forEach(item => {
      if (item.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
          gsap.to(item, { opacity: 1, duration: 0.5, display: 'block' });
      } else {
          gsap.to(item, { opacity: 0, duration: 0.5, display: 'none' });
      }
  });
}

// contact form js start
function Submit() {
  const input = document.getElementById('name');
  const email = document.getElementById('email');

  if (input.value === '') {
    alert('Please Fill the form before submitting');
  } else {
    alert('Form Has Been Submitted Successfully');
  }
}
// contact form js end

//add to cart start
function addTocart() {
  const cartmain = document.getElementById('cart-main');
  const cartbox = document.getElementById('cart-box');

  if (cartbox.style.display === 'flex') {
    cartbox.style.display = 'none';

  } else {
    cartbox.style.display = 'flex';
    container.addEventListener('click', () => {
      cartbox.style.display = 'none';
    });
  }
}
let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage if it exists

function Addtocart(event) {
  // Get the parent div of the button
  const parentDiv = event.target.closest(".child");

  // Extract the product details
  const imgSrc = parentDiv.querySelector("#item-img").src;
  const name = parentDiv.querySelector("#item-name").textContent;
  const price = parentDiv.querySelector("#item-price").textContent.replace('/-', '');

  // Check if the item already exists in the cart
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1; // Increase quantity
    existingItem.amount = existingItem.price * existingItem.quantity;
  } else {
    cart.push({
      imgSrc: imgSrc,
      name: name,
      price: parseFloat(price),
      quantity: 1,
      amount: parseFloat(price)
    });
  }

  // Save the updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Show the cart after adding the item
  showCart();
}

function showCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  const cartTotalDiv = document.getElementById("cart-total");

  cartItemsDiv.innerHTML = ''; // Clear existing items
  let totalAmount = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    totalAmount += itemTotal;

    cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <img src="${item.imgSrc}" alt="${item.name}">
                <p>${item.name}</p>
                <p>Price: <br> ₹${item.price}</p>
                <p> Quantity: <br>
                    <button onclick="changeQuantity('${item.name}', -1)" class="qty">-</button>
                    ${item.quantity}
                    <button onclick="changeQuantity('${item.name}', 1)" class="qty">+</button>
                </p>
                <p>Total:<br> ₹${itemTotal}</p>
                <button onclick="removeItem('${item.name}')" class="remove-btn">x</button>
            </div>
        `;
  });

  cartTotalDiv.innerHTML = `Total Amount: ₹${totalAmount}`;  
}

function changeQuantity(itemName, change) {
  const item = cart.find(i => i.name === itemName);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.name !== itemName); // Remove from cart if quantity is 0
    } else {
      item.amount = item.price * item.quantity; // Update item amount
    }
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    showCart(); // Update the cart display
  }
}

function removeItem(itemName) {
  cart = cart.filter(i => i.name !== itemName); // Remove the item from the cart
  // Save updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  showCart(); // Update the cart display
}
// On page load, display the cart items (if any)
window.onload = function () {
  showCart();
};
function buyNow() {
  // Save the cart to localStorage (in case it's not already saved)
  localStorage.setItem('cart', JSON.stringify(cart));

  // Redirect to buynow.html page
  window.location.href = 'buynow.html';
}
// add to cart end
function Hamburger(){
  const navbar = document.getElementById('nav-ham');
  const container = document.getElementById('container');
  if (navbar.style.display === 'flex') {
    navbar.style.display = 'none';
    
  } else {
    navbar.style.display = 'flex';
    container.addEventListener('click', () => {
      navbar.style.display = 'none';
  });
}
}
function filterMenu(category) {
  const allProducts = document.querySelectorAll('.menu .child');
  allProducts.forEach(product => {
      if (category === 'all') {
          product.style.display = 'block';
      } else {
          if (product.classList.contains(category)) {
              product.style.display = 'block';
          } else {
              product.style.display = 'none';
          }
      }
  });
}
const chatbotIcon = document.getElementById('chatbotIcon');
const chatbotContainer = document.getElementById('chatbotContainer');
const closeBtn = document.getElementById('closeBtn');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatbotMessages = document.getElementById('chatbotMessages');

// Show chatbot when icon is clicked
chatbotIcon.addEventListener('click', () => {
    chatbotContainer.style.display = 'flex';
    chatbotIcon.style.display = 'none';
});

// Close chatbot when close button is clicked
closeBtn.addEventListener('click', () => {
    chatbotContainer.style.display = 'none';
    chatbotIcon.style.display = 'flex';
});

// Send message
sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage) {
        displayMessage(userMessage, 'user');
        generateBotResponse(userMessage);
        userInput.value = ''; // Clear input
    }
});

// Display message (instant for user messages)
function displayMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(type === 'bot' ? 'bot-message' : 'user-message');
    if (type === 'bot') {
        messageDiv.innerHTML = '<span class="typing">...</span>'; // Show typing dots before bot replies
    } else {
        messageDiv.innerText = message;
    }
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Auto scroll
}

// Bot response
const prompts = {
    "hi": "Hello! How can I help you?",
    "menu": "Today's menu includes burgers, pizzas, and sandwiches.",
    "price": "The prices start from $10 for burgers and $12 for pizzas.",
    "time": "We are open from 10 AM to 10 PM every day.",
    "address": "Our address is 1234 Fast Food Street, Foodie City.",
    "reservation": "You can reserve a table by calling 123-456-7890.",
    "order": "To place an order, visit our order page or call us!",
    "bye": "Goodbye! Have a great day!",
    "thank you": "You're welcome! Feel free to ask more questions.",
    "special": "Our special today is a double cheeseburger!"
};

// Function to simulate typing letter by letter
function typeText(element, text) {
    let index = 0;
    const typingSpeed = 50; // Speed of typing in milliseconds

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }
    element.innerHTML = ''; // Clear typing dots
    type();
}

// Bot response with typing effect
function generateBotResponse(userMessage) {
    const botResponse = prompts[userMessage.toLowerCase()] || "Sorry, I didn't understand that. Please try a different prompt.";
    setTimeout(() => {
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('bot-message');
        chatbotMessages.appendChild(botMessageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Auto scroll
        typeText(botMessageDiv, botResponse); // Call typing effect
    }, 500); // Delay before starting typing effect
}
