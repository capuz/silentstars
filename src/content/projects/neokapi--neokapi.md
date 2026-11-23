---
repo: "neokapi/neokapi"
name: "neokapi"
description: "Content and language intelligence framework in Go — parse documents, data, and markup into one content model, edit and check the content, and write it back byte-for-byte."
readmeQualityOk: true
url: "https://github.com/neokapi/neokapi"
homepage: "https://neokapi.github.io/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [66, 26]
topics: ["ai-tools", "content-creation", "l10n", "translation", "cli", "content-engine", "file-formats", "go", "i18n", "multilingual"]
stars: 6
forks: 1
openIssues: 3
closedIssues: 948
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-12T22:03:47Z"
lastCommitAt: "2026-11-23T09:23:50Z"
lastReleaseAt: "2026-06-18T08:57:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 70
maintainers: ["asgeirf", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1566acaaad9ace9e84d5dc7b7835259aa4ab9fbff680aa551f95ccb91e72ca72/neokapi/neokapi"
discussionCount: 0
---

# neokapi

> **Experimental.** neokapi is an ongoing experiment and not yet recommended for production use.

neokapi is a content engine in Go. It reads documents into a common content
model, runs editing and checking tools, and writes changes through format-aware
writers. The context graph resolves the terms, voice guidance and recorded
decisions that apply to each piece of content.

The engine supports source-language checks and multilingual workflows,
including translation, content memory reuse and XLIFF/PO interchange. Concurrent
processing flows and pluggable tools build on concepts from the
[Okapi Framework](https://okapiframework.org/). Format fidelity and check coverage
are verified separately; see the [format documentation](https://github.com/neokapi/neokapi/blob/HEAD/web/docs/framework/formats.md).

The Bowrain platform adds shared project context and server workflows. Its code
and documentation are under [`bowrain/`](https://github.com/neokapi/neokapi/blob/HEAD/bowrain/README.md).

## Install

```bash
brew install neokapi/tap/kapi-cli  # macOS/Linux
winget install Neokapi.KapiCli     # Windows
```
