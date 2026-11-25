---
repo: "rig-c/core"
name: "core"
description: "AI-authored 2D rigging and animation, verified before it is written. rigc compiles a rig spec into skeleton data in the Spine 4.3 format, gates it with named assertions held to a spine-core round trip's verdicts, and emits nothing that fails. Ships as an agent skill."
readmeQualityOk: true
url: "https://github.com/rig-c/core"
homepage: "https://rig-c.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai-agents", "bun", "compiler", "rigging", "skeletal-animation", "spine", "spine-animation", "typescript", "2d-animation", "agent-skills"]
stars: 30
forks: 5
openIssues: 1
closedIssues: 722
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-08-22T12:43:29Z"
lastCommitAt: "2026-11-25T03:14:48Z"
lastReleaseAt: "2026-09-02T11:06:54Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 52
maintainers: ["firejune", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e91218c5eb20bd418b5fc61c37a1bba5797d8a1e2c44f041dfac4e51491d544f/rig-c/core"
---

# @rig-c/core

**AI-authored 2D rigging and animation, verified before it is written.** rigc is
a rig compiler: a rig spec and a motion spec in, skeleton data out — in the Spine 4.3
format, with rigc's own compiled model beside it —
gated by a list of named assertions before a byte is written — rigc's own validator in
the published package, held to a `spine-core` round trip's verdicts in this
repository's CI. Built so AI agents can author rigs and check their own work; it ships
as an agent skill. Its canonical npm package is `@rig-c/core`, under the toolchain's
scope. `rig-c` is the convenience install name; `spine-rigc` is the legacy install
name. Both remain published alongside it with the same product files.
