---
repo: "digline/digline"
name: "digline"
description: "Regression testing for LLM applications in CI. Sample your reference and a score drop is read against how much that score moves on its own. A flip from pass to fail is always a regression. Python CLI, pytest plugin, MCP server."
readmeQualityOk: true
url: "https://github.com/digline/digline"
homepage: "https://digline.dev"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["baseline", "ci", "evals", "github-actions", "llm", "llm-evaluation", "llmops", "mcp", "prompt-engineering", "python"]
stars: 9
forks: 2
openIssues: 3
closedIssues: 175
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-08-26T13:07:35Z"
lastCommitAt: "2026-10-28T09:53:12Z"
lastReleaseAt: "2026-09-10T07:57:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["alexpran"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1347346381/f82a2301-e5bc-45f4-9637-3343dbcf05e2"
---

# digline

**Regression testing for LLM applications: sample your reference, declare a floor on the checks that need one, and a score drop is read against how much that score moves on its own. A flip from pass to fail is always a regression.**

---

*The agent above is the one editing your code, not one running in production.
digline runs in your pipeline over the suite you committed: it reads no
traces.*

Your prompt worked on Tuesday. On Thursday it works a little less — not enough
to break, enough for a user to notice in two weeks. No ordinary test catches it,
because there is no correct output to compare against, only a better or a worse
one.

digline gives you an **approved reference** — the baseline — and on every change
tells you whether you are below it: which case, which check, by how much. The
baseline is a JSON file in your repository, so it goes through code review and
it rolls back with `git`. No server, no account, no network call you have not
configured yourself.

When a check uses a model to grade, that grader does not always agree with
itself. Ask digline to sample and it records how much the score moved on its
own. Declare `floor_standard_errors` on that check…
