# Google Analytics 4 Setup

## Installation ID
```
G-XXXXXXXXXX
```

## Key Events to Track

### eCommerce Events
- `view_item` - Cuando el usuario ve un producto
- `add_to_cart` - Cuando añade producto al carrito
- `view_cart` - Cuando abre el carrito
- `begin_checkout` - Cuando inicia el checkout
- `purchase` - Cuando completa la compra

### Custom Events
- `newsletter_signup` - Cuando se suscribe al newsletter
- `search` - Búsquedas en la tienda
- `filter_products` - Cuando filtra productos

## Conversion Tracking

### Primary Conversions
1. **Purchase** - Venta completada
2. **Newsletter Signup** - Suscripción a email
3. **Add to Cart** - Interés en producto

## Implementation

Ya incluido en `theme.liquid`:
```liquid
<script async src="https://www.googletagmanager.com/gtag/js?id={{ settings.ga4_id }}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '{{ settings.ga4_id }}');
</script>
```

## Reports to Monitor

1. **Audience** - Usuarios únicos, países, dispositivos
2. **Acquisition** - Fuentes de tráfico
3. **Engagement** - Tiempo en sitio, bounce rate
4. **Monetization** - Conversiones, ingresos
5. **Retention** - Usuarios recurrentes