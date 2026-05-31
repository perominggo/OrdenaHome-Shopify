# TikTok Pixel Setup

## Pixel ID
```
12345ABCD
```

## Key Events

- `PageView` - Página visitada
- `ViewContent` - Visualización de producto
- `AddToCart` - Producto añadido
- `Purchase` - Compra realizada
- `PlaceAnOrder` - Orden confirmada

## Implementation

Ya incluido en `theme.liquid`:
```html
<script>
  !function (w, d, t) {
    w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
    ttq.methods=['track','trackEvent','trackPage','trackIdentity','trackPay'];
    ttq.setAndDefer=function(t,e){t[e]=t[e]||[],t[e].push(arguments)};
    for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
    ttq.instance={};for(var o=0;o<ttq.methods.length;o++)ttq.setAndDefer(ttq.instance,ttq.methods[o]);
    ttq.load=function(e,t){
      var a=document.createElement('script');
      a.type='text/javascript';a.async=!0;
      a.src='https://analytics.tiktok.com/i18n/pixel/events.js?sdkid='+e;
      a.onload=function(){ttq.instance.track({})};
      d.head.appendChild(a)
    };
    ttq.load('{{ settings.tiktok_pixel_id }}');
    ttq.track('PageView');
  }(window, document, 'ttq');
</script>
```

## Audiences

1. **Website Viewers** - Visitantes de la tienda
2. **Buyers** - Clientes que compraron
3. **Engagement** - Usuarios con interacción