---
repo: "CaicoLeung/aic"
name: "aic"
description: "AI commit messages that are actually atomic — and work with your existing tools, no API key needed."
readmeQualityOk: true
url: "https://github.com/CaicoLeung/aic"
homepage: "https://caicoleung.github.io/aic-web/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["git", "git-commit-messages", "rust-cli", "rust", "aic", "ai", "cli", "command-line", "conventional-commits", "developer-experience"]
stars: 18
forks: 1
openIssues: 0
closedIssues: 22
watchers: 0
contributors: 4
recentReleases: 4
createdAt: "2026-05-17T09:13:07Z"
lastCommitAt: "2026-09-06T08:04:22Z"
lastReleaseAt: "2026-07-25T22:31:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 56
maintainers: ["CaicoLeung"]
openGraphImageUrl: "https://opengraph.githubassets.com/55cb18143d7a340f44cb6cee5ffc5b492c9b71c76dcad3420b2021a14fad9be6/CaicoLeung/aic"
---

# aic

> **简体中文:** [README.zh-CN.md](https://github.com/CaicoLeung/aic/blob/HEAD/README.zh-CN.md)

AI commit messages that are **actually atomic** — and work with your existing tools, **no API key needed**.

🌐 **Website:** <https://caicoleung.github.io/aic-web/>

---

## ✨ Hunk-level commits, not file-level

Most AI commit tools treat a **file** as the atomic unit. aic treats a **hunk** — a single contiguous change — as the unit.

Edit one file in three unrelated ways and `aic` produces clean, isolated commits. No manual `git add -p`, no mixed-concern history.

```
src/auth.rs  (one file, three changes)

  Other tools:  1 commit  "update src/auth.rs"        ❌ mixed concerns
  aic:          3 commits, one per logical change      ✅

    ├─ hunk 1  →  fix(auth): correct token expiry check
    ├─ hunk 2  →  feat(auth): add OAuth2 login provider
    └─ hunk 3  →  style(auth): tidy imports
```

Run `aic` with **nothing staged** and it auto-detects every unstaged hunk, groups them by concern, and commits each group separately — with the model's reasoning streamed live as it plans the split.

Nothing gets lost or double-committed: every hunk lands in exactly one commit, or the plan is…
