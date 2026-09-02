---
repo: "medmcp/medmcp"
name: "medmcp"
description: "MedMCP: An Open Agentic Ecosystem for Medical Imaging Workflows"
readmeQualityOk: true
url: "https://github.com/medmcp/medmcp"
homepage: "https://medmcp.ai"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [72, 21]
topics: ["agentic-ai", "mcp", "medical-imaging"]
stars: 36
forks: 0
openIssues: 2
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-04-07T10:52:41Z"
lastCommitAt: "2026-09-02T08:05:12Z"
lastReleaseAt: "2026-08-25T15:13:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 45
maintainers: ["pfriedri", "jqmcginnis", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cb3b235aa95ef194b530bd32bdf570c86757fdc46d774457a2478e735231abf/medmcp/medmcp"
discussionCount: 0
---

# MedMCP: An Open Agentic Ecosystem for Medical Imaging Workflows
</p>

</p>

MedMCP is an open, community-driven agentic framework that exposes validated medical imaging tools through a natural-language interface.
It is designed to enable clinicians, radiologists, and domain researchers to apply state-of-the-art image analysis methods without requiring expertise in command-line interfaces, Python environment management, or library-specific APIs.

Everything runs **on-premise**: a locally served model plans and sequences the work, all computation is delegated to tested implementations, and no imaging data, patient metadata, or results leave your infrastructure. You work through a single workspace that contains a *file explorer, image viewer, replay engine for personal workflows, and the chat interface*.

> [!WARNING]
> MedMCP is under active development and **not licensed for clinical use**.

---

## Quick start

The easiest way to run MedMCP is with the prebuilt Docker images.

**Start with a single command:** Set `MEDMCP_WORKSPACE` to the folder where your imaging data lives and results should be saved (any absolute path):

```bash
MEDMCP_WORKSPACE="$HOME/medmcp-data" \
  docker…
