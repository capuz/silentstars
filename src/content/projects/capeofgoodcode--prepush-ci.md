---
repo: "CapeOfGoodCode/prepush-ci"
name: "prepush-ci"
description: "Run the full CI check in the pre-push hook — and let pull request CI skip commits that provably passed it. Built for AI coding agents."
readmeQualityOk: true
url: "https://github.com/CapeOfGoodCode/prepush-ci"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "claude-code", "continuous-integration", "git-hooks", "github-actions", "openspec", "pre-push"]
stars: 10
forks: 2
openIssues: 6
closedIssues: 151
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-10-10T10:54:57Z"
lastCommitAt: "2026-10-29T10:20:38Z"
lastReleaseAt: "2026-10-28T07:52:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 60
maintainers: ["cogc-factory[bot]", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1413078150/7c809673-dcf9-4eb3-97ff-bddbf435166f"
---

# prepush-ci

Run the full CI check in the `pre-push` hook of an AI agent's cloud session (or any machine that opts in), and let pull request CI skip commits that provably went through it. The default branch always runs CI in full.

The full check can run on any machine that opts in, for example on the VM of a [Claude Code cloud session](https://code.claude.com/docs/en/claude-code-on-the-web), which has no separate VM charge; pull request CI then does not repeat it on billed runners.

The pull request does not look as if nothing ran: it shows what the session checked, as a comment the session posts and updates after each push (the hook that does it is proposed by step 9 of the setup skill, "Show the result after every push"), or, with a GitHub App (`prepush-ci app setup`), as a check run. [Step 7](#7-see-the-result-on-the-pull-request) shows the comment.

## How it works (in one paragraph)

When `PREPUSH_CI=full` is set, a `commit-msg` hook writes the trailer `Prepush-CI: full` into each commit. The `pre-push` hook refuses to push a tip commit that carries the trailer unless the full check passes on it. A small gate in pull request CI reads the trailer of the head commit and skips…
