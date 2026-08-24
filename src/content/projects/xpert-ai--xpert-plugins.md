---
repo: "xpert-ai/xpert-plugins"
name: "xpert-plugins"
description: "Open source XpertAI platform plugins code repository"
readmeQualityOk: true
url: "https://github.com/xpert-ai/xpert-plugins"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [67, 26]
stars: 8
forks: 12
openIssues: 8
closedIssues: 10
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2025-09-19T14:32:39Z"
lastCommitAt: "2026-08-24T04:22:02Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 78
maintainers: ["yurongk", "tiven-w", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5624127139e36313cdeec0be477096efd614f6880ccf9496c1b3b02af35e5426/xpert-ai/xpert-plugins"
discussionCount: 1
---

# XpertAI Plugin Repository

This is the source code repository for plugins on the [XpertAI platform](https://github.com/xpert-ai/xpert). The `xpertai/` folder contains officially maintained plugin projects. Partners or community contributors can create independent project folders in the root directory according to their company or organization, and maintain their own plugin code within. For plugin development and release processes, please refer to the official documentation: <https://xpertai.cn/docs/plugin/>.

## Repository Structure

- `xpertai/`: Official plugin projects, managed with the Nx build tool for multiple plugin packages.
- `<your-org>/`: Partner or community contributor plugin directories (example). Please create a top-level directory using your company or organization’s English name, and maintain plugin projects within.

## Getting Started

1. Clone the repository and enter the root directory.
2. To view or participate in official plugin development:
    - Enter `xpertai/` and run `npm install` to install dependencies.
    - Use `npx nx graph` or `npx nx list` to explore current plugins and tasks.
    - Common commands:
      - `npx nx build <project>` to build a…
