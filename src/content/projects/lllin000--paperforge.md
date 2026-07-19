---
repo: "LLLin000/PaperForge"
name: "PaperForge"
description: "PaperForge is an Obsidian literature workstation for researchers. It organizes scattered materials into structured knowledge assets that are retrievable, queryable, and readable, targeting Zotero."
originalDescription: "PaperForge 是一个面向研究者的 Obsidian 文献工作台。 它针对 Zotero，把零散材料整理为可检索、可追问、可精读的结构化知识资产"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LLLin000/PaperForge"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 12
forks: 2
openIssues: 5
closedIssues: 67
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-21T12:50:23Z"
lastCommitAt: "2026-07-19T06:14:41Z"
lastReleaseAt: "2026-05-18T17:35:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 57
maintainers: ["LLLin000"]
openGraphImageUrl: "https://opengraph.githubassets.com/85006db14314a8d772d73050f70f465f7846a53b30803c8b794d2d6b5c715e53/LLLin000/PaperForge"
discussionCount: 1
---

# PaperForge

[简体中文](https://github.com/LLLin000/PaperForge/blob/HEAD/README.zh.md) · **English**

> **铸知识为器，启洞见之明。 — Forge Knowledge, Empower Insight.**

PaperForge brings your Zotero library into Obsidian. Sync papers, run OCR, extract figures, and do AI-assisted deep reading — all inside a single vault.

---

## 0. What PaperForge Is

PaperForge is **not just an Obsidian plugin**. It has two parts:

| Part | What | Does | Where |
|------|------|------|-------|
| Obsidian Plugin | `main.js` + `manifest.json` + `styles.css` | Dashboard, buttons, settings UI | `.obsidian/plugins/paperforge/` in your vault |
| Python Package | `paperforge` | Sync, OCR, Doctor, repair | Your system Python (`pip install`) |

The plugin is the **interface**. The Python package is the **engine**. Every button you click in the plugin actually runs a Python command behind the scenes.

**After installing the plugin, you MUST verify that the Python package is also installed and version-matched.**

---

## 1. Install the Obsidian Plugin

### Option A: Community Plugin Browser (Recommended)

1. Open Obsidian → `Settings` → `Community plugins` → `Browse`
2. Search for **PaperForge**
3. Click `Install`,…
