---
repo: "purrgrammer/fragua"
name: "fragua"
description: "durable human and LLM workflows"
readmeQualityOk: true
url: "https://github.com/purrgrammer/fragua"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 12
forks: 2
openIssues: 6
closedIssues: 21
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-05-21T15:28:55Z"
lastCommitAt: "2026-10-19T09:15:01Z"
lastReleaseAt: "2026-07-06T15:13:12Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 47
maintainers: ["purrgrammer", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/37e2b5c7c465dd269f12702e4ec15e5c43dc40fb2a4a8449236ce93f82421453/purrgrammer/fragua"
---

# fragua

> Cuando los niños en la escuela \
> estudiaban pa' el mañana, \
> mi niñez era la fragua: \
> yunque, clavo y alcayata.
>
> — Camarón de la Isla

*fragua — Spanish for forge.*

**A durable, steerable, auditable control plane for an AI coding harness.** Wire LLM agents into a YAML state machine; fragua runs it deterministically — survives crashes and provider outages, lets you steer a live run mid-flight, and records every run as a replayable artifact. It's the control plane, not the model — not a replacement for Claude Code or Codex, but the layer that makes an agent loop durable, inspectable, and safe to leave running. On your laptop and in CI.

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
    text: "Post this…
