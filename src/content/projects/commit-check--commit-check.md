---
repo: "commit-check/commit-check"
name: "commit-check"
description: "Commit policy as code for teams and AI agents: commit messages, branch names, authors, sign-offs, tags, files and AI attribution, checked from one config file."
readmeQualityOk: true
url: "https://github.com/commit-check/commit-check"
homepage: "https://commit-check.com/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["branch-naming", "conventional-commits", "commit-check", "conventional-branch", "naming-conventions", "yet-another-commit-checker", "code-quality", "git-hooks", "git-lint", "pre-commit"]
stars: 101
forks: 19
openIssues: 0
closedIssues: 98
watchers: 2
contributors: 19
recentReleases: 0
createdAt: "2022-04-25T13:41:15Z"
lastCommitAt: "2026-11-18T12:06:07Z"
lastReleaseAt: "2022-12-14T13:27:17Z"
status: "thriving"
tags: ["solo_builder", "funded", "community_hub"]
healthScore: 99
undervaluedScore: 51
maintainers: ["shenxianpeng", "dependabot[bot]", "invictustitan2"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/485387677/2eedadeb-ffe0-42df-80c9-461598d37953"
fundingLinks: ["GITHUB:https://github.com/shenxianpeng"]
discussionCount: 33
---

**Catch bad commits before they merge.**

[Docs](https://commit-check.com/getting-started/) ·
[Rules](https://commit-check.com/rules/) ·
[GitHub Action](https://github.com/commit-check/commit-check-action) ·
[GitHub App](https://github.com/apps/commit-check) ·
[MCP server](https://github.com/commit-check/commit-check-mcp)

**Commit Check** is commit policy as code for teams and AI agents. It validates
commit messages, branch names, authors, sign-offs, tags, committed files and AI
attribution against one `cchk.toml` — in your commit hook, in CI, on every
pull request and inside your AI agent. When the fix is obvious, it hands you
the line.

**On GitHub?** [Install the Commit Check App](https://github.com/apps/commit-check)
and every push and pull request gets a check run, with no workflow file. It is
free for public repositories and personal accounts.

## Quick start

```bash
pip install commit-check        # Python 3.11+
commit-check --message --branch
```

No config needed: out of the box it checks [Conventional Commits](https://www.conventionalcommits.org)
and [Conventional Branch](https://conventionalbranch.org).
