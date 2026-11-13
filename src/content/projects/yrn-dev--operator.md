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
forks: 14
openIssues: 13495
closedIssues: 31513
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-07-29T18:09:48Z"
lastCommitAt: "2026-11-11T10:10:53Z"
lastReleaseAt: "2026-11-11T10:11:08Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "fork_magnet"]
healthScore: 62
undervaluedScore: 44
maintainers: ["yrn-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a7358784c22ad0e7b38297a51f5553fccd6e6d210ffb20028119e68fd75625a/yrn-dev/Operator"
---

# operator

## CLI 1.3: desktop capabilities in the terminal

In 1.3.1, the role and character of Operator were clarified, and real information about the OS, CPU, and RAM was added; `system_info` checks current resources and, on request, NVIDIA GPU. CLI startup is clean by default; details are available with `--verbose`. The skill catalog in the system prompt has been shortened, but full skill files are preserved. Repeated identical errors are recognized earlier; useful long-running work is not limited by the number of steps.

CLI history, settings, and memory are stored on the device. When using a cloud model, the request and the context passed to it are sent to its provider. Local storage does not mean that the network request is visible only to the owner.

Built-in tools `subagent`, `background_run`, `background_check`, `background_stop`, `github`, `browser`, `computer`, and `system_info` are loaded automatically. Plugins and MCP are not transferred from the desktop. Qwen works with reasoning enabled; there is no thinking/no-thinking switch. Models without reasoning support continue to work in their normal mode.

```bash
operator --doctor                  # environment check…
