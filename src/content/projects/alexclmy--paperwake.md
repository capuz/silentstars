---
repo: "alexclmy/Paperwake"
name: "Paperwake"
description: "Paperwake — a local-first e-ink dashboard hub for the NOTE4C four-color e-paper panel."
readmeQualityOk: true
url: "https://github.com/alexclmy/Paperwake"
language: "C"
languages: ["C", "TypeScript", "C++"]
languagePcts: [44, 28, 24]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-20T16:15:16Z"
lastCommitAt: "2026-10-21T23:36:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 12
maintainers: ["alexclmy"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8edd4ef2b0eca00fe4774d05a85a0f26d46d2f5b43d1e4f66745c9d44a1e200/alexclmy/Paperwake"
---

# Paperwake

**A calm, four-colour e-paper display for your home: designed on your own
machine, delivered over your own network, running on a battery.**

the bytes for the device, run over made-up sample data. No mock-ups.</sub>

Paperwake turns a [ZECTRIX ESP32-S3 e-paper panel](https://wiki.zectrix.com)
(the NOTE4C: 400 × 300, a four-colour black · white · red · yellow panel) into
a quiet display for a desk, a wall or the fridge door. Weather, your agenda,
Home Assistant sensors, a countdown, a picture, a note to the house: composed
in a paper-styled web app on your computer and pushed to the panel over your
LAN.

No cloud. No account. The composer binds to `localhost`, and the panel sleeps
between updates the way e-paper should.

---

## What you get

### An editor where the preview *is* the panel

Drop blocks onto a fine **16 × 12 grid** (25-pixel cells), move and resize
them with the mouse or the keyboard, or press **Auto layout** to re-pack a
composition into tidy rows. *Auto* variants pick the format that suits each
block's size. The canvas is painted by the same deterministic renderer that
produces the device's bytes: same dithering, same pigments, pixel for pixel.

###…
