---
repo: "gianlucasb/hallucinator"
name: "hallucinator"
description: "A tool to detect potentially hallucinated or fabricated references in academic PDF papers."
readmeQualityOk: true
url: "https://github.com/gianlucasb/hallucinator"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
stars: 351
forks: 36
openIssues: 29
closedIssues: 123
watchers: 2
contributors: 8
recentReleases: 1
createdAt: "2026-01-21T12:59:21Z"
lastCommitAt: "2026-08-28T12:23:19Z"
lastReleaseAt: "2026-07-15T12:41:54Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 93
undervaluedScore: 28
maintainers: ["gianlucasb", "emidec", "worst"]
openGraphImageUrl: "https://opengraph.githubassets.com/14140653601962834dba6f306dbc4f62e67f2eedbdf422971db6a8653723f9bb/gianlucasb/hallucinator"
---

# Hallucinated Reference Detector

**Detect fake citations in academic papers.** This tool extracts references from PDFs and validates them against academic databases. If a reference doesn't exist anywhere, it's probably hallucinated by an LLM.

Created by Gianluca Stringhini with Claude Code and ChatGPT.

---

> [!IMPORTANT]
> **This tool surfaces suspicion, not proof.** It flags references that it could not find (or whose authors did not match) in the bibliographic databases it checks (CrossRef, arXiv, DBLP, OpenAlex, and others). A "Not Found" or "Author Mismatch" result **does not mean the reference is fake or that it does not exist elsewhere.** Databases are incomplete: technical reports, books, workshop papers, brand-new work, non-English venues, and software/websites are often missing or indexed with partial metadata, and title/author matching is fuzzy and imperfect. Every flagged reference is a lead to check, not a verdict.
>
> **Confirm every detection by hand before drawing conclusions.** Verify the reference yourself (search the Web, the publisher, Google Scholar, or the authors' own pages) before treating a flag as a problem.

---

> **Why this exists:** Academia is…
