---
repo: "CodeOneLabs/OneText"
name: "OneText"
description: "A free, MIT-licensed text engine for Unity uGUI. HarfBuzz shaping, full bidi, SDF atlas in one draw call — rich text, colour emoji, animation and an IME-correct input field in the box."
readmeQualityOk: true
url: "https://github.com/CodeOneLabs/OneText"
language: "C#"
languages: ["C#"]
languagePcts: [89]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-04T16:33:53Z"
lastCommitAt: "2026-08-20T04:07:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 42
maintainers: ["CodeOneLabs"]
openGraphImageUrl: "https://opengraph.githubassets.com/3474e6637e554ec15af9e037f3ee7847d175046c91f96b074960f7946cd7a2c0/CodeOneLabs/OneText"
---

# OneText

**Every language. One draw call.**

Thai stacks. Arabic joins. Emoji stay whole. OneText is a free, MIT-licensed
text engine for Unity uGUI, built on the shaping stack the rest of the world
already trusts: HarfBuzz + FreeType, same as Chrome, Android and InDesign.

*Same string. Same font. Same box. Only the engine differs.*

## Install

Two steps. No baking.

**Window > Package Manager > + > Add package from git URL…**

```
https://github.com/CodeOneLabs/OneText.git
```

That is the whole install; the HarfBuzz/FreeType natives ship inside the
package. Then **GameObject > UI > OneText > Label**, assign a font, and type in
any language on Earth. For text in the world rather than on a canvas —
nameplates, signs, diegetic UI — add `OneTextMesh` instead: the same pipeline
through a MeshRenderer, no Canvas and no uGUI dependency at all. Shipping
Thai, Lao, Khmer or Burmese? Import the **Word-break dictionaries** sample so
those scripts wrap on real word boundaries.

## In the box

One package. Every feature. Nothing sold separately.

- **Shaping & bidi** — HarfBuzz GSUB/GPOS and full UAX #9. Arabic, Devanagari,
  Thai, Khmer, Myanmar, Tibetan: contextual forms, reordering,…
