---
repo: "metrum-ai/router"
name: "router"
description: "Self-hosted LLM gateway: quality contracts, pre-call budgets, learned routing. Claude Code & Codex ready."
readmeQualityOk: true
url: "https://github.com/metrum-ai/router"
homepage: "https://llm-api.apps.metrum.ai/docs"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [60, 33]
topics: ["ai-gateway", "claude-code", "codex", "cost-optimization", "golang", "llm-gateway", "llm-router", "open-source", "openai-compatible", "self-hosted"]
stars: 10
forks: 0
openIssues: 22
closedIssues: 166
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-09-08T15:51:33Z"
lastCommitAt: "2026-11-04T12:50:27Z"
lastReleaseAt: "2026-09-14T20:39:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 59
maintainers: ["chetan-metrum-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/159869e26646c166b345ab4b21f7019cc61cbd57f89d770251404b9ed51ec38b/metrum-ai/router"
discussionCount: 1
---

# Metrum AI Router

Metrum website: [metrum.ai](https://www.metrum.ai). See the
[Metrum AI Router product page](https://www.metrum.ai/router) for product
information and enterprise inquiries.

For v4.3.0 operations, see the
[upgrade guide](https://github.com/metrum-ai/router/blob/HEAD/docs-site/docs/release-notes/upgrade-guide.md#compatibility-and-operations-v430),
[AWS Bedrock Converse upstream](https://github.com/metrum-ai/router/blob/HEAD/docs/bedrock.md),
[usage provenance](https://github.com/metrum-ai/router/blob/HEAD/docs/usage-provenance.md), and
[unbilled count-token requests](https://github.com/metrum-ai/router/blob/HEAD/docs/count-tokens.md).
The [fine-tuning recipe](https://github.com/metrum-ai/router/blob/HEAD/docs-site/docs/configuration/fine-tune-own-model.md)
links measured evidence and promotion limits; it is not a default model change.

Agent workloads often make dozens of model calls per task. Paying frontier
price for each call is the default path, and token spend shows up after the
monthly budget is gone. In one committed Harbor run, Codex on `big-coder` used
48,470 Harbor input tokens in a single deterministic job…
