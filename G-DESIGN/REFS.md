# REFS — Rébus

Les deux sites ont été ouverts le 2026-11-18 (navigateur, captures et styles calculés). On en tire des principes, jamais un layout, un texte, un asset ou une police.

## Cosmos — cosmos.so

Ce qui a été observé :
- Titre de très gros corps (72 px), en grotesque grasse (700) à l'approche serrée (environ −4 %), en bas de casse. Une vignette d'image est posée **dans la ligne de texte**, comme si c'était un mot.
- Fond blanc pur, encre presque noire, aucun accent couleur sur la page d'accueil. La couleur vient seulement des images.
- Les contenus sont rangés en **cases** : tuiles gris très clair à grands rayons, légende courte en dessous (titre gras, une ligne grise).
- Dans les listes, l'élément courant est noir et les autres sont gris très pâle : la hiérarchie se joue sur la valeur, pas sur la taille.

Ce qu'on retient pour Rébus :
- **Typo-image** : les pictogrammes peuvent se lire comme des mots dans une phrase (« [image] + [image] = ? »).
- **Composition en cases** : chaque élément du rébus a sa tuile, avec une légende sobre.
- Hiérarchie par la valeur (plein et pâle) plutôt que par la couleur.

## PART — part.archi

Ce qui a été observé :
- Fond blanc, encre noire, **un seul accent** (rouge vermillon) réservé à la navigation et aux tracés.
- Navigation en bas de casse, petit corps (13 px), **posée à la verticale dans les marges**.
- Dessins au trait fin, avec grille en perspective et filets de 1 px.
- Titres de projet en lettres construites très espacées, avec une légende de métadonnées en dessous (lieu, statut, année).

Ce qu'on retient pour Rébus :
- **Rigueur documentaire** : chaque élément est légendé et numéroté (fig. 1, fig. 2), dans une grille de filets fins.
- Un accent unique, réservé à ce qui compte : l'action et l'indice.
- Les métadonnées (date, série, temps) en petit corps, bas de casse, à part du contenu.
- Les marges peuvent porter des étiquettes verticales.

---

## V2 — 2026-11-18 · refs du hackathon (`hackatons-pipeline/REFERENCES-DESIGN.md`)

Gaia a rejeté la V1 (« slop IA ») et demandé de s'inspirer des catégories `narratif-jeu` et `3d-matiere`. J'ai regardé les 21 captures de `REFERENCES-CAPTURES/` (planches contact). Les deux catégories sont proches et partagent des tokens (scène, lumière, matière), donc on peut les associer. Le pipeline catégorise par capture ; plusieurs URL restent « apparentes ».

| Ref | Catégorie | Principe retenu | Utilisée dans |
|---|---|---|---|
| Gapsy Studio | narratif-jeu | Lettres en relief extrudé dans une salle blanche ; griffonnages au marqueur posés **par-dessus** la 3D | V2-01 Galerie |
| Shutabug | 3d-matiere | Galerie courbe éclairée, œuvres accrochées comme des objets avec ombre portée | V2-01 Galerie |
| Raben Rifaie | narratif-jeu | Lumière naturelle douce, ombres de fenêtre, palette plâtre/sable, un seul accent | V2-01 Galerie |
| Don't Look Up (game) | narratif-jeu | Monde au trait, typo noire massive, boutons cerclés à ombre pleine, petite foule à bulles | V2-02 Gribouille |
| Gemeos | narratif-jeu | Illustrations à la plume autour d'un titre lourd | V2-02 Gribouille |
| Primal Instinct | 3d-matiere | Pierre gravée en lumière rasante sur noir | V2-03 Pierre |
| Yogi Suria | 3d-matiere | Croix de lumière rouge-orangé dans la pénombre, matière minérale | V2-03 Pierre |
| Igloo | 3d-matiere | Blocs de matière assemblés, lumière froide, poussière | V2-03 Pierre |

Écartées : Experience Funtech et MemoryQuest (néon arcade, trop proche du cliché « jeu »), Dairy Food et Köm (rendu 3D impossible à reproduire en HTML/CSS léger), Matchball (objets réels photographiés).

Reproductibilité « cheap » vérifiée : tout est en CSS (dégradés, ombres, perspective, text-shadow pour l'extrusion) et en filtres SVG (feDiffuseLighting / feSpecularLighting pour le relief, feTurbulence pour le grain et la pierre). Il n'y a ni image, ni Three.js, ni requête réseau.
