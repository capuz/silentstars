---
repo: "Heerozh/PromptUGUI"
name: "PromptUGUI"
description: "A solution that enables Unity uGUI development through LLM."
readmeQualityOk: true
url: "https://github.com/Heerozh/PromptUGUI"
language: "C#"
languages: ["C#"]
languagePcts: [98]
topics: ["ui-framework", "unity", "unity-ui", "agentic-workflow", "ai"]
stars: 84
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-07T12:51:39Z"
lastCommitAt: "2026-09-16T08:47:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 23
maintainers: ["Heerozh"]
openGraphImageUrl: "https://opengraph.githubassets.com/147b9b13eae8b89414bf774798e52acd0d77f1026fc8cf2bf3659c840c0f83d5/Heerozh/PromptUGUI"
---

# PromptUGUI

[English](#promptugui) | [中文](#promptugui-中文)

A solution that enables Unity 2022.3+ / Unity 6+ UI development through LLM.

It provides an extremely concise UI description language `.ui.xml` & `.pxl` , and a runtime parser that translates it into a uGUI hierarchy + Sprite images.

More flexible than UI Toolkit, easier for custom styling, and tightly integrated with the GameObject system.

## WebGL Demo Page

This demo interface was created entirely by Code Agent, including the border images, icons, and more.

<https://heerozh.github.io/pugui/>

## Features

- **Minimal XML description language, tailored to how LLMs write**
  - Hot reload — edit, save, see the result instantly
  - Fully reactive UI support — automatically switches layout to match the screen and device
  - Pixel-art-style UI support
  - Liquid-glass-style UI support
  - Automatic XSD schema validation + built-in syntax-check CLI
- **Sprite image description language in the X PixMap / GIMP style**
  - Another text format LLMs are already familiar with
  - No image-generation model required — a Code Agent can draw UI art and adjust its style straight from text descriptions
  - This is the way
- **Rich…
