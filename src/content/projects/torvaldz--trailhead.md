---
repo: "ToRvaLDz/trailhead"
name: "trailhead"
description: "Chart a project from a loose idea, then navigate it ticket by ticket on GitHub Issues."
readmeQualityOk: true
url: "https://github.com/ToRvaLDz/trailhead"
homepage: "https://trailhead.marcomigozzi.it"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [75]
topics: ["agent-skill", "agentic", "ai-agents", "anthropic", "claude", "claude-code", "claude-code-plugin", "claude-code-skill", "claude-plugin", "developer-tools"]
stars: 5
forks: 2
openIssues: 5
closedIssues: 150
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-18T16:05:25Z"
lastCommitAt: "2026-09-16T08:43:10Z"
lastReleaseAt: "2026-09-13T11:15:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 74
maintainers: ["ToRvaLDz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1338597341/ab0669db-b8aa-489a-b977-3ec3845df8d1"
---

# Trailhead

🇬🇧 **English** · 🇮🇹 [Italiano](https://github.com/ToRvaLDz/trailhead/blob/HEAD/README.it.md)

</div>

**Start and drive large projects as a map of tickets on GitHub Issues, resolving one at a time until the way to the destination is clear.**

`trailhead` is an orchestrator skill for coding agents, running on [Claude Code](https://docs.claude.com/en/docs/claude-code) and [Codex CLI](https://developers.openai.com/codex/cli) from a single source. It gives a big, foggy idea a place to begin (a *trailhead*) and a disciplined way to walk it to a working result, with the whole plan living on your issue tracker instead of in scattered local files.

---

## 💡 Why trailhead exists

Two approaches to agent-driven project work each nail one half of the problem:

- **[Wayfinder](https://github.com/mattpocock/skills)** (by Matt Pocock) is brilliant at *starting*. It turns a loose idea into a **shared map of decision tickets on your issue tracker**, named through a proper grilling conversation, with a visible frontier and a "fog of war" for what isn't sharp enough to plan yet. You resolve one decision per session and the map grows outward. What it deliberately doesn't do is…
