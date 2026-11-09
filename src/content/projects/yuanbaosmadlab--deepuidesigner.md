---
repo: "YuanBaoSMadLab/DeepUIDesigner"
name: "DeepUIDesigner"
description: "An AI agent UI designer based on QT designer and DeepCode cli, refined to UI elements. Inheriting the concise pages of QT designers and the specialized optimization for Deepseek in DeepCode cli. Greatly reducing token costs, simplifying the work required of front-end designers, and making the entire front-end process controllable, and efficient."
readmeQualityOk: true
url: "https://github.com/YuanBaoSMadLab/DeepUIDesigner"
language: "C++"
languages: ["C++"]
languagePcts: [78]
stars: 45
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-16T04:11:30Z"
lastCommitAt: "2026-11-09T00:54:14Z"
lastReleaseAt: "2026-05-16T05:49:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 55
undervaluedScore: 11
maintainers: ["YuanBaoSMadLab"]
openGraphImageUrl: "https://opengraph.githubassets.com/c450f1b85f70d1c7a6f87f66524f9357af221702187081d601ef5f6a1117a1d4/YuanBaoSMadLab/DeepUIDesigner"
---

# DeepUIDesigner — AI-Powered Qt UI Designer

> 📖 [中文文档](https://github.com/YuanBaoSMadLab/DeepUIDesigner/blob/HEAD/README-zh.md)

**DeepUIDesigner** (深界设计器) fuses Qt Designer's visual UI editing with a large language model (DeepSeek / OpenAI-compatible). Describe the interface you want in plain language, and the AI edits the `.ui` XML directly — the canvas refreshes live. Think "just tell it what you want".

---

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [Architecture](#architecture)
- [Directory Layout](#directory-layout)
- [Scripts](#scripts)
- [Packaging](#packaging)
- [FAQ](#faq)
- [Tech Stack & Credits](#tech-stack--credits)
- [License](#license)

---

## Features

| Feature | What it does |
| --- | --- |
| **Full Qt Designer** | Widget box, property editor, object inspector, signal/slot editor, layout tools |
| **AI Chat Panel** | Lives under the property editor; edit UI by typing what you want |
| **Precise XML Editing** | 4-level progressive matching + structural validation — only the target widget gets touched |
| **Rolling Backups** | 5-level auto backups + a pre-chat snapshot; one…
