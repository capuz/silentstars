---
repo: "sressky12-ux/PaintDeck"
name: "PaintDeck"
description: "PaintDeck (繪匣): a Windows desktop app for local AI image and video generation (ComfyUI front end, Rust + Tauri 2). Formerly the Anima 生圖站 image generation site."
originalDescription: "繪匣 PaintDeck：Windows 本機 AI 生圖／影片桌面程式（ComfyUI 前端，Rust + Tauri 2）。舊名 Anima 生圖站。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/sressky12-ux/PaintDeck"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [45, 35]
stars: 27
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-24T06:10:21Z"
lastCommitAt: "2026-11-07T13:54:22Z"
lastReleaseAt: "2026-10-31T02:05:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 33
maintainers: ["sressky12-ux"]
openGraphImageUrl: "https://opengraph.githubassets.com/d72d14f4f2427a6db277b7f0e713ebf722db4a6293f4dde5c6500b0a8fd5a196/sressky12-ux/PaintDeck"
---

# PaintDeck (繪匣)

> Formerly "Anima 生圖站" (Anima image generation site); renamed and open-sourced on 2026-10-24.

A program for drawing images on your own Windows or Linux computer. It uses [ComfyUI](https://github.com/comfyanonymous/ComfyUI) as the engine and wraps these model families in a Chinese-language interface: anime (Anima), photorealistic (Qwen-Image 2.1), typography and text rendering (MOSS-Image), and video (built-in LTX-2.3, which can also be swapped for your own ComfyUI video workflow). Images are generated and stored locally, without passing through anyone else's server.

> **English:** A Windows/Linux front-end for local image/video generation on top of ComfyUI (Rust + Tauri 2, plain-JS web UI). On Linux it also runs as a headless server (no desktop needed) that you use from a browser. The UI is Traditional Chinese with English and Simplified Chinese switches. Requires an NVIDIA GPU (AMD and Intel Arc GPUs: experimental, untested on real hardware; machines without a usable GPU can still install it and run ComfyUI on the CPU). Licensed under GPL-3.0.

## Features

| Feature | Description |
|---|---|
| Image generation | Text-to-image, image-to-image, inpainting,…
