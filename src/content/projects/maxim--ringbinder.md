---
repo: "maxim/ringbinder"
name: "ringbinder"
description: "SQLite db of all your scattered pdfs, images and their OCR data, for easy agentic lookup"
url: "https://github.com/maxim/ringbinder"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["documents", "images", "ocr", "pdf"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-09T05:19:09Z"
lastCommitAt: "2026-06-23T23:17:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 15
maintainers: ["maxim"]
openGraphImageUrl: "https://opengraph.githubassets.com/f96c216dd1fb4bf43d97181bbe190fc80a67b2f93ef8ff6e1c5c6e94a48c0ce8/maxim/ringbinder"
---

# Ringbinder

Ringbinder is a small CLI tool that keeps a single SQLite file of PDFs and images that you have scattered around your filesystem. It doesn't touch, change, or ingest any of the files, only records their paths. With that, it provides convenient methods to OCR them, and search them. You can then query the db using a few methods provided by ringbinder itself, or just point any other sqlite client at it.

When using OCR, it just populates text in an associated db column, it doesn't inject the text back into the pdf files or anything like that.

For OCR, it integrates with Mistral's API, because I tried it, and it does a good job of recognizing text and describing graphs and images for an acceptable (to me) price. So I can easily find all drawings of dragons that my kids made, for example.

My use case is just scanning every piece of paper I come across (as well as immediately shredding most of them): physical mail, manuals, official documents, downloaded pdfs and images, my kids' schoolwork and drawings. I use an old ScanSnap S1500M that still works great for >15 years, and my iPhone's camera + a shortcut that scans into an iCloud-synced dir. Later I can find anything by…
