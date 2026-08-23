---
repo: "EstebanForge/construct-cli"
name: "construct-cli"
description: "The secure loading program (sandbox) for AI Agents"
readmeQualityOk: true
url: "https://github.com/EstebanForge/construct-cli"
language: "Go"
languages: ["Go"]
languagePcts: [88]
stars: 61
forks: 2
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-18T22:38:14Z"
lastCommitAt: "2026-08-23T04:09:52Z"
lastReleaseAt: "2025-12-31T19:16:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 41
maintainers: ["EstebanForge", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2b9124ab991bde3347cb557dbfbc9b6dd44064b0fbe4fa964555c4c8a62873f/EstebanForge/construct-cli"
discussionCount: 0
---

# The Construct CLI

</p>

**The Construct** is a single-binary CLI that boots a clean and isolated sandboxed container, preloaded with AI agents. It keeps your host free of dependency sprawl, adds optional network isolation, and works with Docker, Podman, or macOS native container runtime.

But, **most importantly**, it keeps your local machine safe from LLM prompt injection attacks, malware distributed this way, credentials stolen this way, and dangerous derps still being committed by AGENTS that can leave you [without any of your files](https://www.reddit.com/r/ClaudeAI/comments/1pgxckk/claude_cli_deleted_my_entire_home_directory_wiped/).

## Highlights

- **One command** to use any AGENT inside a secured, isolated sandbox. Agents spawn from the path where you call them, without a path escape.
- **Zero Config**: no complex setup. The Construct just works out of the box across macOS, Linux, and Windows (WSL).
- **Auto-detection**: Automatically detects and uses the best available container runtime (macOS native → Podman → Docker)
- **Experimental MicroVM Engine**: Optional hardware-level isolation via microVMs (`backend = "microvm"` using microsandbox), running agents with…
