---
repo: "bluemoonfoundry/daz-script-server"
name: "daz-script-server"
description: "DAZ Studio plugin: embedded HTTP server for executing DazScript remotely and returning results as JSON"
readmeQualityOk: true
url: "https://github.com/bluemoonfoundry/daz-script-server"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [40, 39]
topics: ["daz", "daz-studio", "daz3d", "plugin", "plugins", "plugins-daz", "plugins-daz3d", "embeded-webserver", "daz-sdk"]
stars: 15
forks: 7
openIssues: 4
closedIssues: 15
watchers: 0
contributors: 5
recentReleases: 7
createdAt: "2026-02-20T20:40:37Z"
lastCommitAt: "2026-08-15T04:05:07Z"
lastReleaseAt: "2026-07-19T16:32:09Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 57
maintainers: ["ghirpara", "aarx0"]
openGraphImageUrl: "https://opengraph.githubassets.com/f11cfffaa4e84f203b93bcf449c2026d0d4a7eab6ab14a74ade17af6fca1c912/bluemoonfoundry/daz-script-server"
discussionCount: 1
---

# DazScript Server

**Version 2.8.1** | DAZ Studio 4.5+ | DAZ Studio 6.25+ | Windows & macOS

A production-ready DAZ Studio plugin that embeds a secure HTTP server inside DAZ Studio, enabling remote execution of DazScript via HTTP POST requests (or an optional Python library that wraps the interface and adds additional features) with JSON responses. Control DAZ Studio programmatically from external tools, automation scripts, and custom applications.

> [!NOTE]
> As of v2.6.0, plugins for DS4 and DS6 on Windows, MacOS Intel, and MacOS Apple Silicon are included as part of the standard release artifacts. Remember that if you want to use a newer version of the plugin you must remove any old DLL or dylib file first!
---

## 🚀 Quick Start

**Already have the plugin installed?**

1. Open DAZ Studio → **Window → Panes → Daz Script Server**
2. Click **Start Server** (default: `127.0.0.1:18811`)
3. Click **Copy** to copy your API token (optional, but recommended for public environments)

**Option A — dazpy Python SDK (recommended):**

```bash
pip install dazpy
```

```python
import time
from dazpy import DazClient, DazScene

client = DazClient()          # auto-loads token from…
