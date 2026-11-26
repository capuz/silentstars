---
repo: "for-real-labs/brickbuilder-ai"
name: "brickbuilder-ai"
description: "LEGO Design Agent"
readmeQualityOk: true
url: "https://github.com/for-real-labs/brickbuilder-ai"
homepage: "https://brickbuilder.ai"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["agents", "ai", "art", "creative", "lego", "agent"]
stars: 36
forks: 9
openIssues: 29
closedIssues: 11
watchers: 2
contributors: 3
recentReleases: 4
createdAt: "2026-06-17T20:09:31Z"
lastCommitAt: "2026-11-26T23:36:14Z"
lastReleaseAt: "2026-11-26T21:27:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 42
maintainers: ["jjohnson5253"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b7b88f5454d5450231ba6fec0b6bac4afda5251de6578165398949abe6e7061/for-real-labs/brickbuilder-ai"
---

# BrickBuilder

**A LEGO® building agent.** Tell Pip what you want to build, or give it a reference image. BrickBuilder uses an LLM to design the model, checks the build, and gives you a 3D preview, building instructions, a parts list, and downloadable LDraw files. You can ask for changes and keep building from the result.

## Use in ChatGPT

[Add the BrickBuilder plugin to ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_6abee10605488191a105dfe0a2f045d4) to build with BrickBuilder from your chats.

## Choose your builder

| Mode | How it builds |
| --- | --- |
| **Basic bricks** | An OpenAI or Claude model designs shapes on a stud grid. BrickBuilder checks the design, shows the model a preview for revisions, and converts the result into bricks. |
| **All parts** | The [Nova agent](https://github.com/jjohnson5253/ldraw-nova) works with a wider parts catalog. It can search parts, write building scripts, render and check its work, and continue the same build when you ask for an edit. |
