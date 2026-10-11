---
repo: "ClementPla/Didascalie"
name: "Didascalie"
description: "Desktop annotation tool for medical images: segmentation, keypoints, registration, gigapixel slides, volumes and multi-annotator review. Runs locally, one file per project."
readmeQualityOk: true
url: "https://github.com/ClementPla/Didascalie"
homepage: "https://didascalie.readthedocs.io/en/latest/"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [42, 26]
topics: ["deep-learning", "image", "image-analysis", "image-classification", "image-segmentation", "label", "labeling", "labeling-tool", "labels", "annotation-tool"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-11-14T22:42:01Z"
lastCommitAt: "2026-10-11T10:14:53Z"
lastReleaseAt: "2026-07-08T12:50:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 70
maintainers: ["ClementPla"]
openGraphImageUrl: "https://opengraph.githubassets.com/3051d81087885b06593e5792397a74b2251f72fab4a50bbfd185b5592dd0bcdb/ClementPla/Didascalie"
---

A desktop tool for annotating medical images, running entirely on your own machine.

  ·
  ·
  ·

---

Didascalie annotates medical images with segmentation masks, vector shapes, classification labels and keypoints. Drawing, image processing and model training all run on your computer. Nothing is uploaded.

It started as a personal project, out of frustration with the tools I knew. Many researchers and clinicians still annotate images in Paint or PowerPoint, and the tools built for the task often assume skills they don't have: asking a clinician to `pip install` a package and run a script is less trivial than it sounds. Didascalie is an installer and a project file.

The core annotation workflow is usable day to day and has been used in published research. The project is under active development, and the features marked *experimental* are less reliable.

A *didascalie* (*di-da-ska-LEE*) is the French word for a stage direction, one of the notes in a play script. Annotations are notes added to data.

## What it does

- **Segmentation masks**, painted with pen, line and lasso tools, one mask per label. Instance segmentation is supported.
- **Vector shapes** on the same image, with…
