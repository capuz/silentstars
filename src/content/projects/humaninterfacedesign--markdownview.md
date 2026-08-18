---
repo: "HumanInterfaceDesign/MarkdownView"
name: "MarkdownView"
description: "A high-performance markdown rendering library for iOS, macOS, and visionOS"
readmeQualityOk: true
url: "https://github.com/HumanInterfaceDesign/MarkdownView"
homepage: "https://garytokman.com"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["ios", "markdown", "swift", "uikit"]
stars: 24
forks: 2
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-21T19:09:38Z"
lastCommitAt: "2026-08-18T04:08:45Z"
lastReleaseAt: "2026-04-30T12:19:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 38
maintainers: ["gtokman", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1163527452/817363f5-8d3d-40d7-9e89-f23e2cd66b58"
---

# MarkdownView

A high-performance markdown rendering library for iOS, macOS, and visionOS.

<video src="https://github.com/user-attachments/assets/0f222f61-9c03-4341-a501-f41272e7561a" controls playsinline></video>

## Features

- Full GFM (GitHub Flavored Markdown) support: headings, lists, tables, blockquotes, task lists, and more
- Native syntax highlighting powered by [tree-sitter](https://tree-sitter.github.io/) — no JavaScript runtime overhead
- 19 languages: Swift, C, C++, C#, Python, JavaScript, TypeScript, TSX, Go, Rust, Java, Kotlin, Ruby, Bash, SQL, YAML, JSON, HTML, CSS
- GitHub-style unified diff rendering for fenced `diff` / `patch` blocks, fenced auto-detection, and raw unified patch strings passed to `setMarkdown(string:)` or `PreprocessedContent(markdown:theme:)`
- LaTeX math rendering
- Inline image rendering with async loading and caching
- Streaming "typing" reveal: per-character fade-in for text as it streams in, with a configurable duration
- Comprehensive theming with fonts, colors, and spacing
- Two selection modes: text selection (default) with long-press and custom menu items, or opt-in line selection with tap/drag and callback
- VoiceOver accessibility…
