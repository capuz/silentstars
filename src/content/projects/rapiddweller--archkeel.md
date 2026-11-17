---
repo: "rapiddweller/archkeel"
name: "archkeel"
description: "Archkeel checks architecture boundaries and declared changes in AI-assisted code."
readmeQualityOk: true
url: "https://github.com/rapiddweller/archkeel"
homepage: "https://archkeel.com"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [56, 24]
topics: ["agentic-engineering", "agentic-workflows", "architecture", "deterministic", "guardrails", "agentic-workflow", "harness-engineering", "verifiable-ai"]
stars: 18
forks: 3
openIssues: 70
closedIssues: 568
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-14T08:24:09Z"
lastCommitAt: "2026-11-17T14:44:35Z"
lastReleaseAt: "2026-09-24T17:22:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 56
maintainers: ["ake2l"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1369563195/e69af688-a8ac-41ba-a6ed-0f5906d1a442"
discussionCount: 1
---

# ArchKeel

**See what your code really does. Check it against what you decided.**

ArchKeel reads your code and checks it against the boundaries you declare in a contract. It gives
a verdict with the source evidence for each finding. No LLM is in the verdict.

- **PASS**: every rule holds, with complete evidence. Exit code 0.
- **FAIL**: the code breaks a rule. Exit code 1.
- **UNKNOWN**: the analysis cannot decide a rule. Exit code 2. **UNKNOWN is not a pass.**

**See it live.** ArchKeel checks itself as one system, its Python shell and its Rust core.
The badge above is the verdict of the weakest part, and the reports follow the current `main`:
[ArchKeel as one system](https://rapiddweller.github.io/archkeel/self/index.html) ·
[the Rust core](https://rapiddweller.github.io/archkeel/self/core.html) ·
[the Python shell](https://rapiddweller.github.io/archkeel/self/shell.html) ·
[the fixture showcase](https://rapiddweller.github.io/archkeel/showcase/index.html).
Each report shows every FAIL and every UNKNOWN as the core gives it. Each cause is pinned in the repository.

*A report of ArchKeel (layout example). The live page and the badge give today's verdict.*

**What each language…
