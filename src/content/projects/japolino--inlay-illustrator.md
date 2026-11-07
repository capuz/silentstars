---
repo: "japolino/inlay-illustrator"
name: "inlay-illustrator"
description: "Persistent character image generation with dynamic visual memory, context-aware prompt parsing, inline chat images, asset mode, Anima/ComfyUI prompt output, and optional tag cleanup."
readmeQualityOk: true
url: "https://github.com/japolino/inlay-illustrator"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-08T18:09:20Z"
lastCommitAt: "2026-11-07T22:24:07Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 54
maintainers: ["japolino"]
openGraphImageUrl: "https://opengraph.githubassets.com/2744d2be43ac04e04b90846df64673fe213b1903d4e6a6f7eb124ccd13425574/japolino/inlay-illustrator"
---

# Inlay Illustrator

Inlay Illustrator draws illustrations into your Lumiverse chats and manages the look of your characters. Version 0.10
replaces the old Lightboard pipeline of 0.9.x.

## What it does

- **Scene illustrations.** After a reply, an LLM analyzer reads the message and plans images for its paragraphs. The images
  are generated with your Lumiverse image connection and shown between the paragraphs. The image blocks are removed
  from the prompt before every LLM request, so the model never sees them.
- **Chat controls.** Under each reply: generate, reroll, retry and cancel, plus a revision pager. On each image: previous /
  next image, regenerate, and a click opens the zoom viewer.
- **Zoom viewer.** Image history, prompt editing, character coordinates, seed and size, artist and outfit choice,
  AI prompt edit, delete image or slot, and the accumulated chat state.
- **Character asset manager.** A full-screen workspace per character: roster (lorebook characters, custom characters,
  personas), prompt analysis from text or images, forms and outfits, reference images, outfit image generation,
  artist presets, per-character settings.
- **Count panel** in the chat: how…
