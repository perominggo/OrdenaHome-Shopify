# Klaviyo Email Marketing Setup

## Account ID
```
XXXXX
```

## Integration Methods

### 1. Newsletter Popup
Capturas de emails con oferta de 10% descuento

### 2. Abandoned Cart Email
Recuerda a usuarios que dejaron productos en el carrito

### 3. Welcome Series
- Email 1: Bienvenida + 10% código descuento
- Email 2: Bestsellers (24h después)
- Email 3: Reviews y testimonios (3 días)

### 4. Post-Purchase Sequence
- Email 1: Confirmación de pedido
- Email 2: Shipping confirmation
- Email 3: Solicitud de review (7 días)
- Email 4: Recomendaciones personalizadas (14 días)

### 5. Re-engagement
Emails semanales para usuarios inactivos

## Segmentation

1. **By Purchase Value**
   - High value (>€100)
   - Medium (€50-€100)
   - Low (<€50)

2. **By Category Interest**
   - Cocina
   - Baño
   - Armario
   - Etc.

3. **By Behavior**
   - Abandoned cart
   - Active subscribers
   - Inactive (30+ días)

## Implementation

```html
<script type="text/javascript" async src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id={{ settings.klaviyo_account_id }}"></script>
```

## Expected Metrics

- Email deliverability: 98%+
- Open rate: 25-35%
- Click rate: 3-5%
- Conversion rate: 1-2%