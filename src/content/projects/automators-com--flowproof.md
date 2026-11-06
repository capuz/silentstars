---
repo: "automators-com/flowproof"
name: "flowproof"
description: "Open-source E2E testing an AI agent records for you. Plain-language tests, recorded once on your real app (web, desktop, SAP, Citrix, AI agents), replayed on every commit with zero LLM calls."
readmeQualityOk: true
url: "https://github.com/automators-com/flowproof"
homepage: "https://automators.ai/flowproof"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["automation", "automation-framework", "test-automation", "test-automation-framework", "testing", "testing-framework", "ai-agents", "citrix", "mcp-server", "self-healing"]
stars: 6
forks: 1
openIssues: 14
closedIssues: 91
watchers: 0
contributors: 6
recentReleases: 8
createdAt: "2026-07-18T08:48:03Z"
lastCommitAt: "2026-11-06T12:17:12Z"
lastReleaseAt: "2026-09-07T07:40:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 67
maintainers: ["HappyDevs1", "AminChirazi", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddfa32ebbdfd013772ed9ceec317ccd098d760bf46c6ed20089f37956466e4d4/automators-com/flowproof"
---

# flowproof

## End-to-end tests an AI agent records for you

flowproof is open-source E2E testing for the age of agents. Write the test the
way you would explain it to a colleague. An AI agent performs it once against
your real application, and while it works, flowproof records what it did: the
element it found for every step, the action it took, and what it checked. That
recording is the test. From then on a deterministic engine replays it on every
commit with **zero LLM calls**: no API key, nothing billed, nothing left to
sampling.

```yaml
# examples/tricentis-insurance-natural.flow.yaml
name: Tricentis Insurance (natural)
app: web
url: https://sampleapp.tricentis.com/101
steps:
  - Open the truck insurance quote
  - Fill out all the vehicle data and click next
  - Fill out all the insurant data and click next
  - Fill out all the product data and click next
  - Pick one of the price options
  - Fill in what sending the quote needs and send it
  - assert: page shows Sending e-mail success! within 20s
```

```bash
flowproof record examples/tricentis-insurance-natural.flow.yaml   # the agent drives the app, once
flowproof run examples/tricentis-insurance-natural.flow.yaml      #…
