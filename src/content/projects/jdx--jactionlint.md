---
repo: "jdx/jactionlint"
name: "jactionlint"
description: ":octocat: Static checker for GitHub Actions workflow files"
readmeQualityOk: true
url: "https://github.com/jdx/jactionlint"
homepage: "https://jactionlint.jdx.dev/"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 115
recentReleases: 2
createdAt: "2026-10-05T00:42:21Z"
lastCommitAt: "2026-10-05T10:46:27Z"
lastReleaseAt: "2026-10-05T03:12:26Z"
status: "thriving"
tags: ["funded"]
healthScore: 85
undervaluedScore: 51
maintainers: ["jdx", "v1v", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8a851f81cebfeb7c54f88e7adca724e49faae79b74e150db913feeff4267971/jdx/jactionlint"
fundingLinks: ["GITHUB:https://github.com/jdx", "CUSTOM:https://jdx.dev"]
discussionCount: 0
---

jactionlint
================

[jactionlint][repo] is a static checker for GitHub Actions workflow files and an actively maintained fork of
[rhysd/actionlint][upstream], with upstream pull requests and fixes merged here. [Try it online!][playground]

Features:

- **Syntax check for workflow files** to check unexpected or missing keys following [workflow syntax][syntax-doc]
- **Strong type check for `${{ }}` expressions** to catch several semantic errors like access to not existing property,
  type mismatches, ...
- **Actions usage check** to check that inputs at `with:` and outputs in `steps.{id}.outputs` are correct
- **Reusable workflow check** to check inputs/outputs/secrets of reusable workflows and workflow calls
- **[shellcheck][] and [pyflakes][] integrations** for scripts at `run:`
- **Security checks**; [script injection][script-injection-doc] by untrusted inputs, hard-coded credentials
- **Other several useful checks**; [glob syntax][filter-pattern-doc] validation, dependencies check for `needs:`,
  runner label validation, cron syntax validation, ...

See the [full list][checks] of checks done by jactionlint.

**Example of broken workflow:**

```yaml
on:
  push:…
