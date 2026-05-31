// Track PageView
if (window.gtag) {
  gtag('event', 'page_view');
}

if (window.fbq) {
  fbq('track', 'PageView');
}

// Track clicks
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('add-to-cart')) {
    const productName = e.target.closest('.product-card')?.querySelector('.product-title')?.textContent;
    const price = e.target.closest('.product-card')?.querySelector('.product-price')?.textContent;
    
    // GA4
    if (window.gtag) {
      gtag('event', 'add_to_cart', {
        items: [{
          item_name: productName,
          price: price
        }]
      });
    }
    
    // Meta Pixel
    if (window.fbq) {
      fbq('track', 'AddToCart');
    }
  }
});

// Newsletter signup
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    if (window.gtag) {
      gtag('event', 'sign_up');
    }
  });
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}