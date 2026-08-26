---
repo: "The-Best-Codes/ai-model-directory"
name: "ai-model-directory"
description: "The most comprehensive, automatically updated directory of over 10,000 AI models and their metadata"
readmeQualityOk: true
url: "https://github.com/The-Best-Codes/ai-model-directory"
homepage: "https://models.agent-one.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai", "ai-model", "ai-models", "directory", "list", "list-model", "model", "model-library", "models"]
stars: 35
forks: 12
openIssues: 5
closedIssues: 49
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-30T17:53:30Z"
lastCommitAt: "2026-08-26T04:16:54Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 98
undervaluedScore: 45
maintainers: ["github-actions[bot]", "The-Best-Codes"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a26fa4df2cf5f9bde637cd7a919571ff3ecfc5fe955270001ed16f123fefc16/The-Best-Codes/ai-model-directory"
fundingLinks: ["GITHUB:https://github.com/The-Best-Codes"]
---

> [!IMPORTANT]
> This project is currently in beta. To get involved, [join us on Discord](https://www.agent-one.dev/discord), open an issue, or submit a PR. See [CONTRIBUTING.md](https://github.com/The-Best-Codes/ai-model-directory/blob/HEAD/CONTRIBUTING.md) for adding providers and editing model metadata.

# The AI Model Directory

The AI model directory is the most comprehensive, automatically updated list of AI models and their metadata like pricing, context windows, supported features, and more. It currently lists over 10,000 models from over 70 providers. Data is stored as a tree of TOML files under `data/providers/`, and a flattened `data/all.json` (and minified `data/all.min.json`) is generated on every refresh. We're working on the docs!

## Why Does This Exist?

When building [AgentOne](https://www.agent-one.dev/github), I needed a comprehensive list of AI models and their metadata - costs, context windows, supported features, etc. - so AgentOne could allow easy access to _all_ models an AI model provider had.
I was frustrated with the existing options:

- Models.dev is not comprehensive (it's opinionated), and it often takes anywhere from a few days to weeks for frontier…
