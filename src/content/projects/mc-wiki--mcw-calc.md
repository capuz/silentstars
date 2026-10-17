---
repo: "mc-wiki/mcw-calc"
name: "mcw-calc"
description: "Repo for Vue apps and the build system for the MCW Interactive Tools project"
readmeQualityOk: true
url: "https://github.com/mc-wiki/mcw-calc"
homepage: "https://mc.wiki/MCW:P/CALC"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [53, 41]
topics: ["minecraft"]
stars: 35
forks: 21
openIssues: 13
closedIssues: 19
watchers: 3
contributors: 22
recentReleases: 0
createdAt: "2023-11-14T08:44:59Z"
lastCommitAt: "2026-10-17T07:59:18Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 62
maintainers: ["crowdin-bot", "Dianliang233", "Leo-768"]
openGraphImageUrl: "https://opengraph.githubassets.com/15575322dc8f04428b3cad73cd3272856841a499d6f5185d7055b5e62d061883/mc-wiki/mcw-calc"
---

# Minecraft Wiki Interactive Tools

This is a repo for Vue apps and the build system (powered by vite) used by the MCW Interactive Tools project, aiming to explore how interactive tools and calculators might benefit reader experience.

If you are interested in this project, feel free to join the thread in #project-forum on MCW Discord.

## How it works

The tools are built using Vue 3 and Vite. Each tool is an independent Vue app that is designed to run in an iframe on the wiki. The tools are built and deployed to a static site, and the wiki loads the tools in an iframe.

## Development

1. Clone the repo
2. Run `pnpm install` (if you don't have pnpm installed then install it first using `corepack prepare pnpm@latest --activate`)
3. Run `pnpm run dev`
4. Run this in your browser console with MCW open: `localStorage.setItem('mcwCalcLocal', 'true')`
5. Go to User:Dianliang233/calc-sandbox for a list of all tools; to invoke a specific tool use this `<div id="app"></div>`
6. If you want to quit development mode, don't forget to run `localStorage.setItem('mcwCalcLocal', 'false')`
