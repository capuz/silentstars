---
repo: "ejiektpobehuk/git-plumber"
name: "git-plumber"
description: "Explore git internals, the plumbing"
readmeQualityOk: true
url: "https://github.com/ejiektpobehuk/git-plumber"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["cli", "education", "git", "tui"]
stars: 37
forks: 0
openIssues: 11
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-06T20:07:46Z"
lastCommitAt: "2026-07-06T07:01:48Z"
lastReleaseAt: "2025-08-20T20:26:21Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "under_pressure"]
healthScore: 74
undervaluedScore: 35
maintainers: ["ejiektpobehuk"]
openGraphImageUrl: "https://opengraph.githubassets.com/91824b77da530466059f1d5b1866663fc49b3f3ad7b956873d463ac5b8ee5aff/ejiektpobehuk/git-plumber"
---

# git-plumber

> [!IMPORTANT]
> Pre-release software. Expect bugs and incomplete features.

> _🎥 Click above to watch git-plumber in action (asciinema demo)_

---

## What is _git-plumber_?

[git-plumber](https://github.com/ejiektpobehuk/git-plumber) is a CLI and TUI application for **exploring the internals of git repositories** in a safe, read-only way.
Browse and understand the contents of the `.git/` directory: refs, trees, blobs, and more.
Demystify compressed and binary “plumbing” beneath git’s familiar porcelain appearance.

Perfect for learning, live experimentation, or just satisfying your curiosity.

### Use cases

- **Learning with _[“Pro Git” 10. Git Internals](https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain))_**: Fire up `git-plumber` in a test repository and see immediately how every command reshapes your repo’s internals.
- **Understanding git storage**: See for yourself how git stores differences between versions — the reason this app was created!

### What _git-plumber_ is not?

- **Not** a replacement for everyday git workflow
- **Not** a “porcelain” UI like [gitui](https://github.com/extrawurst/gitui) or…
