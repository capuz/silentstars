---
repo: "ecoma-io/archkeep"
name: "archkeep"
description: "A deterministic architecture governance system for humans and coding agents, polyglot supported"
readmeQualityOk: true
url: "https://github.com/ecoma-io/archkeep"
homepage: "https://ecoma.io"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
topics: ["architecture", "dependency-graph", "developer-tools", "golang", "module-boundaries", "monorepo", "nx", "nx-plugin", "polyglot", "python"]
stars: 5
forks: 2
openIssues: 12
closedIssues: 100
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-06T14:47:10Z"
lastCommitAt: "2026-08-29T10:11:25Z"
lastReleaseAt: "2026-08-19T17:36:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 73
maintainers: ["johnitvn", "renovate[bot]", "ecoma-io[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1325369079/271ae024-755b-4eca-ba02-de286ededff2"
---

</p>

<h1 align="center">Archkeep</h1>

  <strong>The contract between the architecture you intended and the code you actually have.</strong><br />
  Declare your architecture once — layers, scopes, allowed dependencies — and Archkeep judges
  every import in Go, Rust, Python, TypeScript, JavaScript, Vue, Java, Kotlin and C# against it: deterministic
  verdicts with evidence attached, in any repository, with or without Nx or Moon.<br />
  <em>An empty result is a claim, not a shrug.</em>
</p>

</p>

</p>

---

## Architecture doesn't break. It erodes.

Every repository starts with an architecture somebody can hold in their head.
The layers are obvious. The boundaries are obvious. The three engineers who
wrote the first services could recite them.

Then the team grows. Services become dozens of modules across four languages.
New people join, and the boundary rules — which module may know which, why
infrastructure must not leak into domain — exist as a feeling, a Slack thread,
a memory of a meeting. Nobody decided to lose them. They were never written
down anywhere the repository could see.

And then one day a change merges that crosses a line nobody remembers drawing.
The build…
