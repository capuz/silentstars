---
repo: "lukaso/released"
name: "released"
description: "Is your commit shipped? Find the first release tag containing a commit or merged PR/MR — GitHub + curated GitLab hosts (GNOME, KDE, Debian, freedesktop, Kitware)."
readmeQualityOk: true
url: "https://github.com/lukaso/released"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["cli", "cloudflare-workers", "developer-tools", "devtools", "git", "github", "gitlab", "nodejs", "release-management", "version-control"]
stars: 6
forks: 1
openIssues: 9
closedIssues: 16
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-05-16T00:27:07Z"
lastCommitAt: "2026-07-04T22:51:56Z"
lastReleaseAt: "2026-07-04T22:50:39Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 59
maintainers: ["lukaso", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ec281639dcf04e898d3ec4deeb8847aaa51b99800e9fd38bd01f555790af79d/lukaso/released"
---

# released

Find the first release tag that contains a git commit or merged PR/MR.

You have a commit SHA or a merged PR and you want the release it shipped in.
`git describe --contains` answers that locally, but only against a cloned repo
with every tag fetched, its output is `v1.2.3~4^2` instead of `v1.2.3`, and it
won't take a PR number. `released` takes a commit URL, a bare SHA, or a PR/MR for
any public **GitHub** repo or a curated set of **GitLab** hosts (gitlab.com,
GNOME, KDE, Debian, freedesktop, Kitware) and returns the tag, a shareable link,
and an auto-updating badge. No clone.
[How it works](https://released.blabberate.com/how-it-works)

### Try it in 30 seconds

```bash
npx git-released github.com/honojs/hono/commit/f82aba8
# → first released in v4.12.11
```

- **Web**: <https://released.blabberate.com> — paste a commit, SHA, or PR/MR.
- **CLI**: `npx git-released <commit-url | owner/repo sha | PR/MR/issue-url>` (published on
  npm as `git-released` — `released` was taken in 2014). The package installs both
  the `released` and `git-released` bins; `git released <sha>` works inside a repo.

### Embed an auto-updating badge

Drop this in a PR description or a README.…
