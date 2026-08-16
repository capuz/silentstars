---
repo: "Bd-Mutant7/Portara"
name: "Portara"
description: "🔍 Portara - Electron desktop app to scan for and terminate processes using open TCP ports. Clean up stray dev servers instantly."
readmeQualityOk: true
url: "https://github.com/Bd-Mutant7/Portara"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [53, 23]
topics: ["electron-app", "electron-builder", "open-source", "port-scanner", "sveltejs", "tcp-ports", "typescript", "windows-subsystem-linux"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-08T11:11:05Z"
lastCommitAt: "2026-08-16T04:08:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 45
maintainers: ["Bd-Mutant7"]
openGraphImageUrl: "https://opengraph.githubassets.com/557c1e537152425dc41e6e675c3f0fbd5a87978db707511db834e0078dd2a102/Bd-Mutant7/Portara"
---

# Portara 🔍

## 📋Overview 

Portara scans for processes based on the network ports currently in use. The primary use case is to be able to easily scan for and terminate stray processes using development ports you need.

For instance, port 8080 is a port commonly used for development. So if it's in use, you can easily scan for that port with Portara and terminate whatever process is using that port.

Built on top of [Svelte Electron Boilerplate](https://github.com/ptkdev-boilerplate/svelte-electron-boilerplate).

## 🚀Running the App 
There are pre-built binaries in the [Releases](https://github.com/Bd-Mutant7/Portara/releases) section. Otherwise, run the `build` script for your platform.

### 🔧Build Scripts
- MacOS 	- `npm run build-mac`
- Windows 	- `npm run build-win`
- Linux 	- `npm run build-lnx`

## 🔧 One-Line Setup (Windows)
```bash
git clone https://github.com/Bd-Mutant7/Portara.git
cd Portara
npm install
npm run dev
```
## 💻 Platform-Specific Builds
### 🪟 Windows
```bash
# Development mode
npm run dev

# Build standalone executable
npm run build-win

# Build 32-bit version
npm run build-win-32bit
```
### 🍏 macOS
```bash
# Development mode
npm run dev

# Build for…
