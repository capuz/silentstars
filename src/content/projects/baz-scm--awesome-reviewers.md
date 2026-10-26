---
repo: "baz-scm/awesome-reviewers"
name: "awesome-reviewers"
description: "Ready-to-use system prompts for Agentic Code Review."
readmeQualityOk: true
url: "https://github.com/baz-scm/awesome-reviewers"
homepage: "https://awesomereviewers.com/"
language: "Python"
languages: ["Python", "JavaScript", "HTML"]
languagePcts: [45, 24, 23]
topics: ["agents", "baz", "code-review", "coding-agents", "copilot", "cursor", "llm", "prompt-engineering", "pull-request-review", "review"]
stars: 154
forks: 16
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-06-19T20:43:32Z"
lastCommitAt: "2026-10-26T09:17:24Z"
status: "thriving"
tags: []
healthScore: 72
undervaluedScore: 37
maintainers: ["internal-baz-ci-app[bot]", "github-actions[bot]", "guyeisenkot"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3a7bc933425cd700d34609953a71050546a5c64dcfdb3fb3da77c2052bf7548/baz-scm/awesome-reviewers"
---

# Awesome Reviewers

Expert engineering instructions for AI and infrastructure domains, distilled from code review
discussions in production open-source repositories.

**[awesomereviewers.com](https://awesomereviewers.com)**

Each entry is a self-contained instruction — a rule, why it exists, and usually an example — written
from recurring reviewer feedback in one repository. They are plain markdown, so they drop into an
agent, a review harness, a context broker, or a prompt you are assembling by hand.

## Awesome Reviewers API

Everything is a static file. No key, no rate limit, GET only.
Reference: **[awesomereviewers.com/api/](https://awesomereviewers.com/api/)** ·
description: **[/openapi.json](https://awesomereviewers.com/openapi.json)** (OpenAPI 3.1).

```bash
# one instruction
curl https://awesomereviewers.com/raw/<slug>.md

# every instruction in a domain, concatenated
curl https://awesomereviewers.com/raw/bundles/llm-infra.md

# machine index: slug, title, description, domain, topic, language, source, updated, raw URL
curl https://awesomereviewers.com/raw/index.json

# domain-grouped listing of the whole corpus
curl https://awesomereviewers.com/llms.txt

# the API surface…
