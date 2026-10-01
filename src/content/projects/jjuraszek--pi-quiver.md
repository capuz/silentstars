---
repo: "jjuraszek/pi-quiver"
name: "pi-quiver"
description: "pi coding-agent extensions with basic tool set optimised for agentic coding"
readmeQualityOk: true
url: "https://github.com/jjuraszek/pi-quiver"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 7
forks: 1
openIssues: 0
closedIssues: 21
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-06-02T22:09:56Z"
lastCommitAt: "2026-10-01T10:22:06Z"
lastReleaseAt: "2026-08-04T11:53:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 61
maintainers: ["jjuraszek", "nertzy"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1257652738/cdd21923-f4ef-4b9a-bddb-737020c7cbe7"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/jjurasszek"]
---

</p>

# pi-quiver

Ground-truth ingestion for the [Pi coding agent](https://github.com/earendil-works/pi): pull real web pages, docs, and local files into context without flooding it.

## The problem

Reasoning from a model's training memory instead of the real page, the current docs, or the actual PDF is how agents confidently ship wrong answers about APIs that changed last month. Mature engineering work has to be data-driven - the agent needs to read the real source.

But the moment an agent does that, one `fetch` or PDF read can dump hundreds of kilobytes of boilerplate into context, degrading every turn after it.

## Why pi-quiver exists

`fetch` brings real web pages and GitHub issues/PRs into context and is size-gated by construction: over 32 KB or 1000 lines spills to a temp file with a preview and a grep/read hint. `doc_to_md` converts local PDF/DOCX/DOC/PPTX/XLSX/XLSM/XLS, MSG/EML, HTML, and image files into a Markdown bundle on disk and returns only a concise handle; OCR is opt-in and uses optional Tesseract language data. Ingestion is what makes data-driven work possible; bounded tool results keep it safe.

`session-name`, `sword-header`, `fast-mode`,…
