---
repo: "dckxx/x-hub"
name: "x-hub"
description: "Local-first personal desktop productivity workbench: Clock / Countdown / Notes / Todo / Quick Note / Quick Launch / AI Chat / Clipboard History, all data stored locally without cloud upload. Built with Tauri 2 + Vue 3 + TypeScript + Rust."
originalDescription: "本地优先的个人桌面效率工作台：时钟 / 倒计时 / 便签 / 待办 / 速记 / 速达 / AI 对话 / 剪贴板历史，所有数据本地存储、不上云端。基于 Tauri 2 + Vue 3 + TypeScript + Rust。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/dckxx/x-hub"
language: "Rust"
languages: ["Rust", "Vue"]
languagePcts: [43, 41]
topics: ["dashboard", "desktop-app", "productivity", "rust", "sqlite", "tauri2", "typescript", "vue3"]
stars: 189
forks: 31
openIssues: 4
closedIssues: 3
watchers: 2
contributors: 7
recentReleases: 10
createdAt: "2026-08-01T08:14:00Z"
lastCommitAt: "2026-09-23T08:47:15Z"
lastReleaseAt: "2026-08-25T13:39:40Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 29
maintainers: ["dckxx", "bert0224", "inkchills"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b0d3e4dd3cd5ca54552d6fb53cffb2bb3d1939a5fe77eb596266f873e157d02/dckxx/x-hub"
---

# ⚡ x-hub — Local Personal Productivity Workbench

Desktop productivity tool based on **Tauri 2 + Vue 3 + TypeScript** with Bento-style interface.
**All data is stored locally by default and not uploaded to the cloud.**

</div>

## ✨ Features

### 🕐 Workbench
Clock (with **real-time weather** from Open-Meteo: temperature/feels-like/humidity/wind speed + city/IP location), system resource monitor (CPU/memory, 2s polling), notes (2 slots, 600ms debounced auto-save), prompt treasury, todo list, recent usage bar. Workbench is a **free-form Bento grid**: 9 widgets (clock/notes×2/quick note overview/todo overview/quick launch count/countdown/prompts/todo) can be added, removed, dragged, resized, and remembered in the layout editor. Clock quotes integrate **online quotes (hitokoto)**, with offline fallback to local corpus, click to refresh.

### ⏳ Countdown Timer
Four modes: duration/timer/daily/interval (up to 6); pause/resume/float/delete; **background-driven** (Rust 1s polling, system notification on trigger, `once` grayed out / `daily` / `interval` auto-postpone, sleep-missed silently postpone); can float as a **transparent circular water tank floating window** (water level with…
