---
repo: "understudylabs/understudy-agent-tools"
name: "understudy-agent-tools"
description: "Public MIT-licensed Understudy agent tools and skill library"
readmeQualityOk: true
url: "https://github.com/understudylabs/understudy-agent-tools"
language: "TypeScript"
languages: ["TypeScript", "Rust", "JavaScript"]
languagePcts: [44, 27, 22]
stars: 7
forks: 3
openIssues: 5
closedIssues: 8
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-06-03T19:01:17Z"
lastCommitAt: "2026-07-21T06:11:40Z"
lastReleaseAt: "2026-07-13T17:14:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 62
maintainers: ["lluisinthedesert", "aamir"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f33f00e8536a014b197209383cd3ffef1edfad546e8568ecff68ddc7fb88d64/understudylabs/understudy-agent-tools"
---

# Understudy Agent Tools

**Type `/understudy:onboard` in Claude Code — or the matching onboarding
command in your agent — and it walks your LLM app from captured traces to a
measured, cheaper — often local — model, with evidence you can trust.**

Works with **Claude Code** · **Cursor** · **Codex** · **OpenCode** · **Hermes Agent** · **Devin**

</div>

---

Understudy is a public, MIT-licensed skill library plus a thin CLI. It gives
your coding agent the playbooks to evaluate an AI workload locally, optimize
it, and route it to a better-value model — **local-first, with no uploads, no
provider calls, and nothing spent by default**.

## Get started (30 seconds)

```bash
curl -fsSL https://raw.githubusercontent.com/UnderstudyLabs/understudy-agent-tools/main/install.sh | bash
```

The installer sets up the CLI, asks which coding agents to attach to (Claude
Code, Cursor, Codex, OpenCode, Hermes Agent, all, or CLI-only), and — if you
pick Claude Code — opens it in the current directory. Then, in Claude Code:

```text
/reload-plugins
/understudy:onboard
```

That's it. Onboarding profiles your machine, interviews you about your
workload, and starts the improvement loop. No registration…
