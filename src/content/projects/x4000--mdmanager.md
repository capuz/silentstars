---
repo: "x4000/MDManager"
name: "MDManager"
description: "A fast, portable desktop viewer (and editor) for trees of markdown documents."
url: "https://github.com/x4000/MDManager"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [84]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-06-20T00:35:46Z"
lastCommitAt: "2026-06-27T00:46:17Z"
lastReleaseAt: "2026-06-27T00:46:44Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 26
maintainers: ["x4000"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4bda40d8c292c5f122eac9bc8e9b4fb658dfc7d31e9ab8ce2b44adc87549bb4/x4000/MDManager"
---

# AMDV — Arcen MD Viewer

A fast, portable desktop viewer (and editor) for trees of **Markdown**
documents — design docs, handoffs, notes, references.

AMDV is the Markdown counterpart to [AXE](https://github.com/x4000/xmled), the
Arcen XML Editor: same look and feel, but aimed at reading and writing Markdown 
instead of schema-aware XML. Point it at one or more folders for a tabbed
reading view with a live rendered preview, a source editor when you want to make
quick edits, full-text search-and-replace across everything, an outline rail,
wiki-style links between documents, and so on. The general idea is to have one
place you can manage all the markdown files from your whole computer, comfortably,
regardless of where they are. But it also supports simply being a tool that opens
arbitrary markdown files if you set it to be your system default for that file
format.

It renders **GitHub-flavored Markdown**: tables, task lists, fenced code with
syntax highlighting, and **Mermaid** diagrams.

## Screenshots

Light mode:

Dark mode:

---

## What it does

- **Read + Source per document** — a rendered preview for reading, and a
  CodeMirror 6 source editor for quick edits. Toggle either…
