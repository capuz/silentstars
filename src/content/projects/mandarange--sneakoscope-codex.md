---
repo: "mandarange/Sneakoscope-Codex"
name: "Sneakoscope-Codex"
description: "Deterministic Codex Harness for Zero-Hallucination Autonomous Development"
readmeQualityOk: true
url: "https://github.com/mandarange/Sneakoscope-Codex"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [73, 26]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-04-24T07:14:37Z"
lastCommitAt: "2026-07-05T06:33:17Z"
lastReleaseAt: "2026-06-14T12:44:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 47
maintainers: ["mandarange"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4ce384bd35412edc1a8637d984ad43297bb3a1554d11a12cfc963f5c6d7c8a4/mandarange/Sneakoscope-Codex"
---

# Sneakoscope Codex

**The proof-first swarm harness for Codex. Machine-verified completion, not vibes.**

</div>

Sneakoscope Codex (`sks`) is a Codex CLI and Codex App harness for people who want parallel AI coding without losing proof. It gives Codex a simple front door, a dynamic worker swarm, a local dashboard, TriWiki project memory, and release gates that separate machine evidence from LLM opinion.

Current release: `5.3.0`.

## Install

```sh
npx sneakoscope install --yes
```

That one line installs/repairs the global package, runs `sks doctor --fix`, and leaves the Codex App surface ready. The plugin marketplace path is also prepared through `plugins/sks/.codex-plugin/plugin.json`.

For package-managed installs:

```sh
npm i -g sneakoscope
sks doctor --fix
```

## The Front Door

| Command | What it does |
| --- | --- |
| `$Plan "task"` | Planning only. Writes `.sneakoscope/plans/<slug>.md`; no code edits. |
| `$Work` | Executes the latest plan through evidence-gated SKS work. |
| `$Swarm "task"` | Runs the Naruto dynamic parallel swarm with machine verification. |
| `$Team "task"` | Deprecated v5 compatibility alias. New execution redirects to `$Naruto`; legacy Team…
