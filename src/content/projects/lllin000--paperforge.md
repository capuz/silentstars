---
repo: "LLLin000/PaperForge"
name: "PaperForge"
description: "PaperForge 是一个面向研究者的 Obsidian 文献工作台。 它针对 Zotero，把零散材料整理为可检索、可追问、可精读的结构化知识资产"
readmeQualityOk: true
url: "https://github.com/LLLin000/PaperForge"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 18
forks: 3
openIssues: 50
closedIssues: 179
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-21T12:50:23Z"
lastCommitAt: "2026-11-09T04:34:47Z"
lastReleaseAt: "2026-05-18T17:35:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 46
maintainers: ["LLLin000"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc86f2dfcf1d9f2f7c8fd7e1d7585ff6e6fb9ddca4c0d5467bece3bcc15aa2e2/LLLin000/PaperForge"
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
3. Click `Install`, then…
