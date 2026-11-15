---
repo: "rsaglobaltech/specgate"
name: "specgate"
description: "Specs as executable contracts — requirements, scenarios and traceability that CI enforces."
readmeQualityOk: true
url: "https://github.com/rsaglobaltech/specgate"
homepage: "https://rsaglobaltech.github.io/specgate/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["ai-agents", "bdd", "ci", "cli", "developer-tools", "gherkin", "requirements", "sdd", "spec-driven-development", "traceability"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 30
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2026-05-06T09:49:40Z"
lastCommitAt: "2026-11-15T08:24:52Z"
lastReleaseAt: "2026-10-06T07:03:12Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 99
undervaluedScore: 67
maintainers: ["rsaglobaltech"]
openGraphImageUrl: "https://opengraph.githubassets.com/8573dbd9614a00a0d50e2668d422603c583ce5f36d888ef85e012165aa69838d/rsaglobaltech/specgate"
---

# ⬡ Specgate

**Specs as executable contracts — requirements, scenarios and traceability that CI enforces.**

Specgate keeps what your product must do in the repository, as numbered
requirements with Gherkin scenarios, next to the code and the tests that prove
them. A test that mentions a requirement's id (`REQ-007`) is the link, and the
traceability matrix is generated from those mentions. The gate, `specgate check`,
fails a pull request when a delivered requirement has no scenario or no test
that names it, or when your test suite fails.

## ⚡ Install

You need **Node.js 22 or later**; 24 is the one to use (the current LTS). On 22, take 22.23.4 or later: it carries the October 2026 security fixes.

```bash
npm install --save-dev @rsaglobaltech/specgate   # in a project with a package.json
npx specgate --help
```

Without installing it (an empty folder, a Java or Python project), prefix each
command with `npx @rsaglobaltech/specgate@latest` instead of `npx specgate`.
With Docker and no Node.js: `docker run --rm -v "$PWD:/workspace" ghcr.io/rsaglobaltech/specgate check`.

Then run `init` once:

- **In a repository that has code** (`package.json`, `pom.xml`, `go.mod`, …),…
