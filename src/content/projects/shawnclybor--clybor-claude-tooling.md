---
repo: "shawnclybor/clybor-claude-tooling"
name: "clybor-claude-tooling"
description: "Standardized Claude Code bootstrap — drop-in .claude/ tree with a 19-agent adversarial review team, Ralph Loop, dev-flow skills, and an init script. Agnostic, project-ready."
readmeQualityOk: true
url: "https://github.com/shawnclybor/clybor-claude-tooling"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [47, 45]
topics: ["adversarial-review", "agent-orchestration", "ai-agents", "ai-development", "anthropic", "boilerplate", "chaos-engineering", "claude", "claude-code", "code-review"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-10T10:56:08Z"
lastCommitAt: "2026-09-21T09:13:38Z"
lastReleaseAt: "2026-05-11T09:56:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 49
maintainers: ["shawnclybor"]
openGraphImageUrl: "https://opengraph.githubassets.com/dec4b17ce083bf05f6d576f1eaa46a52a3e3e8dc9efb84ddd20ef1b27b7616c4/shawnclybor/clybor-claude-tooling"
---

# clybor-claude-tooling

The canonical home for reusable Claude Code tooling: a drop-in `.claude/` tree, a `CLAUDE.md` router template, a measured build pipeline, an adversarial review system with drift detection, write-time and commit-time gates with their negative controls, and a sanitized catalog of skills harvested from real projects.

A project bootstraps from here with `scripts/init.sh`. When a project improves something reusable, it promotes the change back with `scripts/promote.sh`, and a global pre-commit gate keeps every project's copy byte-identical to the canonical one.

## Install / use

1. Clone: `git clone <this repository> ~/gits/clybor-claude-tooling`
2. Create the target project dir: `mkdir -p ~/gits/my-new-project`
3. Init: `bash ~/gits/clybor-claude-tooling/scripts/init.sh ~/gits/my-new-project "My New Project"`
4. `cd ~/gits/my-new-project` and start Claude Code

The router template is [`templates/CLAUDE.md.template`](https://github.com/shawnclybor/clybor-claude-tooling/blob/HEAD/templates/CLAUDE.md.template). `init.sh` copies the `.claude/` tree, fills `{{PROJECT_NAME}}`, makes hooks executable and prints next steps. Re-running it after a template change…
