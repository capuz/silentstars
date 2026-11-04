---
repo: "HuanPP/TeXDeck"
name: "TeXDeck"
description: "Turn a PDF into a finished LaTeX Beamer deck. The template file is the prompt."
readmeQualityOk: true
url: "https://github.com/HuanPP/TeXDeck"
language: "Python"
languages: ["Python", "TeX"]
languagePcts: [46, 41]
topics: ["academic", "beamer", "latex", "llm", "pdf", "presentation", "python", "react", "slides", "xelatex"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-25T11:06:44Z"
lastCommitAt: "2026-11-04T02:43:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 9
maintainers: ["HuanPP"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1311912540/4277d5b6-667e-4874-bdb9-3588b1edc65f"
---

English | [简体中文](https://github.com/HuanPP/TeXDeck/blob/HEAD/README.zh-CN.md)

# TeXDeck

Group meetings, conference talks, thesis proposals, project updates. Point it at a quarterly report instead and it won't complain, but slides for research work are what it was built around.

The document on the left of that picture is [`docs/demo/gold-price-2024.pdf`](https://github.com/HuanPP/TeXDeck/blob/HEAD/docs/demo/gold-price-2024.pdf), shipped with the repo so you can run the same thing yourself.

You upload a paper — or several PDFs that read in order as one pack — or just paste text, pick a template, and a vision model reads the pages and writes a complete `main.tex` against that template. XeLaTeX compiles it. About thirty to sixty seconds later you have a PDF, the `.tex` behind it, and a zip you can drop straight into Overleaf. Slides come back in English whatever language the source is in; ask for another language in the instructions and you get that instead.

## Seven templates

| Key | Name | Origin | License |
|---|---|---|---|
| `academic` | Academic (Palatino) | collegeBeamer derivative | CC BY 4.0 |
| `emerald` | Emerald | collegeBeamer derivative | CC BY 4.0 |
| `graphite` |…
