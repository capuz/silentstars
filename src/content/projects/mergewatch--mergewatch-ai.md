---
repo: "mergewatch/mergewatch.ai"
name: "mergewatch.ai"
description: "AI-powered PR reviews running in your Cloud. Your models, your cloud, your rules. No code stored."
readmeQualityOk: true
url: "https://github.com/mergewatch/mergewatch.ai"
homepage: "https://mergewatch.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["ai-code-review", "automated-code-review", "bedrock", "claude", "code-review", "github-actions", "github-app", "llm", "multi-agent", "open-source"]
stars: 24
forks: 3
openIssues: 162
closedIssues: 159
watchers: 0
contributors: 5
recentReleases: 9
createdAt: "2026-03-05T00:45:01Z"
lastCommitAt: "2026-10-23T08:46:40Z"
lastReleaseAt: "2026-10-02T01:51:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 52
maintainers: ["santthosh", "davidsun-mindbody"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bbe3f33c691dcd255078caa13bdb3f95b35ba0199fae75c1ba4c8b49c6aa132/mergewatch/mergewatch.ai"
---

---

MergeWatch is a GitHub App that reviews every pull request with a team of specialized AI agents running in parallel. Security, bugs, style, error handling, test coverage, and comment accuracy are each reviewed independently, then an orchestrator deduplicates findings and scores merge readiness from 1 to 5.

Install it on your repos and it just works. Every PR gets a structured review comment, a Check Run in the merge box, and optionally a Mermaid architecture diagram of the changes.

## What you get

- **6 review agents + 2 utilities** running in parallel (security, bug, style, error handling, test coverage, comment accuracy — plus summary and diagram generators)
- **Merge readiness score** (1-5) on every PR so you know at a glance if it's safe to merge
- **Any LLM** — Anthropic, AWS Bedrock, LiteLLM (100+ providers), or Ollama for fully local/air-gapped
- **Smart skip** — auto-detects trivial PRs (lock files, docs, config) and skips them to save cost
- **GitHub Checks integration** — pass/fail in the PR merge box
- **Mermaid diagrams** — auto-generated architecture diagram of each PR's changes
- **Codebase awareness** — agents can request and read source files beyond the…
