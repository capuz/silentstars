---
repo: "aegoroff/grok"
name: "grok"
description: "Regular expressions macro engine"
readmeQualityOk: true
url: "https://github.com/aegoroff/grok"
language: "Zig"
languages: ["Zig"]
languagePcts: [90]
topics: ["regular-expression", "grok", "zig"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2015-09-19T09:56:21Z"
lastCommitAt: "2026-07-05T20:55:36Z"
lastReleaseAt: "2022-01-19T17:39:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 86
maintainers: ["aegoroff"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ef7df1bd09c61e07df7d3220982544ac2716fd50d83123e7fc87928ec8a1d8b/aegoroff/grok"
---

# GROK

**GROK** is a powerful command-line tool like UNIX `grep` on steroids. It uses grok patterns (named regular expression macros) to simplify complex pattern matching tasks.

## Overview

Often, regular expressions become huge and hard to maintain. To resolve this, **grok patterns** (macros) can be applied. The term "grok" is borrowed from the Logstash project. Grok patterns are named references to regular expressions that can be rather complex. These regular expressions can contain references to other groks, allowing you to build complex patterns from simple, reusable components.

Instead of writing complex regular expressions, you can use a macro name defined in pattern files, making your pattern matching more readable and maintainable.

## Features

- 🚀 **Fast pattern matching** using PCRE2
- 📝 **Named pattern macros** for reusable regular expressions
- 🔗 **Pattern composition** - groks can reference other groks
- 📁 **Multiple input modes**: files, strings, and stdin
- 🎯 **Info mode** for detailed match information
- 🌐 **Multi-encoding support** - automatic BOM detection for UTF-8, UTF-16, and UTF-32 (file and stdin modes)
- 🌍 **Cross-platform** support (Linux,…
