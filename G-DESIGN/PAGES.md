# PAGES — Rébus

Source : `IDEE.md` (mécanique : pictogrammes + indices de lettres progressifs ; boucle : un rébus par jour, carte de fin avec résultat, série, invitation à commenter).

| # | Page | Rôle | Contenu clé | Statut |
|---|------|------|-------------|--------|
| 1 | Post | Vue dans le feed (inline / splash) : donner envie d'ouvrir en un coup d'œil | En-tête du post, date du jour, les pictogrammes du jour en aperçu, bouton d'ouverture, série du joueur | validée · `planches/v2/page-1-post.html` |
| 2 | Jeu | Écran principal : une seule règle (« Two pictures, one word ») comprise en 5 secondes | Pictogrammes, cases de lettres, clavier, bouton d'indice (révèle une lettre), chrono, série | validée · `planches/v2/01-galerie.html` (bleu poudré) |
| 3 | Carte de fin | Clore la partie et pousser au commentaire | Résultat (trouvé / réponse), temps, lettres révélées, série, invitation à commenter en un geste, « nouveau rébus demain » | validée · `planches/v2/page-3-carte-de-fin.html` |
| 4 | Séries & classement | Montrer la communauté du jour | Série du joueur, part des joueurs ayant trouvé, temps de la communauté | validée · `planches/v2/page-4-series.html` |

## Questions ouvertes (décision produit, pas design)

1. **Saisie vs choix multiple** : `IDEE.md` parle d'indices de lettres progressifs, mais le code actuel (`src/shared/puzzle.ts`) propose 4 réponses au choix et des pictos en emoji. Les planches suivent `IDEE.md` (cases de lettres + clavier). À confirmer.
2. **Nombre d'indices** : `IDEE.md` ne fixe pas de plafond. Les planches affichent seulement « 1 letter revealed », sans maximum.
3. **Séries & classement** : page à part, ou bloc intégré à la carte de fin ? `IDEE.md` ne cite que la carte de fin ; je la garde séparée en attendant ta décision.
4. **Partie en cours** : la planche Post montre une variante « Paused at 01:24 » qui reprend les lettres déjà posées. Il faudrait sauvegarder la partie dans Redis, ce que `IDEE.md` ne précise pas. À confirmer.
5. **Tout révélé** : si le joueur révèle toutes les lettres, la série continue-t-elle ? La planche Carte de fin montre l'état sans trancher.
6. **Classement « Fastest today »** : il faut stocker côté serveur le temps et le nombre d'indices de chaque joueur, par jour, plus l'histogramme des temps. Cela découle des « community scores » de `IDEE.md`, mais le code actuel ne le fait pas.
