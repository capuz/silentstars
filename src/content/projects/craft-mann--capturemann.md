---
repo: "craft-mann/capturemann"
name: "capturemann"
description: "Free, open-source screenshots and screen recording with a webcam bubble, local AI captions, Google Drive and YouTube. Every feature is also available to AI agents over MCP and a CLI. macOS, Rust, Apache-2.0."
readmeQualityOk: true
url: "https://github.com/craft-mann/capturemann"
homepage: "https://www.craftmann.app/capturemann/"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["ai-agents", "cli", "macos", "mcp", "open-source", "rust", "screen-recorder", "screenshot", "webcam", "whisper"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-25T01:37:14Z"
lastCommitAt: "2026-11-13T05:29:33Z"
lastReleaseAt: "2026-11-06T12:35:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 55
maintainers: ["trung-tlt"]
openGraphImageUrl: "https://opengraph.githubassets.com/450cabb57ed72533dbc0f77b9259d11311263f17ce03ab3e87e0ed65d1b3156c/craft-mann/capturemann"
discussionCount: 13
---

Free, open-source screenshots, screen recording and audio recording, with local AI captions,<br>
transcripts, meeting minutes and speaker labels, and every feature available to AI agents<br>
through MCP and a CLI.

## Features

✓ works, — not available. Notes in brackets name the limit. Current versions and downloads are on the
[releases page](https://github.com/craft-mann/capturemann/releases/latest); what each platform has been tested on is
in the release notes and in [`verification/`](https://github.com/craft-mann/capturemann/blob/HEAD/verification/).

| Feature | macOS | Windows | Linux |
| --- | :---: | :---: | :---: |
| **Screenshots** of a display or a region, with an annotation editor | ✓ | ✓ | ✓ |
| Window screenshots | ✓ | ✓ | ✓ [Wayland: through the desktop's own picker] |
| **Auto-redact** of personal data and secrets in screenshots (see below) | ✓ | ✓ | ✓ [uses the system `tesseract`] |
| **Copy text** from a screenshot (on-device text recognition; reads the rendered image, so blurred text is not copied) | ✓ | ✓ [reads the OCR languages installed in Windows] | ✓ [uses the system `tesseract`, English unless more language data is installed] |
| **Screen recording**…
