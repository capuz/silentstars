---
repo: "aayush0325/recurse"
name: "recurse"
description: "Cursor for Reverse Engineering"
readmeQualityOk: true
url: "https://github.com/aayush0325/recurse"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [55, 42]
topics: ["decompiler", "ide", "radare2", "reverse-engineering", "rust", "tauri", "agentic-ai"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-15T07:01:39Z"
lastCommitAt: "2026-08-17T04:18:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 20
maintainers: ["aayush0325"]
openGraphImageUrl: "https://opengraph.githubassets.com/c388d5e112787885f6d04b9b6197fc234d77c74551ee65621784597d59e6c598/aayush0325/recurse"
---

# Recurse

Agentic reverse engineering environment — a Ghidra-class desktop app in the spirit of
"Cursor for reverse engineering". Built with **Tauri 2** (React + TypeScript frontend) on top
of an existing RE toolchain: **[radare2](https://rada.re/n/)** does all parsing, analysis,
disassembly, xrefs, strings and imports; **r2ghidra** (optional) provides decompilation.

## Features

- Cursor-style workspace: function list, disassembly/strings/imports tabs, and a chat
  agent sidebar (toggle with the Chat button or `Ctrl+L`)
- Live analysis session on any binary — including extension-less files
- LLM agent backed by an OpenAI-compatible endpoint (OpenRouter by default) with a
  model picker; drives the session directly (disasm, xrefs, strings, imports, decompile)
- Dark-first UI built with Tailwind CSS v4 + shadcn/ui

## Prerequisites

### 1. Core toolchains

| Tool     | Version (tested)   | Install                                                                 |
| -------- | ------------------ | ----------------------------------------------------------------------- |
| Node.js  | ≥ 20 (23.11 used)  | https://nodejs.org or `nvm`                                              |
|…
