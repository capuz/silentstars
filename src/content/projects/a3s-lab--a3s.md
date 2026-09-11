---
repo: "A3S-Lab/a3s"
name: "a3s"
description: "AI Native Operating System"
readmeQualityOk: true
url: "https://github.com/A3S-Lab/a3s"
homepage: "https://a3s-lab.github.io/a3s/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 14
forks: 3
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 6
recentReleases: 6
createdAt: "2026-02-05T13:32:34Z"
lastCommitAt: "2026-09-11T08:15:18Z"
lastReleaseAt: "2026-08-20T14:10:41Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 62
maintainers: ["ZhiXiao-Lin"]
openGraphImageUrl: "https://opengraph.githubassets.com/63946b2b5b4f349e7547e226d443dff69c1e2e9c16cc4cab81e93fa06d101605/A3S-Lab/a3s"
---

</p>

  <strong>Language / 语言:</strong>
</p>

</p>

</p>

A3S is an open-source, local-first runtime platform for building, running, and
operating agent work. One interface connects sessions, models, tools,
permissions, durable workflows, isolated execution, and Cloud operations while
keeping authority boundaries and external dependencies explicit.

Start with one local Code session. Add a signed capability, a durable workflow,
an isolated Box workload, or Cloud coordination only when the work requires it.

> [!IMPORTANT]
> This repository is the reviewed integration snapshot for independently
> versioned A3S products. Most components are pinned here as git submodules;
> the root owns installers, orchestration, compatibility locks, and shared
> documentation. It is not a Rust workspace or a second copy of each product.

## Start local

The product entry is **`a3s`**; interactive Code is **`a3s code`**. Prefer one
install channel. Homebrew (macOS/Linux):

```bash
brew tap a3s-lab/tap https://github.com/A3S-Lab/homebrew-tap
brew install a3s
cd /path/to/project
a3s code
```

Or the official installer (auto-prefers Homebrew when available, otherwise the
GitHub binary):

```bash
curl…
