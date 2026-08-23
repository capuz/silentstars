---
repo: "arthurzengg/opencui"
name: "opencui"
description: "AI coding chat sidebar for VS Code."
readmeQualityOk: true
url: "https://github.com/arthurzengg/opencui"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 55
forks: 8
openIssues: 2
closedIssues: 270
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-05-04T04:03:03Z"
lastCommitAt: "2026-08-23T04:10:40Z"
lastReleaseAt: "2026-05-16T01:03:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 37
maintainers: ["arthurzengg"]
openGraphImageUrl: "https://opengraph.githubassets.com/86e0a55174aa2b5f9dd2b55a6780f7ed2800bbe5f1f88be8444333602ada6cd2/arthurzengg/opencui"
---

# OpenCode Panel

> A React chat sidebar for AI coding in VS Code, powered by
> [opencode](https://github.com/sst/opencode). Bring your own model
> (Anthropic / OpenAI / Gemini / local). Everything runs locally — nothing
> leaves your machine except the API call to your chosen provider.

<table>
<tr>
<td width="50%" align="center">
  <sub><b>Chat panel</b></sub>
</td>
<td width="50%" align="center">
  <sub><b>Model · Agent · Effort picker</b></sub>
</td>
</tr>
<tr>
<td align="center">
  <sub><b>Per-workspace chat history</b></sub>
</td>
<td align="center">
  <sub><b>Slash commands</b></sub>
</td>
</tr>
<tr>
<td align="center">
  <sub><b>Manage MCP servers</b></sub>
</td>
<td align="center">
  <sub><b>Context-window usage</b></sub>
</td>
</tr>
</table>

## Highlights

- **Streaming chat** with reasoning blocks and an inline tool-call trace.
- **`@file` mentions** — fuzzy picker with chip-styled tokens; recently-opened files boosted.
- **Image / PDF attachments** — paperclip + clipboard paste; images render as preview thumbnails.
- **Edit + regenerate** — click any past user message; the conversation rewinds via opencode's `session.revert`.
- **Review Changes** card per file with…
