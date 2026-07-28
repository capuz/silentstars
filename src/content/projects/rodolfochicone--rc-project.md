---
repo: "rodolfochicone/rc-project"
name: "rc-project"
description: "Plugin de skills e agentes para Claude Code workflows de engenharia reais, do PRD ao PR"
readmeQualityOk: true
url: "https://github.com/rodolfochicone/rc-project"
homepage: "https://rodolfochicone.dev"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [39, 37]
topics: ["ai-agents", "claude-code", "developer-tools", "llm"]
stars: 19
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-27T18:38:18Z"
lastCommitAt: "2026-07-28T14:58:53Z"
lastReleaseAt: "2026-07-16T02:06:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 79
undervaluedScore: 41
maintainers: ["rodolfochicone", "rchiconemd"]
openGraphImageUrl: "https://opengraph.githubassets.com/b32912f8c83b6afdc1c2cdca5098a188a14a215123fad9991ddbf6b218cae17b/rodolfochicone/rc-project"
fundingLinks: ["GITHUB:https://github.com/rodolfochicone"]
discussionCount: 2
---

<h1>RC</h1>
  <p><strong>Orchestrate AI coding agents from idea to shipped code — one structured pipeline, shipped as a plugin.</strong></p>
  <p>
  </p>
</div>

RC is an **agent plugin** — skills, commands, agents, and hooks — that drives the full lifecycle of
AI-assisted development: optional ideation → PRD → TechSpec → tasks → execution → review →
remediation. It runs **inside your agent host** (Claude Code, OpenCode, and other tools); every
artifact is plain markdown under a project's `.rc/`. No binary, no daemon, no lock-in.

## ✨ Highlights

- **Idea to code in a structured pipeline.** Each phase produces plain-markdown artifacts that feed
  the next: idea (optional) → PRD → TechSpec → tasks → execution → review. Start from an idea for full
  research and debate, or jump straight to a PRD if the scope is clear.
- **Runs in your host.** Claude Code, OpenCode, and other agent tools load the same skills, commands,
  agents, and hooks — auto-discovered from the plugin.
- **Cost-tiered specialists.** Bundled leaf-worker agents route work to the right model: recon on a
  cheap/fast tier (`rc-explorer`, `rc-librarian` on haiku), hard reasoning/review on the strong tier…
