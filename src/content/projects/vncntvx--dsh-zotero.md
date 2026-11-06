---
repo: "Vncntvx/dsh-zotero"
name: "dsh-zotero"
description: "Zotero plugin for DeepSeek Harness: search and read papers in conversation, audit the literature trail, and browse the literature panel."
originalDescription: "Zotero plugin for DeepSeek Harness: search and read papers in conversation, audit the literature trail, and browse the literature panel."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Vncntvx/dsh-zotero"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["ai-agents", "cordis", "dsh", "dsh-plugin", "zotero", "deepseek-harness", "academic", "research-tools"]
stars: 67
forks: 6
openIssues: 0
closedIssues: 12
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-15T02:44:37Z"
lastCommitAt: "2026-11-06T11:20:27Z"
lastReleaseAt: "2026-08-22T14:42:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 41
maintainers: ["Vncntvx"]
openGraphImageUrl: "https://opengraph.githubassets.com/550978e4c17d6d50485fdefc74f3f408fd6fd8b0f7fa4c89c4aeaeb643e46176/Vncntvx/dsh-zotero"
discussionCount: 1
---

# dsh-zotero

<img
  src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=18&pause=2000&color=CC2936&center=true&vCenter=true&width=760&lines=%3E+Search%2C+read%2C+and+trace+citations+from+local+Zotero.%3B%3E+Audit+every+source+and+passage+in+the+Literature+Trail.%3B%3E+Browse+collections+and+cite+instantly+in+the+Literature+Panel."
  alt="dsh-zotero"
/>

dsh-zotero is a local Zotero plugin for DeepSeek Harness. The Agent searches, reads, cites, and modifies the library as needed within the conversation; you browse the whole library in the Literature Panel and copy citations; the Literature Trail shows the papers the Agent looked up in the current session, along with source passages and exports, for easy verification.

All operations interact with the Zotero desktop app through the local Zotero API (`127.0.0.1:23119`). Reading requires no API key configuration.

## Main Features

- **Conversational search**
  - Search and read: search literature by title, author, year, or full text, and read metadata, personal notes, and local PDF full text.
  - Passage location: around a specific question, extract relevant passages from full text, annotations, and notes;…
