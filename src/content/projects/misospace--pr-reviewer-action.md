---
repo: "misospace/pr-reviewer-action"
name: "pr-reviewer-action"
description: "Reusable GitHub Action for AI-assisted pull request review with self-hosted and cloud OpenAI-compatible models"
readmeQualityOk: true
url: "https://github.com/misospace/pr-reviewer-action"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["ai", "code-review", "github-action", "pull-request"]
stars: 20
forks: 7
openIssues: 27
closedIssues: 628
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-04-15T15:19:11Z"
lastCommitAt: "2026-11-06T11:24:28Z"
lastReleaseAt: "2026-04-26T20:28:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 51
maintainers: ["itsmiso-ai", "joryirving", "its-miso[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/571f7adff12c9e4a158c480898681ab4d8cddcbe690a642ea82b1434388e5cb1/misospace/pr-reviewer-action"
---

# 🤖 pr-reviewer-action

**AI pull request reviews with any OpenAI- or Anthropic-compatible model — cloud or self-hosted.**

*Point it at your llama.cpp box or your Anthropic key. Either way, every PR gets a real review.*

**[Quick start](#-quick-start)** · **[Documentation](https://github.com/misospace/pr-reviewer-action/blob/HEAD/docs/README.md)** · **[Inputs](https://github.com/misospace/pr-reviewer-action/blob/HEAD/docs/inputs.md)** · **[Troubleshooting](https://github.com/misospace/pr-reviewer-action/blob/HEAD/docs/troubleshooting.md)** · **[Migrating from v2](https://github.com/misospace/pr-reviewer-action/blob/HEAD/docs/v3-migration.md)**

---

The action reviews each pull request with the model you point it at. It collects the diff, linked issues, CI results, repository standards and evidence; lets the model read the checkout through a bounded, read-only tool loop; and publishes structured findings with a verdict derived from them, as a native review or a sticky comment.

## ✨ Highlights

- 🏠 **Local-model-first**: ollama, llama.cpp, vLLM, LiteLLM, or any OpenAI/Anthropic-compatible endpoint, with an optional fallback model.
- 🔎 **Gathers its own evidence**: a native…
