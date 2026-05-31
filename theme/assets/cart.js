// Cart Drawer Functionality
const cartToggle = document.getElementById('CartToggle');
const cartDrawer = document.getElementById('CartDrawer');
const cartClose = document.getElementById('CartClose');
const cartOverlay = document.getElementById('CartOverlay');
const cartCount = document.getElementById('CartCount');
const checkoutBtn = document.getElementById('CheckoutBtn');

if (cartToggle) {
  cartToggle.addEventListener('click', (e) => {
    e.preventDefault();
    cartDrawer.classList.add('active');
    updateCart();
  });
}

if (cartClose) {
  cartClose.addEventListener('click', () => {
    cartDrawer.classList.remove('active');
  });
}

if (cartOverlay) {
  cartOverlay.addEventListener('click', () => {
    cartDrawer.classList.remove('active');
  });
}

// Add to Cart
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const productId = this.dataset.productId;
    const variantId = this.dataset.variantId;
    
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: variantId,
        quantity: 1
      })
    })
    .then(() => {
      updateCart();
      cartDrawer.classList.add('active');
      // Show success animation
      this.textContent = '✓ Añadido';
      setTimeout(() => {
        this.textContent = 'Añadir al carrito';
      }, 2000);
    })
    .catch(err => console.error(err));
  });
});

// Update Cart
function updateCart() {
  fetch('/cart.js')
    .then(res => res.json())
    .then(cart => {
      cartCount.textContent = cart.item_count;
      const cartItems = document.getElementById('CartItems');
      if (cartItems) {
        cartItems.innerHTML = cart.items.map(item => `
          <div class="cart-item" data-id="${item.id}">
            <img src="${item.featured_image.url}" alt="${item.title}">
            <div class="item-info">
              <h4>${item.title}</h4>
              <p>€${(item.price / 100).toFixed(2)}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑</button>
          </div>
        `).join('');
      }
      const total = document.getElementById('CartTotal');
      if (total) {
        total.textContent = `€${(cart.total_price / 100).toFixed(2)}`;
      }
    })
    .catch(err => console.error(err));
}

// Remove from Cart
function removeFromCart(itemId) {
  fetch('/cart/change.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: itemId,
      quantity: 0
    })
  })
  .then(() => updateCart())
  .catch(err => console.error(err));
}

// Checkout
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', () => {
    window.location.href = '/checkout';
  });
}

// Initialize
updateCart();