# Meta Pixel (Facebook/Instagram) Setup

## Pixel ID
```
123456789012345
```

## Key Events

### Standard Events
- `PageView` - Cada página visitada
- `ViewContent` - Visualización de producto
- `AddToCart` - Producto añadido al carrito
- `InitiateCheckout` - Inicio de checkout
- `AddPaymentInfo` - Info de pago añadida
- `Purchase` - Compra completada
- `CompleteRegistration` - Newsletter signup

## Implementation

Ya incluido en `theme.liquid`:
```html
<script>
  !function(f,b,e,v,n,t,s){
    if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '{{ settings.meta_pixel_id }}');
  fbq('track', 'PageView');
</script>
```

## Audiences to Create

1. **Website Visitors** - Todos los visitantes
2. **Add to Cart** - Usuarios que añadieron productos
3. **Abandoned Cart** - Usuarios sin compra
4. **Purchasers** - Clientes que compraron
5. **High Value** - Compras > €100

## Ad Campaigns

1. **Awareness** - Alcance a nuevos usuarios
2. **Engagement** - Engagement con website
3. **Conversion** - Retargeting a cart abandoners
4. **Retention** - Clientes anteriores