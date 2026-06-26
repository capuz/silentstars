---
repo: "JanWilczek/wolf-sound-blog"
name: "wolf-sound-blog"
description: "Source code of my WolfSound audio programming blog. The site runs on Eleventy and can be found under www.thewolfsound.com."
url: "https://github.com/JanWilczek/wolf-sound-blog"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [51, 23]
stars: 34
forks: 6
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-05-14T19:16:54Z"
lastCommitAt: "2026-06-26T06:47:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 39
maintainers: ["JanWilczek", "dependabot[bot]", "sathira10"]
openGraphImageUrl: "https://opengraph.githubassets.com/74f01403d94efbdc50a3eba4753ca81f640ff6df910fbef68cf8b1e9c5119a31/JanWilczek/wolf-sound-blog"
---

# WolfSound Blog

Source code of my WolfSound audio programming blog. The site runs on Eleventy and can be found under [https://thewolfsound.com](https://thewolfsound.com).

## Useful commands

Before you build the website or run in dev mode, run

```bash
npm install

git lfs install
git lfs pull # to get the actual images locally

npx gulp # to package local dependencies
```

to copy the CSS assets to the right folders.

To run the test server

```bash
npx @11ty/eleventy --serve
# or
npm start
```

To build the website to the *_site* folder.

```bash
npm run build
```

To build pngs from latex files:

```bash
latexmk filename.tex -shell-escape
```

To resize a png image and convert it to a webp image:

```bash
cwebp Thumbnail.png -q 65 -s 1024 0 -o Thumbnail.webp
```

## Running Python code

To run Python code, create a virtual environment first.

```bash
python -m venv venv # create virtual environment

# activate it
source venv/bin/activate # or .\venv\bin\Scripts\Activate.ps1 if you're using PowerShell

pip install . # install dependencies
```

You can then run the scripts like usual.

```bash
python _py/posts/synthesis/2025-03-01-fm-synthesis/fm_synthesis.py
```

## Eleventy…
