---
repo: "Smeldr/core"
name: "core"
description: "Typed backend for decisions, tasks, and content: enforced lifecycle, role-gated ratification, and a relation graph that flags its own stale connections. MCP-native. Zero runtime dependencies. Self-hosted."
readmeQualityOk: true
url: "https://github.com/Smeldr/core"
homepage: "https://smeldr.dev"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["go", "golang", "open-source", "zero-dependency", "ai-agents", "mcp", "smeldr", "model-context-protocol", "state-machine", "audit-trail"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-02-28T10:05:50Z"
lastCommitAt: "2026-10-23T08:46:35Z"
lastReleaseAt: "2026-03-15T20:20:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 59
maintainers: ["xxwink"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b1fbceb3fa57893682800c80a180567bb5e017cbf1efc00d3fa9dbfa70a1bcd/Smeldr/core"
discussionCount: 0
---

# Smeldr

Typed backend for decisions, tasks, and content that people and AI agents write to at the same time. Every item has an enforced lifecycle: a Decision moves `proposed → ratified` only when the right role approves it. Every relation between items is checked, not assumed: a background sweep flags connections that no longer hold.

**A real decision, from this repo's own history:**

```json
{
  "decision_number": "D59",
  "state": "ratified",
  "body": "Goals are places: new `contains` RelationStore kind (working name) gives Smeldr a first-class, user-defined taxonomy... Any item relates to a Goal via the new kind; the taxonomy is user/org-defined since Goals are already freely created, not a fixed enum.",
  "next_eval_at": null
}
```

Smeldr's own architecture decisions are tracked as `Decision` items and ratified the same way any Smeldr-hosted decision is. Full text: [DECISIONS.md](https://github.com/Smeldr/core/blob/HEAD/DECISIONS.md) (D59); excerpted above for length.

```bash
cd example/server
SECRET=changeme ENABLE_ORCHESTRATION=1 go run .
```

Start a chat with your favorite agent, create content together and then...

...build and publish websites. Edit sections,…
