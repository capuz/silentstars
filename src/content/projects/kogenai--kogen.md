---
repo: "KogenAI/kogen"
name: "kogen"
description: "Shape the feature. Leave the build to Kogen."
readmeQualityOk: true
url: "https://github.com/KogenAI/kogen"
homepage: "https://kogen.dev"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [54, 32]
topics: ["ai-agents", "ai-coding", "developer-tools", "elixir", "golang", "quint"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-18T08:09:49Z"
lastCommitAt: "2026-10-28T09:56:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["almirsarajcic"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1424140388/b7f9f6f0-5863-48a7-9c9b-013b6452d967"
---

# Kogen

Kogen takes one requested feature through five steps in your own Git repository:

1. **Shape**: a model writes the feature as short prose, executable Gherkin with step definitions, and a Quint model when the change has meaningful state. It inspects the repository and settles material technical questions itself. It finds and retrieves current authoritative external documentation when a task depends on it. It keeps a native record of each documentation lookup. It asks you only about open UI/UX choices.
2. **Build**: after you approve the exact files, Kogen's own model/tool loop ([kogen-loop](https://github.com/KogenAI/kogen/blob/HEAD/cli/third_party/kogen-loop/README.md)) implements it. Alternatively, an executor you select, such as your installed Claude Code, implements it ([executor contract](https://github.com/KogenAI/kogen/blob/HEAD/docs/executor-contract.md)). Claude Code can likewise independently serve Shape (including Refine) and the independent Review, each as its own fresh session with explicit limitations; this is source capability, not live qualification. Either way, Kogen alone verifies, reviews and commits.
3. **Verify**: the acceptance scenarios run against…
