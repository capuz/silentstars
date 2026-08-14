---
repo: "sublang-ai/spex"
name: "spex"
description: "The essential spec layer AI agents need to build software reliably."
readmeQualityOk: true
url: "https://github.com/sublang-ai/spex"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 90
forks: 3
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 5
createdAt: "2026-03-12T08:56:48Z"
lastCommitAt: "2026-08-14T05:06:26Z"
lastReleaseAt: "2026-08-05T15:17:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 28
maintainers: ["slalph"]
openGraphImageUrl: "https://opengraph.githubassets.com/75d9c9bfd3704a4ad4860f16bbe0bc899bf2362332013e3407befd2e10da1978/sublang-ai/spex"
---

# Spex

*See and act on your specs.*

Spex makes a project's specifications readable and actionable by both
people and AI agents:

- **`@sublang/spex`** scaffolds and lints a shared `specs/` convention.
- **Spex Desktop** reads those specs and runs AI-agent playbooks against
  local projects.

## CLI

Requires Node.js 20 or later. Install globally with
`npm install -g @sublang/spex`, or run it directly:

```sh
npx @sublang/spex scaffold                         # create specs/
npx @sublang/spex scaffold --agents=claude,codex # choose coding agents
npx @sublang/spex scaffold --lang zh              # use Chinese templates where available
npx @sublang/spex scaffold --update               # refresh the scaffold
npx @sublang/spex scaffold --update --lang zh     # switch a tree to Chinese
npx @sublang/spex lint                             # check the tree
```

The scaffold contains decision records, intent records, and one Markdown
file per spec package. A package states its intent, External Behavior that
its users—people or software components—may rely on, optional hidden Internal
Behavior, and Verification. Behavior that emerges across packages is itself
a package citing its peers;…
