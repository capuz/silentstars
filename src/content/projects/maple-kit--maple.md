---
repo: "maple-kit/maple"
name: "maple"
description: "Open-source visual UX review comments on deployed previews, with a CI merge gate and an agent loop"
readmeQualityOk: true
url: "https://github.com/maple-kit/maple"
homepage: "https://maple-kit.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 19
forks: 3
openIssues: 58
closedIssues: 47
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-18T11:50:19Z"
lastCommitAt: "2026-10-09T10:50:31Z"
lastReleaseAt: "2026-10-05T06:01:55Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 49
maintainers: ["N1TZANKL", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ce64216aaa6818ab156015f938cf336b38fc8707ac82492d8308437f3451e8c/maple-kit/maple"
discussionCount: 8
---

A reviewer points at something on a preview deployment and says what is wrong.
Maple captures where they pointed, what they were looking at and who they are,
hands it to a coding agent in a form it can act on, and holds the merge until
every comment is resolved.

**Status: 0.x.** All eight packages are published, with provenance, through a
trusted publisher. 0.x makes no compatibility promise: a public interface is
broken when breaking it is the right shape, and the changeset says what broke.

## How it works

1. **[Mount](https://github.com/maple-kit/maple/blob/HEAD/docs/configuration.md)**: One route in your application, and one script in the preview build.
2. **[Comment](https://github.com/maple-kit/maple/blob/HEAD/docs/github-auth.md)**: A reviewer points to an issue on the app. Maple records all the context needed for the agent to pick it up.
3. **[Fix](https://github.com/maple-kit/maple/blob/HEAD/docs/agent-loop.md)**: Your agent monitors new comments via the MCP, implements a fix and marks it as resolved.
4. **[Gate](https://github.com/maple-kit/maple/blob/HEAD/docs/gate.md)**: A CI check holds the merge until all comments are resolved, and all visual gates pass.

Code got…
