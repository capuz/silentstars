---
repo: "stella/folio"
name: "folio"
description: "Framework-neutral DOCX engine with React/Vue editors, Nuxt integration, and agent tooling"
readmeQualityOk: true
url: "https://github.com/stella/folio"
homepage: "https://stll.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["docx", "ms-word", "ms-word-docx-file", "rich-text-editor"]
stars: 8
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-30T07:02:25Z"
lastCommitAt: "2026-07-10T07:01:52Z"
lastReleaseAt: "2026-07-06T16:05:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 90
undervaluedScore: 66
maintainers: ["jan-kubica", "stella-provenance-updater[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/08b438d2b6c948bc63f84f57710f1e9123b09725cfbfeefe3ca1f93458dfe39f/stella/folio"
---

</p>

  <strong>Browser editor and framework-neutral engine for Word <code>.docx</code> files.</strong>
</p>

</p>

</p>

# folio

Browser editor and framework-neutral engine for `.docx` files. It opens, edits,
and writes Word documents while preserving pagination, tables, headers and
footers, tracked changes, and footnotes.

The core package is framework-neutral. React, Vue, Nuxt, and document-review
packages build on top of it.

Part of [stella](https://github.com/stella/stella), an open-source legal workspace.

See [DOCX platform boundary](https://github.com/stella/folio/blob/HEAD/docs/docx-platform.md) for what belongs in folio
and how editors, headless tools, agents, and hosts share one document model and
operation contract.

## Packages

This is a [Bun](https://bun.sh) workspace with these published packages:

| Package                                   | Use it for                                                                        |
| ----------------------------------------- | --------------------------------------------------------------------------------- |
| [`@stll/folio-core`](https://github.com/stella/folio/blob/HEAD/packages/core)     | OOXML parsing, document…
