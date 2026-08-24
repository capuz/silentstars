---
repo: "frankekn/needlefish"
name: "needlefish"
description: "Strict local PR review agent — npx needlefish. Reviews your diff with your local CLI runner (codex/claude/opencode) and blocks on real findings."
readmeQualityOk: true
url: "https://github.com/frankekn/needlefish"
homepage: "https://www.npmjs.com/package/needlefish"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["ai-agents", "cli", "code-review", "pull-requests"]
stars: 14
forks: 3
openIssues: 6
closedIssues: 24
watchers: 0
contributors: 5
recentReleases: 6
createdAt: "2026-06-26T06:22:41Z"
lastCommitAt: "2026-08-24T04:22:18Z"
lastReleaseAt: "2026-08-01T03:02:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 58
maintainers: ["frankekn", "actions-user", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf8dbff65a691452804f42513a7452a50906a1d1b943fa50cdb891cb52b40f94/frankekn/needlefish"
---

</p>

# needlefish

[繁體中文](https://github.com/frankekn/needlefish/blob/HEAD/README.zh-TW.md)

> Strict, local PR review that acts like a senior engineer — it
> flags only real defects and stays silent on everything else.

</p>

Needlefish reviews your diff before merge and reports only real defects — bugs,
regressions, security, data loss, migration/upgrade risk, missing validation,
duplicate behavior — never style.

**Why it's different:**

- **Prefer-zero findings.** A strict senior reviewer's bar: if it isn't worth
  blocking merge, it's dropped. No style nits, no noise.
- **Deterministic verdicts.** The `pass` / `needs_human` / `changes_requested`
  verdict is derived from the surviving findings by fixed rules, never
  freehanded by the model.
- **Isolated review targets.** Reviews run against a throwaway clean clone and
  are checked for tampering after every model call.
- **Guarded evals.** Every prompt/pipeline change is measured against an
  84-scenario harness with active anti-cheat guards before it ships (see
  [Benchmarks](#benchmarks)).

Small PRs use a review pass plus an adversarial critic; large PRs use map/deep
passes before the same critic. Codex is the default…
