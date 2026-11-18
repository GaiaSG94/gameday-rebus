# STYLE — Rébus · « Galerie » (bleu poudré)

Validé par Gaia le 2026-11-18 (V2-01 Galerie, deltas : rouge → bleu → bleu plus doux).

> **Verrouillé le 2026-11-18 (`/lock`)** : fin des explorations. Toute évolution passe par un `/delta` daté dans `DESIGN.md`, sans changer l'accent, la typo ni la matière.

Planche de référence : `planches/v2/01-galerie.html`. Toute nouvelle page suit ce fichier à la lettre.

## 1. L'idée en une phrase

Le rébus du jour est **exposé dans une salle de plâtre** : la lumière tombe des verrières, les pictos sont en relief sur des plaques murales, la réponse se construit en lettres extrudées posées au sol, et un marqueur noir, tracé à la main, passe par-dessus la matière.

## 2. Palette (une seule couleur d'accent)

| Rôle | Hex | Usage |
|---|---|---|
| Plâtre | `#ecebe7` | fond général, panneaux, plaques (dégradé `#fbfaf7` → `#e2dfd8`) |
| Mur haut | `#f3f2ee` | haut de la scène (dégradé vers `#e2dfd8`) |
| Sol | `#d6d0c4` | sol de la scène (dégradé `#cfc8bb` → `#ddd7cc`) |
| Empreinte | `#c7bfb2` | emplacement vide creusé dans le sol |
| Texte | `#2a2622` | texte courant, valeurs |
| Texte secondaire | `#7c746a` | légendes, métadonnées |
| Légende fine | `#9a9186` | numéros de plaques (I., II.) |
| Marqueur | `#1d1a17` | griffonnages à la main uniquement |
| **Accent bleu** | `#6a8fd8` | lettres de réponse, logo, action principale, curseur, chiffres clés |
| Extrusion bleue | `#5f84cd` → `#3d5692` | 6 paliers de text-shadow sous les lettres bleues |
| Bouton bleu | `#7c9de0` → `#5f84cd` | dégradé du bouton principal, base `#465f98` |
| Halo bleu | `rgba(106,143,216,.45)` | lueur du curseur, focus |
| Plâtre blanc | `#f7f5f0` | lettre révélée par indice (autre matière), extrusion `#dcd8cf` → `#aea79b` |

Interdits : un deuxième accent, du rouge, des dégradés vifs, du noir pur en aplat.

## 3. Typographie

Pile système (aucune police externe, CSP) : `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`.

| Niveau | Taille / graisse | Traitement |
|---|---|---|
| Lettres de réponse | 52 px mobile / 58 px desktop · 900 | `scaleX(.82)`, extrusion bleue sur 6 paliers + ombre portée |
| Chiffre héros (temps, série) | 44–64 px · 900 | même extrusion que les lettres |
| Logo « Rébus » | 22 px · 900 | `scaleX(.88)`, bleu, extrusion courte (2 paliers) |
| Titre d'écran | 18–20 px · 800 | texte `#2a2622` |
| Règle / consigne | 13 px · 700 | centrée, au mur |
| Corps / boutons | 13 px · 800 (boutons) / 12 px · 400–600 | |
| Métadonnées | 11.5 px · 600 | `#7c746a`, valeurs en `#2a2622` gras |
| Légendes de plaque | 9.5 px · tracking .12em · capitales | `#9a9186` |

L'interface est en anglais ; le nom « Rébus » garde son accent.

## 4. Grille et cadre

- Mobile d'abord : cadre de post 390 × ~600 px ; desktop : 724 × 568 px (post ouvert). Tout tient dans le viewport, **sans scroll**.
- Deux zones : **la scène** (mobile 340 px, desktop 350 px), puis **le panneau** (le reste : actions et clavier).
- La scène se compose ainsi :
  - plafond à verrières (26 px) ;
  - mur ;
  - sol sur 31 % de la hauteur, avec des lattes en perspective ;
  - vignette, puis grain (bruit SVG, multiply, 35 %).
- Marges intérieures : 16–18 px sur mobile, 40 px sur desktop. Sur desktop, le clavier et les contenus étroits sont limités à 470 px de large, centrés.
- Le HUD est en haut de la scène (top 30 px) : logo à gauche, métadonnées à droite.

## 5. Composants

| Composant | Règle |
|---|---|
| **Plaque** | 116 px mobile / 136 px desktop, rayon 5 ; inclinée `rotateY(±14deg)` (perspective 700) ; ombre courte + ombre longue douce vers le bas à droite. Picto en relief via le filtre SVG `#relief` (diffuse + spéculaire, lumière azimut 225°, élévation 52°). |
| **Lettre de réponse** (`.L`) | posée au sol, ombre de contact elliptique. Trois états de matière : bleu extrudé (saisie), plâtre blanc (indice), empreinte vide (`.o`). |
| **Curseur** | empreinte éclairée en bleu (`#c3d1ef` + halo), pulsation 1,2 s. |
| **Griffonnage** | trait 2,4–3 px, `#1d1a17`, filtre `#wob` (tremblé). Réservé au « + », aux cercles d'attention, aux flèches. Jamais plus de 2 par écran. |
| **Bouton secondaire** | pilule de plâtre `#f6f5f1`, ombre `0 2px 0 #cbc6bc` + ombre douce ; icône ou signe en bleu. |
| **Bouton principal** | pilule ou touche bleue (dégradé `#7c9de0` → `#5f84cd`, base `#465f98`), texte blanc 800. **Un seul par écran.** |
| **Touche** | plâtre `#faf9f6` → `#efede8`, rayon 9, hauteur 44 (mobile) / 40 (desktop), ombre `0 2px 0 #cbc6bc`. |
| **Bloc de plâtre** (stat, barre) | même matière que les plaques, extrudé vers le haut ; la barre du joueur est bleue. |
| **Pastille** | plâtre en creux (`inset 0 2px 3px`), texte 11.5 px. |

## 6. Mouvement

| Moment | Effet | Durée |
|---|---|---|
| Lettre saisie | tombe dans son empreinte, léger rebond | 180 ms, ease-out |
| Indice | la lettre en plâtre blanc pousse du sol, puis le cercle au marqueur se trace | 300 ms + 250 ms |
| Mauvaise réponse | les lettres pâlissent et basculent comme des dominos, puis le sol se vide | 500 ms |
| Trouvé (le déclic) | le faisceau central glisse sur le mot de gauche à droite | 800 ms |
| Arrivée d'une scène | les plaques glissent le long du mur, puis la lumière monte | 400 ms |
| Pression d'un bouton | s'enfonce de 2 px (l'ombre `0 2px 0` disparaît) | 80 ms |

Toutes les animations sont désactivées si `prefers-reduced-motion`.

## 7. Règles d'états

- **Saisie neutre** : aucune couleur de jugement avant Enter. Bleu = « à toi », plâtre blanc = « donné ».
- **Indice** : il est toujours visible, jusque dans le résultat (lettre blanche dans le mot final, compteur « 1 hint »).
- **Erreur** : jamais de rouge. Elle se lit par la matière (pâlir, basculer) et un libellé court : « Not this one ».
- **Réussite** : la lumière (faisceau) et un chiffre héros extrudé. Pas de confettis.
- **Chargement** : la scène vide avec ses verrières, et les plaques qui arrivent. Pas de spinner.
- **Communauté** : les chiffres du jour (% de réussite, temps) sont toujours en blocs de plâtre ou en valeurs grasses, jamais en graphiques plats.

## 8. Ce qu'on ne fait pas

Pas d'emoji, de Snoo, de karma ni de logo tiers. Pas de deuxième accent, pas de lorem ipsum, pas de composant non stylé, pas de police chargée depuis le réseau.
