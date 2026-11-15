---
repo: "uxfront-com/testlane"
name: "testlane"
description: "Materialize any git ref of a configured project into an isolated, runnable local workspace."
readmeQualityOk: true
url: "https://github.com/uxfront-com/testlane"
homepage: "https://testlane.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["agentic-ai", "git", "runner", "skills", "worktree"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-07-21T17:17:25Z"
lastCommitAt: "2026-11-15T11:24:30Z"
lastReleaseAt: "2026-11-11T18:08:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 53
maintainers: ["alexgrozav", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/38b9399e049c5caddfbc9602ae833eddcc7a3eb4f312dd1ab3e34309e673fe02/uxfront-com/testlane"
---

# Testlane

Testlane lets you run any branch, pull request or commit of your project on your own machine with one command, in a workspace of its own. It turns a ref, like a PR number, a branch, a commit, a URL or a path, into a git worktree with ports of its own, and installs its dependencies and copies your seed files before it runs anything there. So you can start the app and try the change, while your own checkout stays as it was. The full documentation, with guides and a page for every command, is at [testlane.dev](https://testlane.dev).

```bash
testlane my-project 42 code          # PR #42, opened in your editor
testlane my-project 42 run dev       # the same workspace, its dev server running
testlane my-project clean --merged   # remove the workspaces whose PRs merged
```

Every workspace command takes the same three steps. It resolves the ref to a git target, materializes a worktree for it, then acts, by opening an editor, running a command or starting a shell:

```
resolve(ref) → materialize(workspace) → act(command)
```

## Install

Testlane runs on Node.js and shells out to git, so you'll need both:

| Tool                           | Version       | Required…
