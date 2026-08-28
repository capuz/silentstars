---
repo: "chienyuanchang/rich-diff-comments"
name: "rich-diff-comments"
description: "Browser extension that adds inline review comments to GitHub PR rich-diff (rendered markdown) view. Comment, reply, resolve, and collapse sections in the rendered view that GitHub doesn't natively support comments on. Independent third-party tool — not affiliated with GitHub, Inc."
readmeQualityOk: true
url: "https://github.com/chienyuanchang/rich-diff-comments"
homepage: "https://chromewebstore.google.com/detail/markdown-pr-comments-for/bdkcmcdfnhonfcpdgcmemkpcmnhnhemj"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [86]
topics: ["browser-extension", "chrome-extension", "code-review", "edge-extension", "github", "markdown", "pull-request"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2026-05-18T17:30:36Z"
lastCommitAt: "2026-08-28T14:28:10Z"
lastReleaseAt: "2026-06-19T05:23:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 67
undervaluedScore: 49
maintainers: ["chienyuanchang"]
openGraphImageUrl: "https://opengraph.githubassets.com/e279258dbe251027c7beaf72a0c76916d28900dbcca8b438da42244d54f574e4/chienyuanchang/rich-diff-comments"
---

# Markdown PR Comments for GitHub and Azure DevOps

Two separate Chrome/Edge extensions that let you leave **and view** inline pull-request review comments directly in rendered Markdown:

- **Markdown PR — Markdown PR Comments for GitHub** targets GitHub rich diff.
- **Markdown PR Comments for Azure DevOps** targets Azure DevOps Preview mode.

Install only the target you use; each package requests access solely to its own service.

## Problem

GitHub rich diff and Azure DevOps Preview render Markdown beautifully, but neither provides the complete block-level review workflow available in source diff. Reviewers otherwise switch views repeatedly to comment, find conversations, and scan what changed.

## What this does

- Overlays a `+` button on every paragraph, heading, list item, table row, and code block in rich diff.
- Click `+` → write a comment → posts as a real PR review comment on the correct source line.
- Renders existing review threads inline at the rendered block that corresponds to each commented line.
- **Reply** to threads, **resolve / unresolve** them, and see **resolved / outdated** state — all from the rendered view.
- **Threads sidebar** docked to the right edge…
