---
repo: "COBECTb/vptc-calc"
name: "vptc-calc"
description: "VPTC Calculator"
originalDescription: "Калькулятор ВПТК"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/COBECTb/vptc-calc"
language: "OpenSCAD"
languages: ["OpenSCAD", "Python"]
languagePcts: [62, 37]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-19T20:08:30Z"
lastCommitAt: "2026-10-18T08:15:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 35
maintainers: ["COBECTb"]
openGraphImageUrl: "https://opengraph.githubassets.com/da624c2b3bb129bf2a54b79eeb5804a5af8b8c09633b23615b99bf36b2e0a31f/COBECTb/vptc-calc"
---

# vptc-calc
VPTC Calculator (Wave Reducer with Rollers)

## Launch

```
docker build -t vptc-calculator .
```

```
docker run --rm -it \
  -v "$(pwd)/calc-vpts.py":/app/calc-vpts.py:ro \
  -v "$(pwd)/encoder_scad.py":/app/encoder_scad.py:ro \
  -v "$(pwd)/output":/app/output \
  vptc-calculator
```

## Description

The calculator generates a 3D model of a roller wave reducer (VPTC - Variable Pace Traction Coupling) with user-defined parameters. The file vptc_roller.scad is placed in the output folder and must be opened in OpenSCAD.

Existing files are protected from being overwritten. To produce a new result, specify `--output`, and to deliberately overwrite a chosen file, use `--overwrite`.

### Absolute Encoder Variants

The generator now includes a new clamp, both connectors, a cover base, a front cover, and a bearing/separator assembly. The original part modules and the `legacy` mode are preserved. Example without interactive input:

```sh
python calc-vpts.py --resolution 600 --ratio 19 --roller-d 4 --roller-h 5 \
  --rout 28 --diameter 70 --part encoder_assembly \
  --output output/encoder_reducer_generated.scad
```

Alongside it, `*.encoder.json` is saved: ring dimensions,…
