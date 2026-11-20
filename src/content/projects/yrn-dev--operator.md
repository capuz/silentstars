---
repo: "yrn-dev/Operator"
name: "Operator"
description: "Terminal AI coding agent — Autonomous AI Agent on your computer. Supports Alem AI + Ollama. Works with code, research, automation, DevOps, data analysis, and content generation."
originalDescription: "Terminal AI coding agent — Autonomous AI Agent on your computer. Supports Alem AI + Ollama. Works with code, research, automation, DevOps, data analysis, and content generation."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/yrn-dev/Operator"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 11
forks: 15
openIssues: 14666
closedIssues: 34173
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-07-29T18:09:48Z"
lastCommitAt: "2026-11-11T10:10:53Z"
lastReleaseAt: "2026-11-11T10:11:08Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "fork_magnet"]
healthScore: 59
undervaluedScore: 44
maintainers: ["yrn-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/4472ebf4eb6c7f188ab7df865af2c7fa5f385ef88e91f31dfd176933a35f867b/yrn-dev/Operator"
---

# operator

## CLI 1.3: desktop features in the terminal

In 1.3.1 the role and character of Operator were clarified, and real information about the OS, CPU and RAM was added; `system_info` checks current resources and, on request, NVIDIA GPUs. CLI startup is clean by default; details are available with `--verbose`. The skill catalog in the system prompt has been shortened; full skill files are preserved. Repeated identical errors are now detected earlier; useful long-running work is not limited by the number of steps.

CLI history, settings, and memory are stored on the device. When a cloud model is used, the request and the context passed with it are sent to its provider. Local storage does not mean that the network request is visible only to the owner.

The built-in tools `subagent`, `background_run`, `background_check`, `background_stop`, `github`, `browser`, `computer`, and `system_info` are loaded automatically. Plugins and MCP from the desktop are not carried over. Qwen works with reasoning enabled; there is no thinking/no-thinking toggle. Models without reasoning support continue to work in their normal mode.
