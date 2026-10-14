---
repo: "open-agreements/open-agreements"
name: "open-agreements"
description: "Open, primary-source-backed U.S. legal content — practice guides, 50-state surveys, reviewer checklists, and standard agreement templates. Built for legal teams and the agents helping them."
readmeQualityOk: true
url: "https://github.com/open-agreements/open-agreements"
homepage: "https://openagreements.org"
language: "TypeScript"
languages: ["TypeScript", "Roff"]
languagePcts: [51, 38]
topics: ["anthropic", "claude", "contract-automation", "docx", "legal-tech", "legal-templates", "nda-template", "open-source-legal", "safe-template", "gemini-cli-extension"]
stars: 61
forks: 11
openIssues: 32
closedIssues: 169
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2026-02-09T09:26:34Z"
lastCommitAt: "2026-10-14T08:58:20Z"
lastReleaseAt: "2026-03-27T06:48:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 43
maintainers: ["stevenobiajulu", "oa-ssot-sync[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1153419543/305d7551-448e-4fbd-8f6d-fe6b194c7a72"
discussionCount: 6
---

# OpenAgreements

OpenAgreements helps people and software agents find primary-source-backed U.S.
legal guidance and produce reviewable DOCX files from standard agreement
templates.

## What OpenAgreements does

- Publishes jurisdiction-specific practice guides with citations to primary law.
- Provides standard agreement templates with source and license metadata.
- Fills templates locally through a CLI or over MCP.
- Publishes review checklists and comparison surveys in human- and
  machine-readable formats.

OpenAgreements provides legal information and document mechanics, not legal
advice. It does not decide whether a form or clause is right for a transaction,
and generated documents are drafts for human review.

The project’s longer-term goal is a citable conformance layer for legal AI:
primary law becomes inspectable requirements, an AI can check a document against
them, and a lawyer owns the final call. Read [Why OpenAgreements Exists](https://openagreements.org/manifesto.md)
for the rationale; this README stays focused on using the project.

## Fill your first agreement

Install the CLI locally, inspect the available forms, and fill the Common Paper
Mutual NDA:

```bash
npm…
