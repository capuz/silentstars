---
repo: "gregowahoo/comfyui-ingredients-sheet-builder"
name: "comfyui-ingredients-sheet-builder"
description: "Build LTX-2.3 IC-LoRA Ingredients reference sheets from your own images — any layout, per-panel captions, and trained-format prompt output. Stop using Ideogram."
url: "https://github.com/gregowahoo/comfyui-ingredients-sheet-builder"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-20T17:50:01Z"
lastCommitAt: "2026-06-25T01:38:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 22
maintainers: ["gregowahoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/397ab1ec208ec235ab3a1e546161956361bcffa91bab610c63eee38b2d150344/gregowahoo/comfyui-ingredients-sheet-builder"
---

# ComfyUI Ingredients Sheet Builder

A focused ComfyUI custom node that builds a clean **reference sheet** for the
[LTX-2.3 IC-LoRA Ingredients](https://huggingface.co/Lightricks/LTX-2.3-22b-IC-LoRA-Ingredients)
model, and assembles the panel descriptions into the clean prose format that model expects.

Wire in your character/prop images and a location image, give each panel a name and a
description, and the node composes them into one composite sheet — character panels in a
top row, the location as a full-width band, with uniform black gutters like Lightricks'
own example sheets. It also outputs the reference-sheet prompt as clean semicolon prose.

---

## What it does

The Ingredients model conditions video generation on a **reference sheet** — a single
composite image inventorying the characters, props, and location of a scene — so generated
videos keep those elements visually consistent. This node produces exactly that, with no
layout modes or templates to configure.

- **Character / prop panels** go in one row across the top, each shown **whole** at its true
  aspect ratio — never cropped (no cut-off heads/feet) and never squished. The row scales to
  fill the width when it…
