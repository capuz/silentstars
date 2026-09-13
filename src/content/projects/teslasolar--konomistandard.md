---
repo: "teslasolar/KonomiStandard"
name: "KonomiStandard"
description: "Konomi Standard"
readmeQualityOk: true
url: "https://github.com/teslasolar/KonomiStandard"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [61, 28]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-23T03:46:25Z"
lastCommitAt: "2026-09-13T08:28:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 48
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b0914537695f1ef4d669eedd0af2aa03f9b5e55b29aaa1d5d8733abea5a922f/teslasolar/KonomiStandard"
---

# 📐 Konomi Standard Pages

Static reference site for the Konomi Standard - a self-defining industrial standards compression format. Built with Eleventy, Tailwind CSS, and deployed to GitHub Pages.

## 🚀 Features

- **Browse Standards**: Navigate through ISA-95, ISA-88, ISA-101, ISA-18.2, OPC-UA, MQTT Sparkplug, Modbus, and KPI standards
- **UDT Explorer**: View and copy User Defined Types as JSON
- **State Diagrams**: Visualize state machines with Mermaid
- **Search**: Fast client-side search across all standards and UDTs
- **Crosswalks**: View mappings between different standards
- **Dark Mode**: Beautiful dark theme optimized for readability
- **Copy to Clipboard**: One-click copy for UDT definitions
- **Zero JS Frameworks**: Lightweight, fast, and cacheable static site

## 📁 Repository Structure

```
konomi-standard-pages/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── src/
│   ├── _data/                  # Generated JSON data
│   │   ├── standards.json
│   │   ├── base_udts.json
│   │   ├── crosswalks.json
│   │   └── nav.json
│   ├── _includes/              # Reusable templates
│   │   ├── base.njk
│   │   └── sidebar.njk
│…
