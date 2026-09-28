---
repo: "rvben/upd"
name: "upd"
description: "Local-first dependency updates for polyglot repositories—Python, Node.js, Rust, Go, Ruby, .NET, Terraform, GitHub Actions, pre-commit, and Mise."
readmeQualityOk: true
url: "https://github.com/rvben/upd"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["cli", "dependency-management", "developer-tools", "nodejs", "python", "rust", "dependency-updates", "dotnet", "github-actions", "golang"]
stars: 8
forks: 0
openIssues: 5
closedIssues: 19
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-12-08T14:56:56Z"
lastCommitAt: "2026-09-28T10:03:03Z"
lastReleaseAt: "2025-12-17T15:13:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 60
maintainers: ["rvben", "github-actions[bot]", "upd-dependency-automation[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0eca4a3882983fc57fa8b349f5206017e334933589a4abf22355567dbe3d0fbb/rvben/upd"
---

</p>

# upd

  <strong>Update dependencies across a polyglot repository—locally, safely, and in one command.</strong>
</p>

  Python · Node.js · Rust · Go · Ruby · .NET · Gradle · Docker · Terraform · Nix flakes · GitHub Actions · pre-commit · Mise
</p>

`upd` gives you one reviewable update plan across mixed stacks. It preserves
hand-written constraints, comments, and formatting; previews every proposed
change before it writes; and runs without a hosted service or repository
onboarding.

## Try it now

From any directory inside a Git repository:

```bash
uvx upd
```

That first run is a dry run: it reports what would change and leaves every file
untouched. No repository onboarding or hosted account is required. Review the
plan, then apply it with `uvx upd --apply`.

</p>

  <sub>One preview across four file types. Nothing changes until you pass <code>--apply</code>.</sub>
</p>

</p>

## Why upd

- **One command for a mixed stack.** Check application dependencies, tool
  versions, container images, GitHub Actions, pre-commit hooks, and Terraform
  modules in the same run instead of assembling a different updater for each
  file type.
- **Safe on the first run.** Dry-run is the…
