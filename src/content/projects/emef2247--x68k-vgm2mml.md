---
repo: "emef2247/x68k_vgm2mml"
name: "x68k_vgm2mml"
description: "Conversion from VGM to MDX MML"
originalDescription: "Conversion from VGM to MDX MML"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/emef2247/x68k_vgm2mml"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-10-04T03:34:11Z"
lastCommitAt: "2026-11-04T11:27:16Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 40
maintainers: ["emef2247"]
openGraphImageUrl: "https://opengraph.githubassets.com/2694cb88ffff81ab7c08044c3d4ca61df79e2db414f0e0638005c47b50bd493f/emef2247/x68k_vgm2mml"
---

# x68k_vgm2mml

This tool extracts performance information such as notes, note lengths, volume, and timbres from register operations recorded in VGM, and generates structured MML for X68000 (for MDX) and PCM IR.
Requires Python 3.10 or later.

## Usage

### Generate MML and PCM IR by specifying a VGM file

```bash
# Generate MML only
python vgm2mml.py INPUT.vgm --outdir OUTDIR
```

If you want to automatically perform everything from MML generation through MDX generation, use `scripts/export_mdx.py` (described below).

### Batch convert a directory containing VGM files to MML, PCM IR, and MDX/PDX

Specify the directory containing the VGM files to convert them in batch.

```bash
# Automatically converts not only to MML but also through to MDX/PDX.
python scripts/export_mdx.py INDIR --outdir OUTDIR --force
```

By default, the VGM's whole-song loop is not used, and an MDX that ends after one pass is generated (to help large songs fit within the limits). To render the VGM's whole-song loop as a second pass with saved state:

```bash
python scripts/export_mdx.py INDIR --outdir OUTDIR --force --vgm-song-loop
```

Generating MDX requires an MDX compiler such as MXC or mmlx. PDX…
