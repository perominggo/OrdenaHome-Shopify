const cartToggle = document.getElementById('CartToggle');
const cartDrawer = document.getElementById('CartDrawer');
const cartClose = document.getElementById('CartClose');
const cartCount = document.getElementById('CartCount');

if (cartToggle) {
  cartToggle.addEventListener('click', () => {
    cartDrawer.classList.add('active');
  });
}

if (cartClose) {
  cartClose.addEventListener('click', () => {
    cartDrawer.classList.remove('active');
  });
}

document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const variantId = this.dataset.variantId;
    
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: variantId, quantity: 1})
    })
    .then(() => {
      cartDrawer.classList.add('active');
      this.textContent = '✓ Añadido';
      setTimeout(() => {this.textContent = 'Añadir al carrito';}, 2000);
    })
    .catch(err => console.error(err));
  });
});