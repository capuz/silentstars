---
repo: "open-greek/open-greek-corpus"
name: "open-greek-corpus"
description: "State-of-the-art OCR of Ancient Greek public domain texts"
readmeQualityOk: true
url: "https://github.com/open-greek/open-greek-corpus"
homepage: "https://opengreek.org"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [51, 48]
stars: 12
forks: 0
openIssues: 3
closedIssues: 97
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-06-28T23:38:26Z"
lastCommitAt: "2026-11-23T10:18:12Z"
lastReleaseAt: "2026-10-18T16:05:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 58
maintainers: ["ciscoriordan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1283438097/2000e5fe-c86c-4088-97dc-b4fc393cc45f"
---

# Open Greek Corpus

An openly reusable corpus of Ancient, Medieval, and Modern Greek texts from
public-domain editions and attributed open sources.

The current export contains **3,939 works**, **1,913,683 passages**, and
**65,270,739 eligible Greek tokens**. Correction quality varies by work.
Unresolved readings remain excluded from lexical counts.
The corrected reader text includes editorial decisions.

## Reading the corpus

`data/corpus/` contains one UTF-8 JSON Lines file per work. Each row supplies
`urn`, `locus`, `edition`, `source`, `license`, and the corrected reader `text`.
An optional `analysis_text` supplies the eligible lexical projection.
`analysis_segments` preserves contiguous eligible runs where omitted text
breaks adjacency. `contextual_eligible: false` excludes a row from measurements
that depend on complete surrounding context.

Where a printed edition has an evident misprint, the corpus text gives the word
the edition means. `data/corpus_changes/WORK.misprints.json` lists each such
word with the form the page prints, the page and line, and the reason.
