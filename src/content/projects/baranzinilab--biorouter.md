---
repo: "BaranziniLab/biorouter"
name: "biorouter"
description: "A secure AI-native biomedical research environment"
readmeQualityOk: true
url: "https://github.com/BaranziniLab/biorouter"
homepage: "https://biorouter.ucsf.edu"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [56, 37]
stars: 12
forks: 3
openIssues: 8
closedIssues: 139
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-01-21T00:30:29Z"
lastCommitAt: "2026-10-24T08:21:18Z"
lastReleaseAt: "2026-06-01T23:24:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 65
maintainers: ["Broccolito", "albertlee-baseten", "Jefflinnnn"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e1250f70b617c0f6bf86dd5956e3f2fce9d2be5706f66c4053c683b27844987/BaranziniLab/biorouter"
---

# UCSF Biorouter

**A secure AI-native biomedical research environment**

Biomedical research asks two things of AI at once. Research is iterative, and an agent can help at every step from idea to report. Patient records, identifiable data and unpublished results must stay inside a secure institutional environment. Existing tools meet one need or the other: commercial agents such as Claude Code and Codex send work to outside servers, while institutional chatbots and model APIs keep data inside but offer no agent. Biorouter is one environment for both: a single interface to local, institutional and public models that keeps private work private.

- **Private work stays private.** The models and connections a chat uses decide whether it is private or public, and private chats are routed only to private models.
- **Share workflows, not data.** A workflow records the models, extensions, prompts and skills behind an analysis, but not its data, so each site reruns it on its own records.
- **Biomedical connectors.** Connectors for electronic health records, the SPOKE knowledge graph, literature, omics and lab systems install with a click or a sentence.

Use Biorouter as an agent in…
