---
repo: "bigospeedrun/verifier"
name: "verifier"
description: "Public, isolated Lean proof reruns with Comparator and nanoda; pinned challenges and artifact receipts."
readmeQualityOk: true
url: "https://github.com/bigospeedrun/verifier"
homepage: "https://bigOspeedrun.com"
language: "Lean"
languages: ["Lean"]
languagePcts: [99]
topics: ["lean", "research-software"]
stars: 5
forks: 13
openIssues: 8
closedIssues: 63
watchers: 0
contributors: 15
recentReleases: 0
createdAt: "2026-10-10T09:22:54Z"
lastCommitAt: "2026-11-03T10:56:02Z"
status: "newborn"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 97
undervaluedScore: 75
maintainers: ["nmamano", "SovereignSteak", "ptweezy"]
openGraphImageUrl: "https://opengraph.githubassets.com/5718c8aeee84124cd516d483516398da6a27adb9792c11cda4a13f4b728486bc/bigospeedrun/verifier"
fundingLinks: ["GITHUB:https://github.com/bigospeedrun"]
---

# Big O Speedrun verifier

Submit a Lean proof of a bound for Fourier transform, 3SUM, APSP, Subset Sum,
average sensitivity, Catalan's constant, Snaky, or the Heilbronn triangle problem.
The verifier checks the proof against our fixed statement on GitHub Actions.
A passing submission appears as **Lean Verified** on [bigospeedrun.com](https://bigospeedrun.com).
An open submission without a passing check appears as **Claimed**.

## Submit

Choose either route. Both use the same statement, record gate, and proof checks.

- **Pull request:** add a new folder under
  `submissions/<problem>/<github-login>-<short-name>/` in this repository.
  Include `Submission.lean`, any extra Lean files under `Submission/`, and
  `manifest.json` containing only `{"problem":"3sum","bound":"1999/1000"}`
  with the problem and bound changed to match the proof. Open a PR that adds
  only that folder. Export `Race.bound` and keep source credits in the Lean files.
- **Issue:** keep the proof in a public repository and
  [open a submission issue](https://github.com/bigospeedrun/verifier/issues/new/choose).
  The form takes the problem, repository URL, complete commit SHA, and reduced
  exact rational bound.…
