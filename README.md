# VH Multiservices — Site vitrine premium

Site vitrine corporate haut de gamme pour **VH Multiservices** (SARL, Côte d'Ivoire).
Conçu avec **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, des composants
de type **Shadcn/UI**, **Framer Motion** et **Lucide React**.

> _« Votre vision, notre mission »_

## ✨ Fonctionnalités

- **Design premium** corporate (glassmorphism léger, dégradés tricolores de la charte).
- **11 sections** : Hero (parallaxe), À propos, Missions/Services, Valeurs, Vision,
  Pourquoi nous (timeline), Chiffres clés (compteurs animés), Galerie (filtres + lightbox),
  Témoignages (slider auto), Contact (formulaire validé), Footer.
- **Bouton WhatsApp flottant** animé, visible sur toute la page.
- **SEO complet** : metadata, Open Graph dynamique, Twitter Card, JSON-LD `LocalBusiness`,
  `sitemap.xml`, `robots.txt`.
- **Responsive** mobile / tablette / desktop, **accessibilité** (focus, aria, reduced-motion).

## 🎨 Charte graphique (extraite du kit de communication)

| Couleur | Hex | Usage |
| --- | --- | --- |
| Bleu Nuit | `#0D2D6B` | Fonds, dégradés |
| Bleu Principal | `#1B4FA8` | Accent principal |
| Rouge Accent | `#C8181A` | Call-to-action, détails |
| Blanc Cassé | `#F4F6FA` | Surfaces claires |

**Typographies** : Oswald (titres), Playfair Display (slogans), Montserrat (corps).

## 🚀 Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm start        # serveur de production
```

## ⚙️ Personnalisation rapide

- **Coordonnées, slogan, réseaux sociaux** : `src/lib/site.ts`
- **Chiffres clés** : `src/components/sections/Stats.tsx`
- **Services / valeurs / témoignages** : fichiers dans `src/components/sections/`
- **Formulaire de contact** : branchez votre envoi d'email dans `src/app/api/contact/route.ts`

## 📁 Structure

```
src/
├── app/            # App Router (layout, page, SEO, API)
├── components/
│   ├── sections/   # Sections de la page
│   ├── motion/     # Helpers d'animation Framer Motion
│   └── ui/         # Primitives type Shadcn/UI
└── lib/            # Config & utilitaires
```
