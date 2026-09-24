---
repo: "Crafter-Development-Team/Crafter"
name: "Crafter"
description: "Crafter - Aims to be a comprehensive Blender plugin for the entire workflow from Minecraft to Blender."
originalDescription: "Crafter-目标是成为从Minecraft到Blender全流程的Blender插件。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Crafter-Development-Team/Crafter"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-12-07T14:08:53Z"
lastCommitAt: "2026-09-24T08:41:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 64
maintainers: ["snzhongcheng", "TowableSpace694", "mcl0z"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b382d32b4255aa40b834886d5f2a06bd9add807d9f52623c39f546366797381/Crafter-Development-Team/Crafter"
---

# Crafter

## Compatibility Range

- Windows system
- Minecraft version greater than 1.12

## Usage

### Installation

Same installation method as other plugins

- For versions above 4.2, install Crafter_exr.zip

- For versions below 4.2, install Crafter.zip

---

-*【Since the plugin includes a compiled C++ program, being flagged as a virus is normal. If unsure, you can verify the code in [WorldImporter](https://github.com/BaiGave/WorldImporter), compile and replace it to confirm safety】*

### Import

## tint Interface Convention (Preset Authors)

When importing, WorldImporter outputs the tint metadata for each material in `importer/tint.json`. The plugin supplies according to the following conventions as needed:

- Named Biome Input: As long as the CI group exposes any one of `grass`/`foliage`/`dryfoliage`/`water`/`waterFog`/`fog`/`sky`, the plugin will add the `Crafter-biomeTex` node as needed and connect it to the corresponding output (regardless of metadata, provide if the CI wants it).
- Unified Interface (Optional):
  - `tint_color` (Color): When metadata has `kind`, biome class connects to the corresponding biome texture output, `fixed` type writes the linear constant color…
