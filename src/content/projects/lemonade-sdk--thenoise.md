---
repo: "lemonade-sdk/thenoise"
name: "thenoise"
description: "A text-to-image diffusion inference engine."
readmeQualityOk: true
url: "https://github.com/lemonade-sdk/thenoise"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 16
forks: 2
openIssues: 4
closedIssues: 5
watchers: 0
contributors: 9
recentReleases: 8
createdAt: "2026-08-04T13:59:33Z"
lastCommitAt: "2026-08-28T14:36:58Z"
lastReleaseAt: "2026-08-24T16:53:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 48
maintainers: ["bitgamma", "choppu", "ckuethe"]
openGraphImageUrl: "https://opengraph.githubassets.com/04c74a5ed4a00b6f3e41b9b4892206f744437fd430bb400c506d69409d7c19cb/lemonade-sdk/thenoise"
---

# TheNoise

A text-to-image diffusion inference engine. Tested on Strix Halo, Strix Point and Krackan Point.

Loads one model at a time and generates images from text prompts. Editing-capable models can also edit existing images from a text instruction (image + prompt → edited image). Available as a CLI tool, an HTTP API (with a simple web UI).

<details open>
  <summary>Generate tab</summary>
</details>
<details>
  <summary>Edit tab</summary>
</details>
<details>
  <summary>Upscale tab</summary> 
</details>

---

## Why? ComfyUI exists

Yes, and ComfyUI will always be better than this for the advanced user. This is good for the following scenarios:

1. You got a Strix Halo (congratulations!) and want to quickly start generating images
2. You don't want to care about "workflows"
3. You want to add an easy but powerful image generation endpoint for usage through other software
4. You want something targeted at your machine. Our goal is to optimize this for Strix Halo as much as possible.

---

## Acknowledgments

This project incorporates code from:

1. [Musubi Tuner](https://github.com/kohya-ss/musubi-tuner)
2. [SD Scripts](https://github.com/kohya-ss/sd-scripts)
3.…
