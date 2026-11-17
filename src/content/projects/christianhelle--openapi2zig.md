---
repo: "christianhelle/openapi2zig"
name: "openapi2zig"
description: "A tool for generating API clients and models in Zig from OpenAPI specifications"
readmeQualityOk: true
url: "https://github.com/christianhelle/openapi2zig"
homepage: "http://christianhelle.com/openapi2zig/"
language: "Zig"
languages: ["Zig"]
languagePcts: [99]
topics: ["zig", "openapi", "code-generator"]
stars: 25
forks: 5
openIssues: 0
closedIssues: 15
watchers: 1
contributors: 4
recentReleases: 3
createdAt: "2025-07-04T21:06:57Z"
lastCommitAt: "2026-11-17T14:41:49Z"
lastReleaseAt: "2026-09-03T11:36:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 73
maintainers: ["christianhelle"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7d88e3c33cc4c1eefcec0a578089418f19408f49db8920da6d9ae27ccf8fdfb/christianhelle/openapi2zig"
fundingLinks: ["GITHUB:https://github.com/christianhelle", "KO_FI:https://ko-fi.com/christianhelle", "LIBERAPAY:https://liberapay.com/christianhelle", "CUSTOM:https://paypal.me/christianhelle", "CUSTOM:https://buymeacoffee.com/christianhelle"]
---

# openapi2zig

A CLI tool and Zig library that generates type-safe models and API client code in Zig from OpenAPI specifications.

## Features

- Parse and generate from Swagger v2.0, OpenAPI v3.0, v3.1, and v3.2 specifications
- Generate type-safe Zig client code
- Support for complex OpenAPI schemas and operations
- Cross-platform support (Linux, macOS, Windows)
- Available as both CLI tool and Zig library
- Unified document representation for all OpenAPI and Swagger versions

## Installation

### Option 1: Quick Install Script (Recommended)

**Linux/macOS:**

```bash
curl -fsSL https://christianhelle.com/openapi2zig/install | bash
```

**Windows (PowerShell):**

```powershell
irm https://christianhelle.com/openapi2zig/install.ps1 | iex
```

The install scripts will:

- Automatically detect your platform and architecture
- Download the latest release from GitHub
- Install the binary to an appropriate location
- Add it to your PATH (if desired)

**Custom installation directory:**

```bash
# Linux/macOS
curl -fsSL https://christianhelle.com/openapi2zig/install | INSTALL_DIR=$HOME/.local/bin bash

# Windows
& ([scriptblock]::Create((irm…
