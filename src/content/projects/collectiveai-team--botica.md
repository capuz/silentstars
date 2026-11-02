---
repo: "collectiveai-team/botica"
name: "botica"
description: "Recipes and standards for projects: deterministic rules, templates, and design decisions for AI coding agents (opencode, Claude Code, Codex)."
readmeQualityOk: true
url: "https://github.com/collectiveai-team/botica"
homepage: "https://collectiveai-team.github.io/botica/"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["agent-skills", "agents-md", "ai-agents", "ast-grep", "claude-code", "cli", "code-quality", "codex", "coding-standards", "developer-tools"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 130
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-06-14T00:08:40Z"
lastCommitAt: "2026-11-02T13:38:42Z"
lastReleaseAt: "2026-10-10T14:52:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 62
maintainers: ["jedzill4", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/78f881078de313f2f6c2f6156b1da84ebb61eac8e0628f553c0d59563f8335cf/collectiveai-team/botica"
discussionCount: 11
---

---

**Documentation**: [https://collectiveai-team.github.io/botica/](https://collectiveai-team.github.io/botica/)

**Source Code**: [https://github.com/collectiveai-team/botica](https://github.com/collectiveai-team/botica)

---

Botica is a linter and a set of recipes for the repositories of a team.

- **`botica lint`** runs rules over the files of a project: the built-in catalog, and the rules
  that the project writes in `.botica/rules/`. Each rule checks a written
  [standard](https://collectiveai-team.github.io/botica/standards/). It never calls a model or the
  network, and it runs as a command, a hook of prek, a job of CI and a language server.
- **`botica recipe install`** sets up a repository of some kind: the selection of rules in
  `botica.toml`, the hooks of prek, the workflows of GitHub Actions, the agent skills and the
  lines of `.gitignore`. It adds what is missing, and a file that exists is not replaced.
- **Judgment rules** cover what no deterministic check can express. Botica exports them to
  `AGENTS.md` and to the rubric of [abide](https://www.npmjs.com/package/@coldtea/abide), the judge,
  and filters what the judge reports with the same configuration and…
