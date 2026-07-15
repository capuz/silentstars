---
repo: "sf-kosen/Nanase-Bot"
name: "Nanase-Bot"
description: "DiscordBOT for sf-kosen"
originalDescription: "DiscordBOT for sf-kosen"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/sf-kosen/Nanase-Bot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 5
forks: 6
openIssues: 5
closedIssues: 6
watchers: 0
contributors: 6
recentReleases: 5
createdAt: "2025-12-26T04:47:51Z"
lastCommitAt: "2026-07-15T05:53:56Z"
lastReleaseAt: "2026-07-15T05:57:59Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 80
undervaluedScore: 58
maintainers: ["sora81dev", "tanahiro2010", "MikanNigata"]
openGraphImageUrl: "https://opengraph.githubassets.com/c11dc0c3a576cd88896d86d13616673c7539c2b2b7c724241423670f88ed8ffa/sf-kosen/Nanase-Bot"
discussionCount: 3
---

# Nanase-Bot Documentation

## Note
I left it to AI because I was too lazy to write it. <br />
The content is mostly correct, but feel free to develop it. <br />
Also, this method is probably inefficient, so I am looking for someone to change the file structure and such.

## Overview ✅
In this repository, the "slash commands" and "user actions (buttons / modals)" are placed in `src/commands` and `src/handlers`, respectively, and `src/index.ts` automatically loads them at runtime.

---

## Loading Rules (Behavior of `src/index.ts`) 🔧
- At runtime, it determines the `FILE_TYPE` and decides the file extension to load according to `.ts` (development) / `.js` (production).
  - Development: `process.argv[2] !== "js"` → `FILE_TYPE = ".ts"` → `BASE_DIR = "./src"`
  - Production: `process.argv[2] === "js"` → `FILE_TYPE = ".js"` → `BASE_DIR = "./dist"`
- Command Loading:
  - All files ending with the `FILE_TYPE` extension under `${BASE_DIR}/commands` are required and loaded.
  - The loaded modules are registered as `commands[command.data.name] = command`.
- Handler Loading:
  - Enumerates the subfolders of `${BASE_DIR}/handlers` (e.g., `button`, `modal`) and loads files ending with…
