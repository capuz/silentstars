---
repo: "johnnyclem/JCAppleScript"
name: "JCAppleScript"
description: "Simple, helpful library for using your Objective-C variables within a bundled AppleScript or OSAScript."
readmeQualityOk: true
url: "https://github.com/johnnyclem/JCAppleScript"
language: "Swift"
languages: ["Swift"]
languagePcts: [95]
stars: 27
forks: 4
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2013-08-15T20:59:21Z"
lastCommitAt: "2026-08-28T15:36:24Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 28
maintainers: ["johnnyclem", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1b166fe36f4b0fb0eb0f6338a062ffe51fea81b891fa3d4c30e088d7f1af704/johnnyclem/JCAppleScript"
---

# JCAppleScript

A Swift package for executing AppleScript from macOS applications, featuring a built-in **MCP server** that lets AI assistants control macOS apps through pre-built command shortcuts.

## Overview

JCAppleScript provides three components:

1. **JCAppleScript** (library) - Core AppleScript execution engine
2. **AppShortcuts** (library) - Registry of pre-built AppleScript commands for popular macOS apps
3. **jcas-mcp** (executable) - MCP (Model Context Protocol) server for AI-driven app automation

## Installation

### Swift Package Manager

Add JCAppleScript to your `Package.swift`:

```swift
dependencies: [
    .package(url: "https://github.com/johnnyclem/JCAppleScript.git", branch: "main")
]
```

Then add the targets you need:

```swift
.target(
    name: "YourTarget",
    dependencies: [
        "JCAppleScript",     // Core engine only
        "AppShortcuts",      // App command registry
    ]
)
```

## Quick Start

### Using the Core Engine

```swift
import JCAppleScript

let engine = AppleScriptEngine.shared

// Execute raw AppleScript
let result = try engine.execute("""
    tell application "Finder"
        display dialog "Hello from Swift!"
    end tell
""")…
