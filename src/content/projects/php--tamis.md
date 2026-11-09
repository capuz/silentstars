---
repo: "php/tamis"
name: "tamis"
description: "🔐 LLM harness triaging GitHub security advisories"
readmeQualityOk: true
url: "https://github.com/php/tamis"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["advisory", "agents", "harness", "llm", "security", "github-actions", "triage", "vulnerability-management"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 11
recentReleases: 10
createdAt: "2026-10-23T06:41:31Z"
lastCommitAt: "2026-11-09T11:59:27Z"
lastReleaseAt: "2026-10-28T09:23:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 59
maintainers: ["alexandre-daubois", "github-actions[bot]", "TimWolla"]
openGraphImageUrl: "https://opengraph.githubassets.com/895c0f4574c3d91cba8ef1240c685527b8b9d4f1b5a2b339c277748819a1174b/php/tamis"
---

# tamis

tamis does a first-pass triage of private vulnerability reports on GitHub. When a new security advisory arrives, an LLM agent investigates it against the repository and tamis puts the findings on a private project board, or posts them as a comment on the advisory with `comment: true`.

For each report, tamis:

- lists public duplicates, and names an embargoed advisory only when it is an exact duplicate,
- finds public issues and pull requests that already fix or harden the same code,
- checks that the files and functions the report cites exist,
- reads the security policy and flags what may exclude the report,
- suggests a CWE and a CVSS 4.0 base vector.

The maintainers keep the decision. tamis only prepares it.

A comment looks like this, with the cited code, the policy check and the severity folded in a details block. [How it works](https://github.com/php/tamis/blob/HEAD/docs/how-it-works.md#the-comment) shows the full layout.

```markdown
### Automated triage

> Suggestions generated with an LLM. They help sort the report and do not replace a maintainer's review.

Scanned on 2026-10-24 at 14:32 UTC on `main` at `21a7561`.

Plausible signed `char` passed to…
