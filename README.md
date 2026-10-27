# SéGa Nails

Site vitrine de **SéGa Nails – Prothésiste Ongulaire Certifiée** (14 rue Le Guennec, 29200 Brest).
Site statique : HTML, CSS et JavaScript, sans étape de build.

## Voir le site

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

N’importe quel hébergeur statique convient (GitHub Pages, Netlify, OVH…). Il suffit de publier le contenu du dépôt.

## Structure

```
index.html        page unique (contenu, SEO, données structurées LocalBusiness + FAQ)
css/style.css     design : tokens, thèmes toile/papier, sections, responsive
js/main.js        mouvement (GSAP, ScrollTrigger, Lenis), statut d’ouverture, carrousel, lightbox
vendor/           GSAP 3.15, ScrollTrigger, Lenis 1.3 (embarqués, aucun CDN)
fonts/            Bodoni Moda, Jost, La Belle Aurore (auto-hébergées, latin)
img/              les 5 photos de réalisations + image de partage (og.jpg)
favicon.svg       fleur d’hibiscus
```

## Direction artistique : « le carnet de rendez-vous »

Le site est l’agenda de Séverine, ouvert pour vous : couverture en toile graphite qui s’ouvre au chargement,
pages d’agenda blanc cassé réglées, dorure champagne, ruban marque-page qui suit la lecture.
Palette imposée : `#464445` · `#F5F5F4` · `#DCCA9B` (plus `#7A6633` pour l’or lisible sur papier).
Fil rouge : cadres en forme d’ongle amande et courbe de french (« smile ») entre les sections.

## Ce qu’il faut compléter

- **Domaine** : une fois le site en ligne, ajouter l’URL absolue dans `og:image` / `og:url` (balises `<meta>` de `index.html`) et dans les données structurées (`url`, `image`).
- **Logo officiel** : le site dessine sa propre fleur d’hibiscus (symbole `#i-mark` dans `index.html`). Remplacer par le fichier du logo quand il est disponible.
- **Tarifs** : aucun prix n’a été fourni, chaque prestation affiche « Tarif sur demande ». À remplacer par les vrais prix dans les cartes de la section Prestations.
- **Horaires** : à confirmer, en particulier samedi, dimanche et jours fériés (Toussaint). Ils se modifient à trois endroits : le tableau « Nous trouver », le graphique de la semaine, et la constante `HOURS` dans `js/main.js` (statut « Ouvert maintenant »), plus les données structurées.
- **Photos** : seules 5 photos existent, leurs recadrages sont réutilisés d’une section à l’autre. Ajouter de nouvelles photos dans `img/` (format WebP conseillé) et les référencer dans la galerie.
- **Avis** : les 5 avis sont repris mot pour mot ; pour en ajouter, dupliquer un `<article class="note">` dans la section Avis (et mettre à jour le compteur `/ 5`).

## Accessibilité et performance

Contrastes AA, navigation au clavier, lien d’évitement, lightbox native `<dialog>`, `prefers-reduced-motion` respecté
(loader supprimé, animations coupées, sections empilées), page complète lisible sans JavaScript.
Animations limitées à `transform`/`opacity` (plus quelques `clip-path` de révélation), images en lazy-loading avec dimensions réservées.
