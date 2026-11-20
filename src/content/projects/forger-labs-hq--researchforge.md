---
repo: "forger-labs-hq/researchforge"
name: "researchforge"
description: "A lab protocol for coding agents. Freeze baselines, run hypotheses in isolated worktrees, reject failures and validate improvements from Claude Code, Cursor  or a direct API key (Gemini/Anthropic/openAI)."
readmeQualityOk: true
url: "https://github.com/forger-labs-hq/researchforge"
homepage: "https://www.researchforgehq.com/"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["ai-agents", "automated-build", "autonomous-research", "autonomous-researcher", "claude-code", "claude-code-skill", "claude-code-skills", "cursor-ide", "cursor-ide-mcp", "dashboard"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-07-11T19:21:45Z"
lastCommitAt: "2026-11-20T12:21:45Z"
lastReleaseAt: "2026-11-20T12:22:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 35
maintainers: ["coderXcode"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0e75b4eaeb200fa77c20690e952a4a4d0cfe231c254c29e4d90a78feb7a11ee/forger-labs-hq/researchforge"
---

https://github.com/user-attachments/assets/4ac96b88-c16d-4332-a660-534ccc3bdec1

# Try it tonight

### 1. Install (one minute)

```bash
pip install researchforge
researchforge claude install --user     # using Cursor? researchforge cursor install --user
```

### 2. Start, in Claude Code (in Cursor, type `@` instead of `/`)

**First, open Claude Code or Cursor in the folder you want to work in.** For a repository, that's the repository itself. For a Kaggle competition, use a new or empty folder. ResearchForge keeps everything for the project in that folder (`.researchforge/` for a repository, `.overnight_<competition>/` for Kaggle), and every command below runs there.
