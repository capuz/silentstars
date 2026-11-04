---
repo: "kenjinote/miu"
name: "miu"
description: "A fast, minimalist text editor"
originalDescription: "A fast, minimalist text editor"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/kenjinote/miu"
homepage: "https://hack.jp/661"
language: "C++"
languages: ["C++"]
languagePcts: [69]
topics: ["text-editor"]
stars: 253
forks: 12
openIssues: 11
closedIssues: 39
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-11-29T16:16:51Z"
lastCommitAt: "2026-11-04T13:04:36Z"
lastReleaseAt: "2026-02-08T15:01:43Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 94
undervaluedScore: 36
maintainers: ["kenjinote"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c59c687eaeb4d4fbf4fd8b9a7405f7b65efc94dad1dc866cb783ac1f10a8c48/kenjinote/miu"
---

# miu — Next-Generation Text Editor

An ultra-fast, minimal-implementation text editor✨ with advanced features📄. Supports colorful emoji🎨. Runs very lightly and enables fast editing of huge files.

## Key Features 🚩

- 🚀 High performance with C++/Win32
- 🎨 High-quality rendering with DirectWrite and color emoji support
- 🗂 Fast editing of huge files using memory-mapped files
- 🔎 Regex search, case sensitivity, and word-level search/replace
- ✨ Multi-cursor and rectangular selection
- ↩↪ Unlimited Undo/Redo
- ⌨ Rich keyboard shortcuts and help display with F1
- 🔒 Safe file operations and stability-focused design
- 🌙 Dark mode support

## Supported Environments

- Windows 11 / Windows 10 / macOS / iOS / iPadOS

## Development Environment

- Visual Studio 2026

## Build Requirements

This project uses Google compact_enc_det for character encoding detection.  
Before building, prepare the library with the following steps.

01. git clone https://github.com/google/compact_enc_det.git

02. cd compact_enc_det

03. cmake . -G "Visual Studio 18 2026" -A x64  
   ( For iOS: 'cmake . -G Xcode -DCMAKE_SYSTEM_NAME=iOS -DCMAKE_OSX_ARCHITECTURES="arm64"…
