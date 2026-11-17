---
repo: "HoldMyBeer-gg/bad-ass-mcp"
name: "bad-ass-mcp"
description: "Cross-platform GUI MCP for interacting with your desktop in macOS, Windows, and Linux!"
readmeQualityOk: true
url: "https://github.com/HoldMyBeer-gg/bad-ass-mcp"
homepage: "https://bam.holdmybeer.gg"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["accessibility", "accessibility-tree", "ai-agents", "at-spi", "axuielement", "claude", "computer-use", "cross-platform", "desktop-automation", "electron"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-04-23T16:07:55Z"
lastCommitAt: "2026-11-17T14:49:08Z"
lastReleaseAt: "2026-11-15T05:30:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 78
undervaluedScore: 53
maintainers: ["jabberwock"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1219187505/fd8428ae-9846-4146-96f8-61e543f6ec1e"
fundingLinks: ["GITHUB:https://github.com/jabberwock"]
---

# bad-ass-mcp

*Every other tool needs a browser or a vision model. This one reads what the OS already knows.*

A cross-platform MCP server for desktop GUI automation, driven by accessibility APIs, not screenshots.

Works with Claude, Codex, Gemini, Ollama, or any OpenAI-compatible client that supports MCP.

*A Diablo 3 Treasure Goblin becomes a playable Skyrim mod with no hand work in between: bad-ass-mcp drives [RustyDemon](https://rustydemon.holdmybeer.gg/), Blender with [BlenderWright](https://blenderwright.holdmybeer.gg/), and the mod export end to end. Click to watch.*

## Why

Most AI desktop automation tools work by taking screenshots and asking a vision model "what do you see?" That's slow, expensive, and fragile.

Every major OS exposes a structured accessibility tree, the same one used by screen readers, that describes every button, text field, combo box, and menu in every running application. **bad-ass-mcp** speaks that language directly.

- **macOS**: AXUIElement via PyObjC
- **Linux**: AT-SPI2 via `gi.repository.Atspi`
- **Windows**: UI Automation via `comtypes`

Actions fire on control objects directly, so the target window doesn't need focus. The user can keep…
