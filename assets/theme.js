if (window.gtag) {
  gtag('event', 'page_view');
}

if (window.fbq) {
  fbq('track', 'PageView');
}

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('add-to-cart')) {
    if (window.gtag) {
      gtag('event', 'add_to_cart');
    }
    if (window.fbq) {
      fbq('track', 'AddToCart');
    }
  }
});