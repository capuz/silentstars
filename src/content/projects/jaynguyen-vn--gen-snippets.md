---
repo: "jaynguyen-vn/gen-snippets"
name: "gen-snippets"
description: "A privacy-focused macOS text expander that works system-wide. Type short commands, get instant text replacement. 100% offline, native SwiftUI. Your productivity booster that respects your data."
readmeQualityOk: true
url: "https://github.com/jaynguyen-vn/gen-snippets"
homepage: "http://gensnippets.com/"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["developer-tools", "macos", "open-source", "productivity", "swift", "text-expander"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-09-03T08:50:50Z"
lastCommitAt: "2026-08-20T04:00:38Z"
lastReleaseAt: "2025-12-04T07:08:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 47
maintainers: ["jaynguyen-vn"]
openGraphImageUrl: "https://opengraph.githubassets.com/55f4e520a2ec30ef1c0a17369c75f72f332c7b2eae1fcaa2446ff562e5beb603/jaynguyen-vn/gen-snippets"
---

# GenSnippets

</div>

## Overview

GenSnippets is a lightweight macOS application for system-wide text expansion. It runs quietly in your menu bar, monitoring keyboard input and instantly replacing custom trigger commands with pre-defined text snippets across all applications.

## Features

### Core Functionality
- **System-wide Text Replacement** - Works in any application across macOS using CGEvent monitoring
- **Category Management** - Organize snippets into custom categories with alphabetical sorting
- **Smart Command Matching** - Trie data structure provides O(m) lookup performance
- **Priority Matching** - Longer commands take precedence for accurate replacements
- **Auto-cleanup** - Automatically removes typed commands after replacement
- **Dynamic Content** - Insert clipboard content, current date, or position cursor with special keywords
- **Security Buffer** - 15-second timeout prevents accidental replacements of old inputs
- **Browser Compatibility** - Specialized timing adjustments for Discord, Chrome, and other web browsers

### User Interface
- **Three-Column Layout** - Intuitive category list, snippet list, and detail view
- **Menu Bar Integration** - Quick access…
