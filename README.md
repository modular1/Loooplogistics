# Looop Logistics — website

Statische website voor de logistieke tak van Looop, in dezelfde huisstijl als de
co-products website (Looop.company): zachte blauwgrijze achtergrond, ronde
loop-vormen, donkerblauw fullscreen-menu, oranje call-to-action-knoppen en
afgeronde typografie (Fredoka).

## Pagina's

| Pagina           | Inhoud                                                        |
| ---------------- | ------------------------------------------------------------- |
| `index.html`     | Homepage met loop-carrousel, dienst-tabs, USP's en cijfers     |
| `transport.html` | Vervoer van co-products, bulk en vloeistoffen                 |
| `werkplaats.html`| Werkplaats voor trailers (onderhoud, keuringen, reparaties)   |
| `weegbrug.html`  | Geijkte weegbrug, ook beschikbaar voor derden                 |
| `contact.html`   | Contactgegevens per afdeling + terugbelverzoek-formulier      |

## Structuur

- `css/style.css` — alle styling en huisstijl-variabelen (kleuren in `:root`)
- `js/main.js` — gedeelde header, fullscreen-menu, footer, contact-knop,
  hero-carrousel en tabs
- Alle illustraties zijn inline SVG (geen externe afbeeldingen nodig);
  vervang deze desgewenst door echte fotografie

## Lokaal bekijken

Open `index.html` in de browser, of start een simpele webserver:

```bash
python3 -m http.server 8000
```
