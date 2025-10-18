# Ristorante Pizzeria Centro - Premium Website

Sito web premium e lussuoso per il Ristorante Pizzeria Centro di Novara.

## Caratteristiche

- Design premium e lussuoso
- Completamente responsive (mobile, tablet, desktop)
- Animazioni eleganti e fluide
- Ottimizzato per la produzione
- SEO-friendly
- Performance elevate

## Tecnologie Utilizzate

- React 18
- Vite (build tool veloce)
- CSS moderno con variabili personalizzate
- Google Fonts (Playfair Display + Montserrat)

## Installazione

1. Installa le dipendenze:
```bash
npm install
```

2. Avvia il server di sviluppo:
```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:3000`

## Build per la Produzione

Per creare la versione ottimizzata per la produzione:

```bash
npm run build
```

I file ottimizzati saranno generati nella cartella `dist/`

## Anteprima Build di Produzione

Per vedere l'anteprima della build di produzione:

```bash
npm run preview
```

## Deploy

I file nella cartella `dist/` possono essere caricati su qualsiasi servizio di hosting:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Qualsiasi server web tradizionale

## Struttura del Progetto

```
pizzeria-centro/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Pizzeria.jsx
│   │   ├── Events.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Personalizzazione

### Colori
I colori principali sono definiti in `src/index.css` nelle variabili CSS:
- `--primary-gold`: Oro principale
- `--primary-dark`: Nero principale
- `--accent-burgundy`: Bordeaux accento

### Contenuti
Tutti i contenuti sono modificabili nei file dei componenti in `src/components/`

## Contatti

Ristorante Pizzeria Centro
Largo Cavalli 2, Novara (NO)
Tel: +39 0321 623232
Email: centro.snc@libero.it

---

Sviluppato con passione per offrire un'esperienza digitale premium.
