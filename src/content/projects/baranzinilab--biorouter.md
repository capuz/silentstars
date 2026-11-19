---
repo: "BaranziniLab/biorouter"
name: "biorouter"
description: "A secure AI-native biomedical research environment"
readmeQualityOk: true
url: "https://github.com/BaranziniLab/biorouter"
homepage: "https://biorouter.ucsf.edu"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [58, 35]
stars: 13
forks: 5
openIssues: 8
closedIssues: 152
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-01-21T00:30:29Z"
lastCommitAt: "2026-11-19T05:06:06Z"
lastReleaseAt: "2026-06-01T23:24:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 69
maintainers: ["Broccolito"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4953a5f55128d3733e38f19e9f96df62e63ffa0a11cb14e803d8548d16bbbc7/BaranziniLab/biorouter"
---

# UCSF Biorouter

**A secure AI-native biomedical research environment**

Biomedical research asks two things of AI at once. Research is iterative, and an agent can help at every step from idea to report. Patient records, identifiable data and unpublished results must stay inside a secure institutional environment. Existing tools meet one need or the other: commercial agents such as Claude Code and Codex send work to outside servers, while institutional chatbots and model APIs keep data inside but offer no agent. Biorouter is one environment for both: a single interface to local, institutional and public models that keeps private work private.

- **Private work stays private.** The models and connections a chat uses decide whether it is private or public, and private chats are routed only to private models.
- **Share workflows, not data.** A workflow records the models, extensions, prompts and skills behind an analysis, but not its data, so each site reruns it on its own records.
- **Biomedical connectors.** Connectors for electronic health records, the SPOKE knowledge graph, literature, omics and lab systems install with a click or a sentence.
