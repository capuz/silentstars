---
repo: "oikon48/cc-doc-tracker"
name: "cc-doc-tracker"
description: "Automated tracker for Claude Code official documentation changes"
readmeQualityOk: true
url: "https://github.com/oikon48/cc-doc-tracker"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["claude-ai", "claude-code"]
stars: 21
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-11-15T09:10:08Z"
lastCommitAt: "2026-11-05T00:21:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 59
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/52bea97ea2d6a0abe3c11474b4b87be0b86ffbb8f5ecb33814e7363447df11fa/oikon48/cc-doc-tracker"
---

# 📚 Claude Code Documentation Tracker

[日本語](https://github.com/oikon48/cc-doc-tracker/blob/HEAD/README.ja.md)

Automatically fetch and track changes in Claude Code's official documentation using Git-based scraping.

## 🎯 Features

- 🔄 **Automated Updates**: 4 times daily (3:00, 9:00, 15:00, 21:00 JST)
- 📝 **Pure Markdown**: Direct storage from source
- 📊 **Git-based Tracking**: Complete change history
- 🗑️ **Full Sync**: Adds new docs, updates existing, removes deleted
- 🚀 **TypeScript**: Type-safe implementation
- ⚡ **Lightweight**: Minimal dependencies

## 🔍 How It Works

### System Architecture

```
1. Fetch Sources in Parallel
   ├── llms.txt (authoritative URL list)
   └── docs_map.md (titles and structure)

2. Merge & Dedupe
   ├── Combine both sources
   └── Remove duplicate URLs

3. Sync Local Files
   ├── Compare merged list with local files
   └── Delete orphaned files (not in sources)

4. Fetch Each Document
   ├── Direct Markdown fetch (no HTML conversion)
   ├── Add minimal frontmatter (title, source)
   └── Save to docs/en/[filename].md

5. Git Tracking
   ├── New files → "Added [file]"
   ├── Changed files → "Modified [file]"
   └── Deleted files → "Deleted…
