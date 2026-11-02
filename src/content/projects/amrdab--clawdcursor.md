---
repo: "AmrDab/clawdcursor"
name: "clawdcursor"
description: "Local MCP server that gives any AI agent safe desktop control on Windows, macOS and Linux. Reads the screen as text and structure (accessibility + OCR) and acts by element name, with screenshots as the last resort. Multi-monitor aware, verifies every action, one safety gate."
readmeQualityOk: true
url: "https://github.com/AmrDab/clawdcursor"
homepage: "https://clawdcursor.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["ai-agent", "claude", "computer-use", "desktop-automation", "mcp", "mcp-server", "model-agnostic", "typescript", "desktop", "ai-tools"]
stars: 406
forks: 59
openIssues: 6
closedIssues: 48
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2026-02-19T12:50:57Z"
lastCommitAt: "2026-11-02T17:57:18Z"
lastReleaseAt: "2026-05-14T07:04:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 31
maintainers: ["AmrDab", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1161723599/84b3321c-2cbb-436e-ac47-54b4b83fb6f8"
---

---

## What's new

**1.5.24** &mdash; **The AI never touches your pill, and failures stop looking like results.**
- While a pause waits for you, nothing reads, clicks or types. The pill and pause prompt are never a target, even from another clawdcursor process.
- On macOS, a screenshot without Screen Recording permission is an error, not a wallpaper image, and open popovers are readable.
- The browser clawdcursor drives comes to the front when it navigates.
- A failed OCR read reports its error instead of "No text detected", and OCR `confidence` is only shown when the engine really has one.

**1.5.23** &mdash; **Windows: finding an element by name no longer matches stray letters.** A lone "C" on another page could match "User code 0", and "Don't Save" could match **Save**. A partial match now has to be a real part of the name you asked for.

**1.5.22** &mdash; **Your turn is as short as possible.** When an agent needs you (a sign-in, a 2FA code), it asks for that one step and does the rest itself. With `done_when` (what shows on screen once you're done), the prompt turns from blue back to amber the moment you finish, with no Resume click.

**1.5.21**
- **`set_value` never guesses…
