---
name: SéGa Nails
description: "Séverine's appointment book, opened for you: graphite book-cloth, ruled agenda paper, champagne gold foil, almond-framed nails."
colors:
  cloth: "#464445"
  cloth-deep: "#383637"
  paper: "#F5F5F4"
  paper-2: "#ECEBE8"
  gold: "#DCCA9B"
  gold-ink: "#7A6633"
  ink: "#464445"
  ink-soft: "#656364"
  rule: "rgba(70, 68, 69, 0.10)"
  gold-line: "rgba(220, 202, 155, 0.55)"
typography:
  display-hero:
    fontFamily: "\"Bodoni Moda\", \"Bodoni 72\", Didot, \"Playfair Display\", Georgia, serif"
    fontSize: "clamp(3.3rem, 8.4vw, 9.6rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  display-wall:
    fontFamily: "\"Bodoni Moda\", \"Bodoni 72\", Didot, \"Playfair Display\", Georgia, serif"
    fontSize: "clamp(3rem, 9.5vw, 9.4rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.022em"
  display-phone:
    fontFamily: "\"Bodoni Moda\", \"Bodoni 72\", Didot, \"Playfair Display\", Georgia, serif"
    fontSize: "clamp(2.8rem, 11.2vw, 11rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "'lnum' 1, 'tnum' 1"
  display-wordmark:
    fontFamily: "\"Bodoni Moda\", \"Bodoni 72\", Didot, \"Playfair Display\", Georgia, serif"
    fontSize: "clamp(4.2rem, 17.5vw, 19rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "\"Bodoni Moda\", \"Bodoni 72\", Didot, \"Playfair Display\", Georgia, serif"
    fontSize: "clamp(2.5rem, 6.6vw, 6.2rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.022em"
  title-lg:
    fontFamily: "\"Bodoni Moda\", \"Bodoni 72\", Didot, \"Playfair Display\", Georgia, serif"
    fontSize: "clamp(2rem, 3.8vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.022em"
  title:
    fontFamily: "\"Bodoni Moda\", \"Bodoni 72\", Didot, \"Playfair Display\", Georgia, serif"
    fontSize: "clamp(1.5rem, 2.2vw, 2.1rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.022em"
  numeral:
    fontFamily: "\"Bodoni Moda\", \"Bodoni 72\", Didot, \"Playfair Display\", Georgia, serif"
    fontSize: "clamp(3.4rem, 6vw, 5.6rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.04em"
    fontFeature: "'lnum' 1, 'tnum' 1"
  question:
    fontFamily: "\"Bodoni Moda\", \"Bodoni 72\", Didot, \"Playfair Display\", Georgia, serif"
    fontSize: "clamp(1.3rem, 2.1vw, 1.8rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.022em"
  quote:
    fontFamily: "\"Bodoni Moda\", \"Bodoni 72\", Didot, \"Playfair Display\", Georgia, serif"
    fontSize: "clamp(1.3rem, 2.1vw, 1.8rem)"
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: "0em"
    fontVariation: "'opsz' 9"
  lead:
    fontFamily: "Jost, \"Avenir Next\", \"Segoe UI\", system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.08rem, 1.4vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Jost, \"Avenir Next\", \"Segoe UI\", system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.22vw, 1.12rem)"
    fontWeight: 400
    lineHeight: 1.62
  button:
    fontFamily: "Jost, \"Avenir Next\", \"Segoe UI\", system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.02em"
  label:
    fontFamily: "Jost, \"Avenir Next\", \"Segoe UI\", system-ui, -apple-system, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.16em"
  hand:
    fontFamily: "\"La Belle Aurore\", \"Segoe Script\", \"Bradley Hand\", cursive"
    fontSize: "clamp(1.35rem, 2vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
rounded:
  fillet: "3px"
  note: "4px"
  shot: "6px"
  card: "14px"
  pill: "999px"
  round: "50%"
spacing:
  pad: "clamp(20px, 5.5vw, 88px)"
  edge: "clamp(40px, 6.5vw, 100px)"
  nav-h: "76px"
  max: "1360px"
  section-y: "clamp(5rem, 10vw, 9rem)"
  split-gap: "clamp(2rem, 6vw, 6rem)"
  hit: "44px"
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.cloth}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.7rem"
    height: "52px"
  button-gold-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.cloth}"
  button-ink:
    backgroundColor: "{colors.cloth}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.7rem"
    height: "52px"
  button-ink-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.cloth}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.cloth}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.7rem"
    height: "52px"
  button-line-hover:
    backgroundColor: "{colors.cloth}"
    textColor: "{colors.paper}"
  button-small:
    padding: "0.65rem 1.15rem"
    height: "{spacing.hit}"
  fab:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.cloth}"
    rounded: "{rounded.pill}"
    padding: "0 1.4rem"
    height: "52px"
  nav:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "{spacing.nav-h}"
  ribbon:
    backgroundColor: "{colors.gold}"
    width: "clamp(8px, 0.9vw, 14px)"
  card:
    backgroundColor: "{colors.cloth}"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "1.1rem 1.1rem 1.4rem"
  card-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.cloth}"
    rounded: "{rounded.card}"
    padding: "1.1rem 1.1rem 1.4rem"
  card-framed:
    backgroundColor: "{colors.cloth}"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "1.1rem 1.1rem 1.4rem"
  note:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.quote}"
    rounded: "{rounded.note}"
    padding: "clamp(1.6rem, 3vw, 2.6rem) clamp(1.5rem, 3vw, 2.8rem) clamp(1.4rem, 2.4vw, 2rem)"
  round-control:
    backgroundColor: "transparent"
    textColor: "{colors.gold}"
    rounded: "{rounded.round}"
    size: "52px"
  round-control-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.cloth}"
  question-plus:
    backgroundColor: "transparent"
    rounded: "{rounded.round}"
    size: "34px"
  chart-bar:
    backgroundColor: "{colors.gold}"
    rounded: "{rounded.pill}"
  marquee:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.cloth}"
    padding: "clamp(0.9rem, 1.4vw, 1.3rem) 0"
  map-pill:
    backgroundColor: "{colors.cloth}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.3rem"
    height: "48px"
---

# Design System: SéGa Nails

## Overview

**Creative North Star: "The Opened Appointment Book"**

The site is Séverine's agenda, opened for the visitor. A graphite book-cloth cover swings open on load; behind it are off-white ruled pages with a gold margin rule, gold-foil edges, and a gold ribbon marker hanging from the right edge that tracks how far you have read. Every section is a different page of the same book: cloth pages (savoir-faire, la semaine, avis, footer) alternate with paper pages (accueil, prestations, galerie, questions, nous trouver), with one gold leaf (the booking call) and one gold band (the marquee) as punctuation.

Personality is done by type and shape, not by decoration. Bodoni Moda at giant scale gives the editorial, jeweller's-box voice; Jost does all the reading; La Belle Aurore appears only as a handwritten agenda annotation. The almond silhouette of a nail frames the photographs, and the French-tip "smile" curve is the seam between pages. The palette is the three imposed brand colours and their derivatives; the client photographs are the only other chroma on the page. Density is low and unhurried: huge headlines, wide margins, long slow expo-eased motion.

The system is recognizable with all copy removed: gold fillet, almond frames, ribbon, ruled paper. It refuses the beauty-salon template (pastel hero, three icon cards, stock photo grid).

**Key Characteristics:**
- Two surface themes, `.paper` (ruled agenda page) and `.cloth` (woven book-cloth), swapped section by section and joined by curved seams.
- Champagne gold is flat foil: fills, hairlines, rings, bars, and large type on cloth. On paper, gold text is always gold-ink.
- Almond-clipped photographs with a drawn gold hairline; a double gold fillet inset like a blind-stamped cover.
- Bodoni Moda (optical sizing) for everything large; Jost for everything read; one handwritten voice for annotations.
- Soft, long, negatively spread shadows only; depth otherwise comes from surface change and gold lines.
- Pill buttons with a liquid fill; 14px cards; 4px paper notes.
- Slow expo-eased motion, transform and opacity first, one distinct heading reveal per section, content readable without it.

## Colors

A graphite-and-paper pair with one metal. Cloth graphite carries text on paper and the whole cloth surface; paper carries the pages; gold appears as foil on cloth and as a deeper ink where it must be read on paper.

### Primary
- **Book-Cloth Graphite** (#464445, `--cloth`, also `--ink`): the cover colour, the cloth surface, all body and heading text on paper, the text on gold surfaces, and the fill of the graphite button. Same value as ink by design: text on paper is the cloth.
- **Champagne Foil** (#DCCA9B, `--gold`): the foil. Fills (gold button, marquee band, booking page, ribbon, chart bars, petals), hairlines (fillets, almond outlines, ring borders), and large type or numerals on cloth. It is a flat colour; the build never gradients it.

### Secondary
- **Gold Ink** (#7A6633, `--gold-ink`): gold made legible on paper (5.1:1). Used for emphasised phrases in paper headings, handwritten annotations on paper, the quote mark and attribution on notes, today's row in the hours table, the status dot, links in answers, and the focus ring on paper.

### Neutral
- **Agenda Paper** (#F5F5F4, `--paper`): page background, button fills, text on cloth, the note sheet, the nav when solid.
- **Recessed Paper** (#ECEBE8, `--paper-2`): the map well behind the grayscale iframe; the only other paper tone.
- **Deep Cloth** (#383637, `--cloth-deep`): photo wells behind images (arch, shot) so lazy images land on graphite, not white.
- **Soft Ink** (#656364, `--ink-soft`): secondary text on paper (5.5:1): leads, answers, closed hours, notes.
- **Margin Rule** (rgba(70,68,69,.10), `--rule`): the ruled-line colour of the agenda page, table row dividers, the solid-nav bottom border.
- **Gold Fillet Line** (rgba(220,202,155,.55), `--gold-line`): the gold margin rule on paper, cover fillets, framed-card border, round-control borders.

Supporting tints, used as values rather than tokens: soft text on cloth is paper at 76% (`--fg-soft`, 5.9:1) and 80% in cards; shadow, scrim, and lightbox-backdrop tint is a darker graphite (rgba(40,38,39,…)); the loader's page-shade is #1d1b1c.

Contrast as built: graphite on paper 8.9:1; gold on cloth 6.0:1; graphite on gold 6.0:1; gold-ink on paper 5.1:1; gold on paper 1.5:1 (shapes and rules only, never text).

### Named Rules
**The Surface Flip Rule.** `.paper` and `.cloth` each define the same five semantic variables (`--fg`, `--fg-soft`, `--accent`, `--line`, `--focus`); components read those and never hardcode a theme colour. Paper: graphite / soft ink / gold-ink / rule / gold-ink. Cloth: paper / paper 76% / gold / gold at 28% / gold. On the gold booking page, text and focus are graphite and the emphasised phrase is graphite.

**The Two Golds Rule.** Gold #DCCA9B is for surfaces and for type on graphite. Gold text on paper is always #7A6633. There is no third gold.

**The Primary Inverts Rule.** The primary action is graphite on paper and on gold, and gold on cloth. Gold-on-paper would give a 1.5:1 button edge.

**The Photographs Are The Colour Rule.** The interface adds no hue beyond the three brand colours; the only chroma on a page comes from the client's nail photographs.

## Typography

**Display Font:** Bodoni Moda, variable (opsz axis, roman and italic, weight 400 to 900), with Bodoni 72, Didot, Playfair Display, Georgia, serif.
**Body Font:** Jost, variable (100 to 900), with Avenir Next, Segoe UI, system-ui, sans-serif.
**Hand Font:** La Belle Aurore (single weight), with Segoe Script, Bradley Hand, cursive. Annotations only.

**Character:** A high-contrast Didone at giant scale set against a geometric, calm sans: the jeweller's catalogue next to a handwritten note in the margin. All three are self-hosted woff2 with `font-display: swap`.

### Hierarchy
- **Display, hero** (Bodoni 400, `clamp(3.3rem, 8.4vw, 9.6rem)`, lh .9, tracking -.035em): the H1 only. Steps down to `clamp(3.2rem, 12.5vw, 8rem)` at 1100px, `clamp(3.2rem, 15.5vw, 6.4rem)` at 899px, `clamp(3rem, 15vw, 4rem)` at 420px. Max 8.4em wide.
- **Display, wall** (Bodoni 400, `clamp(3rem, 9.5vw, 9.4rem)`, lh .88): the gallery heading, the largest h2.
- **Display, phone** (Bodoni 400, `clamp(2.8rem, 11.2vw, 11rem)`, lh 1, tracking -.04em, lining + tabular figures): the booking number, one line, `nowrap`. `clamp(2.4rem, 12.5vw, 5rem)` at 899px.
- **Display, wordmark** (Bodoni 400, `clamp(4.2rem, 17.5vw, 19rem)`, lh .9, tracking -.035em, gold on cloth): the footer name, with the hibiscus mark at .62em. 16.2vw at 899px.
- **Headline** (Bodoni 400, base `clamp(2.5rem, 6.6vw, 6.2rem)`, lh .98, tracking -.022em, `text-wrap: balance`): every section h2. Each section tunes the clamp inside that band: savoir-faire `2.4rem/5.6vw/5.6rem`, prestations `2.6/6/5.6`, la semaine `2.5/5.4/5.2`, avis `2.5/5.6/5.4`, questions `2.6/5.6/5.4`, rendez-vous `2.4/6/5.6`, nous trouver `2.8/7/6.6`.
- **Title, large** (Bodoni 400, `clamp(2rem, 3.8vw, 3.6rem)`, lh 1): the four steps of the story; the closing-card h3s use `clamp(2.1rem, 3.2vw, 3rem)`.
- **Title** (Bodoni 400, `clamp(1.5rem, 2.2vw, 2.1rem)`, lh 1.08): card and generic h3.
- **Numeral** (Bodoni 400, `clamp(3.4rem, 6vw, 5.6rem)`, lh .9, tracking -.04em, lining + tabular, gold): the three counted facts; the unit beside it is Bodoni italic `clamp(1.3rem, 2vw, 1.9rem)` in paper.
- **Question** (Bodoni 400, `clamp(1.3rem, 2.1vw, 1.8rem)`, lh 1.15): accordion summaries; hours-table day names use `clamp(1.3rem, 1.8vw, 1.55rem)`.
- **Quote** (Bodoni italic 400, `clamp(1.3rem, 2.1vw, 1.8rem)`, lh 1.38, tracking 0, `opsz` 9): review notes; long reviews drop to `clamp(1.05rem, 1.4vw, 1.22rem)` / 1.55 with `opsz` 7.
- **Lead** (Jost 400, `clamp(1.08rem, 1.4vw, 1.3rem)`, lh 1.55, soft ink, `text-wrap: pretty`, max 34rem): the hero sentence.
- **Body** (Jost 400, `clamp(1rem, .96rem + .22vw, 1.12rem)`, lh 1.62): everything read. Answers max 40rem; section paragraphs 22 to 30rem.
- **Button** (Jost 500, 1rem, lh 1, tracking .02em): all button labels; small buttons .93rem.
- **Label** (Jost 400, .78 to .86rem, tracking .14 to .24em, uppercase): functional micro-labels only: the loader subtitle, the "Défiler" scroll hint, the "Tarif sur demande" card note, the review attribution. Chart hours use .74rem.
- **Hand** (La Belle Aurore, `clamp(1.35rem, 2vw, 1.75rem)`, lh 1, rotated -3°, accent colour; `--lg` is `clamp(1.7rem, 3vw, 2.4rem)`): short margin notes under a step, the rail intro, and the FAQ heading.

### Named Rules
**The Optical Size Rule.** Bodoni Moda runs with `font-optical-sizing: auto` so display sizes get hairline contrast; small italic (quotes) sets `opsz` explicitly to 9 (7 for long quotes) so the hairlines stay readable. Weight stays 400 everywhere Bodoni appears.

**The One Phrase Rule.** In a section heading, one phrase sits in `<em>` at weight 400 in the accent colour (gold-ink on paper, gold on cloth, graphite on gold). The emphasis is a colour change, never a size or weight change. (Two headings also set the phrase in italic; see Not canonized.)

**The Hand Is A Margin Note Rule.** La Belle Aurore is only ever a short annotation rotated -3°, plus the hand-drawn ellipse around today's row. It is never a heading and never a paragraph.

**The Italic Is Voice Rule.** Bodoni italic carries quoted or annotated material: review quotes, photo captions, the marquee, numeral units, the "today" marker in the chart and hours table, the pressed mobile-menu link.

## Layout

A single scrolling book. Every section pads to `--pad` (`clamp(20px, 5.5vw, 88px)`) at the sides and caps its content at `--max` (1360px), centred. Vertical rhythm is generous: the common section padding is `clamp(5rem, 10vw, 9rem)`, and sections whose seams curve add `--edge` (`clamp(40px, 6.5vw, 100px)`) so content never sits under a curve. Grids are asymmetric two-column splits (7/5 hero and week, 5/6 savoir-faire and find, 5/7 reviews and FAQ) with gaps of `clamp(2rem, 6vw, 6rem)`; the chart and the map take the first column on desktop (`order: -1`) while their copy leads on mobile. The gallery is the only 12-column grid: five photographs placed with offsets and per-photo `margin-top` so the wall is staggered, not tiled.

Section order and surface: accueil (paper) → marquee (gold band, tilted -1.6°) → savoir-faire (cloth, pinned on desktop) → prestations (paper, horizontal rail) → la semaine (cloth) → galerie (paper) → avis (cloth) → questions (paper) → rendez-vous (gold, ruled) → nous trouver (paper) → footer (cloth).

The paper page is ruled: a 1px line every 56px in `--rule`, and a 1px gold margin rule at `--pad - 16px` from the left, so text always sits to the right of the margin. The gold booking page keeps the ruling in graphite at 12%.

Nav height is `--nav-h` 76px (68px at 1100px and below); `scroll-padding-top` matches. Tap targets are at least 44px (links and small buttons) and 52px (default buttons, round controls, FAB). The photo wells, hero stage (`min(76vh, 780px)`, min 480px) and almond frames hold their aspect ratios (almond frames run 5/7 to 5/7.4).

Breakpoints: **1100px** switches the nav to the burger and full-screen menu, shows the floating "Appeler" FAB, and collapses the hero to one column. **899px** is the mobile layout: grids go single column, the pinned story becomes a stacked list, the pinned horizontal rail becomes a native scroll-snap row (`scroll-snap-type: x proximity`, cards `min(78vw, 340px)`), the gallery goes to 6 columns, and hero CTAs go full width. **420px** trims the hero size. Pointer queries gate behaviour: hover effects live inside `@media (hover: hover)`, tilt is switched off for `pointer: coarse`, and photo captions are always visible where hover does not exist.

### Named Rules
**The Page Edge Rule.** Content starts right of the gold margin rule and inside `--pad`; wide display type (the phone number, the footer wordmark) may bleed only through negative margins on its own line.

**The Curved Seam Rule.** Paper and cloth never meet along a straight horizontal line; every seam is a `--edge`-high ellipse (see Shapes).

## Elevation & Depth

Depth is mostly tonal: paper against cloth against gold, separated by curved seams and gold hairlines, with the photographs sitting flat in their almond frames (no shadow on clipped shapes). Where an element has to lift off the page (a card, a review note, the floating button, the map pill, the marquee band, the lightbox photo), it takes a long, soft, graphite-tinted shadow with a large negative spread, so it reads as a sheet or cover resting just above the table rather than as an outlined object.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 30px 50px -34px rgba(40,38,39,.65), 0 2px 6px rgba(40,38,39,.12)`): the cloth service cards on paper.
- **Note lift** (`box-shadow: 0 36px 60px -34px rgba(0,0,0,.6), 0 2px 8px rgba(0,0,0,.16)`): review sheets on cloth.
- **Float** (`box-shadow: 0 14px 30px -10px rgba(0,0,0,.45), 0 3px 8px rgba(0,0,0,.18)`): the FAB; the map pill uses `0 14px 30px -12px rgba(0,0,0,.5)`.
- **Band** (`box-shadow: 0 22px 40px -26px rgba(0,0,0,.45), 0 -10px 30px -24px rgba(0,0,0,.25)`): the tilted gold marquee.
- **Plate** (`box-shadow: 0 40px 80px -30px rgba(0,0,0,.7)`): the enlarged photo in the lightbox.
- **Ribbon** (`filter: drop-shadow(0 2px 3px rgba(0,0,0,.28))`): the gold marker follows its notched shape.
- **Cover edge** (`box-shadow: 12px 0 50px rgba(0,0,0,.35)`): the loader cover's page edge only.
- **Today halo** (`box-shadow: 0 0 0 5px rgba(220,202,155,.2)`): a spread ring around today's chart bar; no blur.

### Named Rules
**The Resting Sheet Rule.** Shadows are tall (14 to 40px offset), wide (30 to 80px blur), negatively spread (-10 to -34px), and graphite or black at .45 to .7 alpha; a short contact shadow (2 to 3px offset, .12 to .18 alpha) may sit under them. They describe a sheet resting above the page. Photographs, buttons and plain text blocks carry none.

## Shapes

The form language comes from the nail and the book.

- **Almond** (`clip-path: url(#almond)`, objectBoundingBox path `M.5 0 C.68 0 .82 .18 .92 .4 … Z`): the frame for every lead photograph (hero arches, story frames, card media, step images, the map well, gallery shots 4 and 5) and for the gold petals. Because a clip-path eats borders, its gold hairline is a stroked SVG overlay (`.arch__line`, 2.4px, `vector-effect: non-scaling-stroke`) added by script.
- **Rectangle with small radius**: only the three other gallery photographs (6px) and the enlarged lightbox photo (6px).
- **Fillet**: a double gold frame inset `clamp(12px, 1.8vw, 24px)` from the page edge, a 1px gold-line border at radius 3px with a second 1px frame at 6px inside it (radius 2px, 22% gold). On the cover, the menu and the story it is `--gold-line`; on the hero it is solid gold with the inner at 50%, and there it is inset below the nav (`--nav-h + 6px`) and clear of the ribbon and index-tab column on the right so no fixed element crosses it. It is the blind-stamped cover edge.
- **Smile and arch seams**: a paper (or gold) ellipse band, 120% wide and `--edge` high, offset -10% on the x axis. The smile (`border-radius: 0 0 50% 50% / 0 0 100% 100%`) hangs from the top of a cloth section; the arch (`50% 50% 0 0 / 100% 100% 0 0`) rises from the bottom. The gold booking page and the contact section each lift their own arch into the section above.
- **Hibiscus mark**: five almond-ish petals rotated 72° around a 9-unit centre dot, filled and stroked from `--mark-fill` / `--mark-line` (nav, cover, footer), outlined only as a huge background line-art (hero), or as a faint watermark (cards, booking page).
- **Pill**: buttons, FAB, map pill, chart bars, the review pause control (999px). **Circle**: round controls, lightbox controls, the accordion plus ring, the status dot (50%).
- **Radii**: 3px fillet, 4px note, 6px photo, 14px card, 999px pill, 50% circle. Focus ring radius is 3px.
- **Tilted marks**: the marquee band is rotated -1.6°; hand annotations -3°; the review stack fans at +2.2°, +4.4°, +5.4°.

## Components

### Buttons
- **Shape:** pill (999px), min-height 52px (44px for `--small`), padding .95rem 1.7rem (.65rem 1.15rem small), Jost 500 1rem, tracking .02em, `white-space: nowrap`, 1px border (transparent by default). An optional 1.2em line icon (stroke 1.5, round caps) sits to the left with a .7em gap.
- **Gold** (`btn--gold`): gold fill, graphite text. Hover fills paper from below. On cloth it is the primary action.
- **Ink** (`btn--ink`): graphite fill, paper text. Hover fills gold. The primary action on paper and on the gold booking page.
- **Line** (`btn--line`, alias `btn--line-ink`): transparent, graphite text and 1px graphite border. Hover fills graphite and the text turns paper. The secondary action (Instagram).
- **Liquid fill:** a `::before` layer (`border-radius: 50% 50% 0 0 / 80% 80% 0 0`) rises from `translateY(105%)` to 0 while its radius flattens to 0, `.65s` with the expo ease; the text colour switches over `.55s`. Only under `(hover: hover)` and on `:focus-visible`.
- **Magnetic:** on fine pointers, buttons, the gallery link and the phone number follow the pointer (up to ±16px, factor .22, .1 for the phone), their label and icon drift a little further, and they settle on leave.

### Text Link
- Inline-flex, min-height 44px, a 1px underline drawn under the label by growing `background-size` from 0 to 100% over `.6s`, and the trailing arrow (2.4em wide line arrow) slides 6px. Variants: gold (on cloth), light (footer). The underline also shows on `:focus-visible`.

### Navigation
- Fixed, 76px, brand left (36px mark plus "SéGa Nails" in Bodoni 1.45rem), five links in Jost .98rem with a 1px underline that draws in from the left and retracts to the right, and a small gold "Appeler" button. Transparent at the top, solid paper with a rule border after 40px of scroll. It hides (`translateY(-101%)`) when scrolling down past 160px and returns on scroll up.
- At 1100px and below the links and button give way to a "Menu" toggle with two 1.5px bars that cross to an X. The menu is a full-screen cloth sheet with a fillet, revealed by `clip-path: inset(0 0 100% 0)` to `inset(0)` over .9s with the expo in-out ease; links are Bodoni `clamp(2.6rem, 12vw, 4.8rem)`, each masked and sliding up with a .07s stagger, the footer (number, Instagram) fading in last. An active or focused link turns italic gold.
- **FAB:** a gold pill "Appeler" fixed bottom-right at 1100px and below, slides in after 75% of the viewport height, hides while the booking page, contact section or footer is visible.

### Ribbon
- A fixed gold marker on the right edge, `clamp(8px, .9vw, 14px)` wide (6px on mobile), full height, with a swallow-tail clip (10px notch). It slides down as the page is read, from 88px showing to fully shown at the end, and carries the ribbon drop shadow.

### Index tabs
- At 1101px and wider, five gold tabs hang on the right edge just inside the ribbon, vertically centred: Jost 500 .74rem uppercase, tracking .14em, graphite text set vertically (`writing-mode: vertical-rl`, turned 180° so it reads bottom to top), 7px radius on the free (page-facing) corners, a 1px graphite ring at 28% to hold the edge on paper, 5px apart. The tab for the section in view (observed at the viewport middle) turns paper with a graphite ring and slides 7px out; hover does the same under `(hover: hover)`. They are `aria-hidden`, out of the tab order, and repeat the top navigation as a visual aid only; hidden at 1100px and below and while the cover is up.

### Cards (service rail)
- Cloth cards, 14px radius, padding 1.1rem 1.1rem 1.4rem, width `clamp(272px, 26vw, 380px)`, carrying the cloth weave on their own background, an almond photo (aspect 5/6.4), a Bodoni title, a body line at paper 80%, and a gold uppercase label ("Tarif sur demande"). Even cards drop by `clamp(2rem, 6vh, 4.5rem)` on desktop to stagger the rail.
- Two closing cards end the rail: the **gold card** (gold fill, graphite text, graphite ink button, a faint hibiscus watermark) and the **framed cloth card** (cloth, 1px gold-line border, gold title, gold button, watermark).
- **Tilt and glare:** on fine pointers, cards and gallery shots rotate toward the pointer (9° cards, 7° shots, perspective 1000, `power3.out` .7s, release `expo.out` 1.1s) while a radial paper glare (32% white, 55% falloff) fades in at the pointer. Disabled on coarse pointers.

### Review notes
- A paper sheet (4px radius, note lift shadow) with a huge Bodoni quotation mark (`clamp(5rem, 9vw, 8rem)`, gold-ink) pinned to its top-left, an italic Bodoni quote, and an uppercase tracked gold-ink attribution. The five sheets are stacked on cloth: the front sheet is flat, the next three fan out at +28px/+20px 2.2°, +54px/+38px 4.4°, then hide. Advancing flies the front sheet off to the left (-90px, -9°, `power3.in` .55s) and re-seats the rest with `expo.out` .9s. Autoplay every 7.5s, paused on hover, focus, and by the "Pause" toggle (`aria-pressed`), starts paused under reduced motion; swipe over 50px, arrow keys, and round prev/next controls (52px, gold-line border, fill gold on hover). Without JavaScript the sheets stack as plain blocks.

### Question accordion
- A native `<details>` list under a 1px graphite top rule, paper background, rows divided by `--line`. Summary min-height 72px, Bodoni question text, and a 34px ring with a drawn plus (two 12 x 1.5px bars). Open: the ring turns 180° and fills graphite with paper bars; hover fills gold. Answers are soft ink at max 40rem with gold-ink underlined links. Height animates with GSAP (`expo.out` .8s open, `expo.inOut` .6s close); opening one closes the others; native behaviour without JS or under reduced motion.

### Hours table
- Bodoni day names, tabular Jost times right-aligned, 1px rule between rows, closed days in soft ink. Today's row (set by script from Brest time) is italic gold-ink with a medium-weight time and `aria-current="date"`, and a hand-drawn ellipse (gold-ink, 1.6px, round caps, non-scaling) is drawn around it with `stroke-dashoffset` over 1.6s.

### Week chart and counts
- On cloth: hours rendered as floating gold pills on a 10h to 19h axis (ticks every 2h, 1px `--line`, tick labels .82rem soft on cloth), one column per day with the bar inset 16%, the day name in Bodoni and hours below. Closed days show a dashed vertical and an italic dim label; today's bar gets the halo and a gold italic name. Beside it, three counted facts in gold numerals, laid out as ruled rows (1px `--line` above each and below the last), counting up over 2.4s with `power3.out`.

### Marquee
- A full-bleed gold band tilted -1.6° (margin -4vw), Bodoni italic `clamp(1.9rem, 4.4vw, 3.8rem)` in graphite, almond glyphs as separators. Speed is 70px/s plus scroll velocity (capped at 2600, factor .22) and the direction follows the scroll direction. Under reduced motion the track wraps statically.

### Gallery shot and lightbox
- Each photograph is a button with its own mask reveal (circle, curtain, diagonal, or almond). The caption (Bodoni italic 1.25rem on a graphite scrim) slides up on hover or focus, and is always shown where there is no hover. The lightbox is a native `<dialog>` with a 94% graphite backdrop, a centred plate (max 720px wide, 78vh tall, 6px radius, plate shadow), an italic Bodoni caption, and 52px round gold-line controls (previous, next, close); keyboard arrows, outside-click close, and focus returns to the opener.

### Status line
- A 9px gold-ink dot and one live sentence computed from Brest time: the long date, then open now until a time, or closed and when it opens next. Open: the dot pulses a ring (`ping` 2.4s). Closed: the dot is hollow.

### Motion

Motion is slow, physical, and expo-eased; the page moves like pages and covers, not UI chrome.

- **Easing:** CSS uses `--ease: cubic-bezier(.16, 1, .3, 1)` (expo out) for transitions and `--ease-io: cubic-bezier(.76, 0, .24, 1)` (expo in-out) for the menu sheet. GSAP uses `expo.out` for reveals, `expo.inOut` for the cover, wipes and curtains, `power3.out` / `power3.in` for pointer follow and the exit of a note, `power2.inOut` for line drawing, `power2.out` for fades. Idle loops (photo breathing at 14 to 18s, petals) use `sine.inOut`.
- **Properties:** transform, opacity, clip-path, and stroke-dashoffset first. The accordion animates height; the blur heading reveal animates `filter` and clears it on completion.
- **One heading reveal per section, all different:** accueil words masked up (`yPercent` 118, stagger .09, 1.7s); savoir-faire characters up; prestations words in from the left; la semaine a clip-path wipe; galerie characters flip in on X; avis a blur-in; questions typed one character at a time; rendez-vous a pop with `back.out(1.5)`; nous trouver characters drop from above. Each section heading triggers once at 88% of the viewport (the accueil heading plays after the cover opens). Supporting copy fades up 34px over 1.3s once.
- **Cover:** the loader cover is a cloth page with fillet, mark, name, and a progress hairline; once fonts and the lead photo are ready (and a minimum time has passed), the book opens by `rotationY -106deg` from the spine over 1.7s (`expo.inOut`), with a shade fading in, and the hero then plays its entrance. A CSS failsafe hides the cover at 9s.
- **Scroll:** Lenis smoothing (lerp .09); anchors scroll over 1.8s with a quartic ease-out; the savoir-faire section pins for 430% with scrubbed clip-path photo changes, and prestations pins and scrubs horizontally; the hero layers parallax by depth and follow the mouse on fine pointers; the footer mark turns with scroll.
- **Content visible by default:** hidden start states are set by script when it initialises, never in CSS; layouts that need script (cover, review stack, pinned story) are gated by the `js` class; a `<noscript>` block restores plain layouts; if initialisation throws, a rescue clears every inline style and removes the cover.
- **Reduced motion:** script skips the whole motion layer, removes the cover, stacks the story with cloned photos, starts reviews paused, lets the marquee and the rail wrap statically; CSS also reduces every animation and transition to .01ms.

## Do's and Don'ts

### Do:
- **Do** alternate cloth and paper sections and join every seam with the smile and arch ellipse (`--edge` high, 120% wide); punctuate with the gold band and the gold booking leaf.
- **Do** read colour through `--fg`, `--fg-soft`, `--accent`, `--line` and `--focus` so any component works on both paper and cloth.
- **Do** use gold-ink #7A6633 for every piece of gold text on paper, gold #DCCA9B for text on cloth, and graphite #464445 for text on gold.
- **Do** make the primary action graphite on paper and gold, gold on cloth, a 999px pill at 52px minimum height (44px small) with the liquid fill on hover and focus.
- **Do** frame lead photographs in the almond with a drawn gold hairline overlay and no shadow; reserve 6px rectangles for the gallery wall and the lightbox.
- **Do** set display type in Bodoni Moda at weight 400 with optical sizing and tight leading (.88 to 1.0) and negative tracking; set reading text in Jost 400 at `clamp(1rem, .96rem + .22vw, 1.12rem)` / 1.62.
- **Do** use La Belle Aurore for a short annotation rotated -3° (or the hand-drawn ellipse), nothing longer.
- **Do** give each section heading its own reveal and trigger it once; supporting copy rises 34px and fades over 1.3s.
- **Do** keep shadows tall, soft and negatively spread (Resting Sheet Rule), graphite-tinted.
- **Do** keep a 2px focus ring in `--focus` at 4px offset, hit areas at 44px or more, and pointer effects (tilt, magnetic, mouse parallax) behind fine-hover checks.
- **Do** keep hidden start states in script, ship the plain layout without it, and give every moving element a reduced-motion path.

### Don't:
- **Don't** set text in #DCCA9B on paper (1.5:1); that gold is for surfaces, hairlines and type on graphite.
- **Don't** add a hue beyond the three brand colours and their listed derivatives; the nail photographs supply the colour.
- **Don't** cut paper to cloth with a straight horizontal edge.
- **Don't** fall back to the beauty-salon template: pastel hero, three icon cards, stock photo grid.
- **Don't** frame lead photography in plain rectangles or circles outside the gallery wall.
- **Don't** square a button or give it a radius other than the pill; cards are 14px, notes 4px, photos 6px.
- **Don't** hardcode a paper or cloth colour inside a component that has to live on both.
- **Don't** drive scroll choreography with width, height, top or left; transform, opacity, clip-path and stroke-dashoffset do that work.
- **Don't** repeat a heading reveal style within the page, and don't hide content in CSS while waiting for script.
- **Don't** show a hover-only affordance on touch; captions, controls and states must exist without hover.

### Not canonized
The build carries these defects and drift; they are recorded here and are not house rules for new surfaces. (1) The hero H1 "tiennent" and the booking h2 "rendez-vous" are set in Bodoni italic and are flagged by the detector as italic-serif-display. (2) The cloth weave is two stacked `repeating-linear-gradient` layers, copied verbatim onto `.card` rather than tokenised, and the paper ruling is a gradient too; both are surface textures, not a precedent for gradient fills. (3) The nav "Appeler" button, the FAB and the index tabs are gold on paper, which contradicts the Primary Inverts Rule (1.5:1 edge; the tabs hold their edge with a 1px graphite ring). (4) Uppercase tracked micro-labels (loader subtitle, scroll hint, card note, review attribution, index tabs) are functional but label-like, and chart hours and the index tabs at .74rem sit under 12px; none is a pattern to extend. (5) Ambient infinite loops (status ping, scroll hint, photo breathing, drifting petals) carry no information and are handled by reduced-motion only; they are not a rule. (6) Untokenised literals: the hex fallbacks on the mark selectors, the loader shade #1d1b1c, the darker graphite rgba(40,38,39) tints, and the unused `--edge-bg`. (7) Emoji appear only inside verbatim client quotes, not as interface icons.
