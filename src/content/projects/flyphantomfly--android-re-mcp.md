---
repo: "FlyPhantomFly/android-re-mcp"
name: "android-re-mcp"
description: "Android reverse engineering for LLMs — one MCP server, 89 tools: decompile, hook, trace traffic, patch smali or dex, validate and merge dexes, read resources, patch native code, sign, reinstall. adb, Frida, mitmproxy, apktool, jadx, DexFile."
readmeQualityOk: true
url: "https://github.com/FlyPhantomFly/android-re-mcp"
homepage: "https://pypi.org/project/android-re-mcp/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [84]
topics: ["adb", "android", "apk", "frida", "mcp", "mcp-server", "mitmproxy", "mobile-security", "model-context-protocol", "python"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-11-02T17:11:48Z"
lastCommitAt: "2026-11-22T02:02:57Z"
lastReleaseAt: "2026-11-21T06:27:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 60
maintainers: ["FlyPhantomFly", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1443253993/62cca406-1135-43e9-91c7-040172a6c2c7"
discussionCount: 0
---

android-re-mcp is an MCP server for Android reverse engineering. 

You point it at a real device and a target app, then just ask: *what is this app, what's protecting it, and how do I get past that?* 

The assistant picks from 89 tools: decompile, hook, trace traffic, dump memory, patch smali or dex, read the resource table, patch native code, sign and reinstall, and walks you through the answer.

It's one package: PyPI: `android-re-mcp`

---

## The Python server (the PyPI package)

### What it does exactly

`pip install "android-re-mcp[all]"` gives you an MCP server, started as `android-re-mcp`, that speaks MCP over stdio (or SSE on 127.0.0.1 with a bearer token) and exposes **89 tools over one Android target at a time**:
