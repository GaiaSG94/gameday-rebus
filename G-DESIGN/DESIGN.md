# DESIGN — Rébus (journal)

Écrit par Claude (directeur artistique). Les versions sont datées et ne sont jamais écrasées.

## V1 — 2026-11-18 · exploration de la page Jeu

### Livré
- `PAGES.md` : 4 pages proposées (Post, Jeu, Carte de fin, Séries & classement) et 3 questions produit ouvertes.
- `REFS.md` : lecture de cosmos.so et de part.archi, sites ouverts et observés le jour même.
- `planches/v1/01-brouillon.html` : direction de départ du brief (papier, encre, vermillon, pictos tracés à la main, lettres sur des traits).
- `planches/v1/02-planche.html` : planche documentaire (grille de filets, figures numérotées, légendes en mono, accent cobalt).
- `planches/v1/03-decoupage.html` : équation typographique sur fond nuit, pictos en aplats découpés, accent jaune. S'écarte de la direction de départ.

Chaque planche montre le cadre desktop (1440 × 900) et le cadre mobile (390 × 844) côte à côte, avec le même rébus de démo (STAR + FISH, 1 lettre révélée), puis 5 états des cases : vide, saisie, lettre révélée, mauvaise réponse, trouvé.

### Décisions
- Le gabarit du feed reste volontairement gris et neutre (aucun logo, aucun élément de marque) : seul le jeu porte de la couleur.
- Les pictos sont des SVG dessinés dans le fichier. Il n'y a ni emoji ni police externe : les planches s'ouvrent hors ligne.
- Une règle visible en 5 secondes : « Two pictures, one word. »
- L'accent est réservé à l'indice, au curseur et à l'action (Enter) dans les trois directions.

### Points ouverts
- Le code actuel propose un QCM avec des emoji, alors que `IDEE.md` prévoit des indices de lettres : à trancher (voir `PAGES.md`).
- Police manuscrite pour la direction 01 : il faudra choisir une police sous licence OFL, embarquée dans l'app (CSP : aucune requête externe).

### Changelog
- 2026-11-18 : création de V1 (3 directions, page Jeu). En attente de validation.

## V2 — 2026-11-18 · nouvelle exploration de la page Jeu

### Retour sur V1
Gaia a rejeté les trois directions V1 : « on dirait du slop IA ». Elles étaient trop plates, sans matière ni scène. Consigne : s'inspirer des refs design du hackathon, catégories `narratif-jeu` et `3d-matiere` (voir `REFS.md`, section V2).

### Livré
- `planches/v2/01-galerie.html` : salle de plâtre éclairée par des verrières, pictos en relief sur des plaques murales, lettres extrudées posées au sol, empreintes pour les cases vides, marqueur noir à la main par-dessus.
- `planches/v2/02-gribouille.html` : monde dessiné à la plume, typo noire massive, une petite foule de joueurs qui réagit en bulles, surligneur jaune pour l'indice.
- `planches/v2/03-pierre.html` : tablettes de pierre gravées en lumière rasante, « + » en croix de lumière braise, blocs gravés pour la réponse.

### Décision
- **Validée : V2-01 Galerie**, avec un delta : l'accent passe du rouge au bleu.
  - bleu `#2b55e6`, extrusion `#2349cc` → `#183393`, Enter `#3a64f0` → `#2449d6`, halo du curseur `rgba(43,85,230,…)`.
- V2-02 et V2-03 sont conservées pour mémoire et ne seront pas déclinées.

### Changelog
- 2026-11-18 : création de V2 (3 directions basées sur les refs du hackathon).
- 2026-11-18 : Galerie retenue, rouge → bleu ; correction des empreintes vides dans la bande d'états.
- Prochaine étape (C) : `STYLE.md` à partir de Galerie bleue, puis planches Post, Carte de fin, Séries & classement.
- 2026-11-18 : delta Gaia « un bleu plus soft » : l'accent passe de `#2b55e6` à `#6a8fd8`, un bleu poudré moins saturé. Extrusion de `#5f84cd` à `#3d5692`, Enter de `#7c9de0` à `#5f84cd`, halo `rgba(106,143,216,…)`.

## V2 · étape C — 2026-11-18 · style formalisé et déclinaison

### Livré
- `STYLE.md` : palette (bleu poudré `#6a8fd8`, seul accent), échelle typo, grille scène/panneau, composants (plaque, lettre, empreinte, griffonnage, boutons, touches, blocs de plâtre), mouvement, règles d'états.
- `planches/v2/page-1-post.html` : vue dans le feed. Plaques du jour, 8 empreintes vides qui donnent la longueur, une action bleue. Variantes : pas joué, en cours, trouvé.
- `planches/v2/page-3-carte-de-fin.html` : temps en chiffre héros extrudé, mot complet sous le faisceau, série, indice, place dans la communauté, commentaire pré-rédigé à poster en un geste. Variantes : sans indice, avec indices, tout révélé, commentaire posté.
- `planches/v2/page-4-series.html` : % de réussite en héros, histogramme des temps en colonnes de plâtre (la colonne du joueur en bleu, cerclée au marqueur), classement des plus rapides avec la ligne du joueur. Variantes : onglet série (mois en carreaux), pas encore joué, début de journée.

### Décisions
- Une seule action bleue par écran. Sur la carte de fin, c'est « Post my result » : le commentaire est le cœur du critère Reddit-y.
- Les lettres révélées restent en plâtre blanc jusque dans le résultat, pour que les résultats se comparent honnêtement dans les commentaires.
- Les données communautaires ne prennent jamais la forme d'un graphique plat : ce sont des objets de la salle (colonnes, carreaux).

### Points ouverts
Les questions 4, 5 et 6 sont dans `PAGES.md` (partie en cours, tout révélé, données du classement). Les chiffres affichés sont des données de démo.

### Changelog
- 2026-11-18 : STYLE.md, planches Post, Carte de fin, Séries & classement (en revue).

## LOCK — 2026-11-18

Gaia a validé les 4 pages et verrouillé le style (`/lock`).

| Page | Planche |
|---|---|
| Post | `planches/v2/page-1-post.html` |
| Jeu | `planches/v2/01-galerie.html` |
| Carte de fin | `planches/v2/page-3-carte-de-fin.html` |
| Séries & classement | `planches/v2/page-4-series.html` |

Le style de référence est `STYLE.md` (Galerie, bleu poudré `#6a8fd8`). Les explorations V1 et V2-02/03 restent archivées dans `planches/`.

Avant l'intégration, il reste à trancher les questions produit 1, 2, 4, 5 et 6 de `PAGES.md`. Les 4 pages sont dessinées : la question 3 (page Séries séparée) est tranchée par cette validation.
