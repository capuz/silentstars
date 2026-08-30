---
repo: "longbridge/longbridge-lite"
name: "longbridge-lite"
description: "An example for use gpui-shell to connect Longbridge OpenAPI."
readmeQualityOk: true
url: "https://github.com/longbridge/longbridge-lite"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [78, 20]
topics: ["gpui", "longbridge", "gpui-shell"]
stars: 46
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 3
createdAt: "2026-08-26T02:43:31Z"
lastCommitAt: "2026-08-30T00:44:26Z"
lastReleaseAt: "2026-08-29T05:04:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 29
maintainers: ["huacnlee", "sunfuze"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7afa1bd0f2ebed77c5251e41f9b102f7624d4398a371ec77280937ffb4516cf/longbridge/longbridge-lite"
---

# Longbridge Lite — Special for Omarchy

Longbridge Lite is a market-reading Longbridge desktop client made especially for
[Omarchy](https://omarchy.org/). It follows Omarchy's current system theme,
uses the system font, and adopts Omarchy-native spacing and keyboard
conventions. It is also an architecture example showing how a JavaScript
application can run as a native GPUI desktop program through
[GPUI Shell](https://longbridge.github.io/gpui-component/shell/).

The active palette is read from Omarchy's materialized theme state at
`~/.local/state/omarchy/current/theme/colors.toml`. Switching the Omarchy theme
updates Longbridge Lite automatically; the application does not inspect
`/etc/os-release` or bundle its own font.

## Install

Install the latest macOS or Linux release without administrator privileges:

```sh
curl -fsSL https://github.com/longbridge/longbridge-lite/raw/refs/heads/main/install.sh | sh
```

Install a specific version, or uninstall while preserving user data:

```sh
curl -fsSL https://github.com/longbridge/longbridge-lite/raw/refs/heads/main/install.sh | sh -s -- --version 0.2.0
curl -fsSL…
