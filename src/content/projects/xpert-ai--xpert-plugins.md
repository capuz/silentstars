---
repo: "xpert-ai/xpert-plugins"
name: "xpert-plugins"
description: "Open source XpertAI platform plugins code repository"
url: "https://github.com/xpert-ai/xpert-plugins"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [68]
stars: 6
forks: 10
openIssues: 8
closedIssues: 10
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2025-09-19T14:32:39Z"
lastCommitAt: "2026-07-03T06:24:54Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 76
maintainers: ["tiven-w", "github-actions[bot]", "meta-d"]
openGraphImageUrl: "https://opengraph.githubassets.com/df751d8adf3612d6f22f08e5b53b5abb29d3d03358332c10804060746d4e5269/xpert-ai/xpert-plugins"
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
