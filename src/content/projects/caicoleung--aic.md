---
repo: "CaicoLeung/aic"
name: "aic"
description: "aic — AI git commit tool that splits your work into hunk-level atomic commits. Rust CLI, 12 LLM providers."
readmeQualityOk: true
url: "https://github.com/CaicoLeung/aic"
homepage: "https://caicoleung.github.io/aic-web/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["git", "git-commit-messages", "rust-cli", "rust", "aic", "ai", "cli", "command-line", "conventional-commits", "developer-experience"]
stars: 16
forks: 0
openIssues: 1
closedIssues: 21
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-05-17T09:13:07Z"
lastCommitAt: "2026-08-10T05:05:52Z"
lastReleaseAt: "2026-07-25T22:31:00Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 56
maintainers: ["CaicoLeung", "Paul-16098"]
openGraphImageUrl: "https://opengraph.githubassets.com/59c14b7c57f4f3b9ef0590fb3994b7db2c9f6fce7d9b6488b6d5a8aab7d769b7/CaicoLeung/aic"
---

# aic

> **简体中文:** [README.zh-CN.md](https://github.com/CaicoLeung/aic/blob/HEAD/README.zh-CN.md)

AI commit messages that are **actually atomic** — and work with your existing tools, **no API key needed**.

🌐 **Website:** <https://caicoleung.github.io/aic-web/>

---

## ✨ Hunk-level commits, not file-level

Most AI commit tools treat a **file** as the atomic unit. aic treats a **hunk** — a single contiguous change — as the unit.

Edit one file in three unrelated ways and `aic` produces three clean commits. No manual `git add -p`, no mixed-concern history.

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
