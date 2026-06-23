---
repo: "purrgrammer/fragua"
name: "fragua"
description: "durable human and LLM workflows"
url: "https://github.com/purrgrammer/fragua"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 8
forks: 2
openIssues: 8
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 8
createdAt: "2026-05-21T15:28:55Z"
lastCommitAt: "2026-06-23T06:42:59Z"
lastReleaseAt: "2026-06-11T09:28:32Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 86
undervaluedScore: 52
maintainers: ["purrgrammer", "github-actions[bot]", "Qildeli"]
openGraphImageUrl: "https://opengraph.githubassets.com/98bbc018e4d982b5feae76cc3c4e060b94ac20b4fdf697e7d8071c16e6d3dbca/purrgrammer/fragua"
---

# fragua

> Cuando los niños en la escuela \
> estudiaban pa' el mañana, \
> mi niñez era la fragua: \
> yunque, clavo y alcayata.
>
> — Camarón de la Isla

*fragua — Spanish for forge.*

**Durable AI workflows for engineering.** Wire LLM agents into a YAML state machine; fragua runs it deterministically — survives crashes and provider outages, lets you steer a live run mid-flight, and records every run as a replayable artifact. On your laptop and in CI.

A workflow is a small state machine in plain text:

```yaml
# review.yaml — scope a diff, review it, gate the result before it lands
name: review
inputs:
  target: { type: string, required: true }
steps:
  review:
    type: llm
    allowed-tools: [read, grep, bash, write]
    prompt: |
      Review the diff in ${{ inputs.target }}. Flag bugs, security,
      scope creep. Write the verdict to review.md.
    next: signoff
  signoff:
    type: human                       # pauses for an operator decision
    text: "Post this review?"
    routes: { approve: exit, revise: review }   # "revise" loops back — a redo gate
```

```sh
fragua run review --input target="HEAD~1..HEAD"
```

The engine compiles that into a graph and drives it —…
