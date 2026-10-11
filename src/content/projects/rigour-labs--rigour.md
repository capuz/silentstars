---
repo: "rigour-labs/rigour"
name: "rigour"
description: "The immune system for AI coding agents"
readmeQualityOk: true
url: "https://github.com/rigour-labs/rigour"
homepage: "https://www.rigour.run/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["agentic-workflow", "ai", "ai-agents", "code-quality", "developer-productivity", "devtools", "guardrails", "lint", "llm", "mcp"]
stars: 27
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-04T04:35:38Z"
lastCommitAt: "2026-10-11T10:14:51Z"
lastReleaseAt: "2026-01-04T15:20:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 41
maintainers: ["erashu212"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4921d3f9b3a352ce75ecaa8b7432d6ddc942ccfefec8f2fd99636f4aedccdad/rigour-labs/rigour"
discussionCount: 1
---

# Rigour

**A reviewer that knows how your team works, whichever agent writes the code.**

Whichever agent your engineers use, its work arrives already shaped by how your team builds software, and it gets closer to your standards every week.

Teams used to carry their judgment through people: the senior who briefed you before you started, the reviewer who caught what you missed, the engineer who remembered why the last attempt failed. Coding agents write faster than any person can brief, review or remember. The knowledge is still in your team; Rigour is how it reaches every agent, at the speed agents work.

Works with Claude Code, Cursor, Codex, Cline and Windsurf. Free, open source, and runs on your machine.

## How it does it

1. **Brief before writing.** Before an agent edits a file, it is told what your team asks of that file: the rules your repository wrote for it, the lessons your team learned on it, the points your team settled against. At most three items per file, each cited. Installed by `rigour setup` (`--no-brief` to leave it out), or `rigour_brief` for any agent with MCP. See [The briefing](https://github.com/rigour-labs/rigour/blob/HEAD/docs/BRIEF.md).
2. **Verify…
