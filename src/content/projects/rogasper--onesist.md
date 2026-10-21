---
repo: "rogasper/onesist"
name: "onesist"
description: "Onesist platform to enhance productivity for System Analyst deliverable Technical Requirement"
readmeQualityOk: true
url: "https://github.com/rogasper/onesist"
homepage: "https://onesist.rogasper.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["ai-tools", "api-spec", "erd", "llm-agents", "system-analyst"]
stars: 30
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-02T22:12:13Z"
lastCommitAt: "2026-10-21T23:36:12Z"
lastReleaseAt: "2026-08-13T06:21:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 52
maintainers: ["rogasper", "wicahma"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0c576f70f466190a7e8463ea64f221b58bb1608ba019f72f0c3dab441c31b8e/rogasper/onesist"
---

# Onesist (SA Dashboard)

**A full-stack desktop & web workspace for System Analysts.** View, edit, and orchestrate AI-generated system specifications, FSD documents, API specs, ERD schemas, test cases, task breakdowns, traceability matrices, and visual canvas sketches — all integrated seamlessly with CLI AI agents.

```mermaid
flowchart TD
    A["📄 FSD Documents<br/>input/fsd/"] --> B["🔍 AI Agent Engine<br/>OpenCode / Claude / Codex / Antigravity"]
    B --> C["📡 API Specs<br/>output/spec/"]
    B --> D["🗄️ ERD / DBML<br/>output/erd/"]
    B --> E["✅ Tasks & Phase Breakdown<br/>output/task/"]
    B --> F["🧪 SIT Test Cases<br/>output/sit/"]
    B --> G["🗺️ Traceability (RTM)<br/>BR ➔ FR ➔ DS ➔ TC"]
    B --> H["🎨 Sketches / Canvas<br/>output/sketches/"]
    B --> I["📑 Technical Docs<br/>DOCX / Markdown"]
    C & D & E & F & G & H & I --> J["💻 Onesist Dashboard<br/>Desktop App (Tauri) / localhost:4321"]
```

## Features

| Feature / Page | What it does |
|----------------|-------------|
| **Projects Dashboard** | Manage and organize project repositories with automatic skill installation (`fsd-analyzer`, `markitdown`). |
| **Project Overview** | Project hub with multi-root…
