---
repo: "sricola/drydock"
name: "drydock"
description: "Hardware-isolated sandbox for running coding agents on your repos, on macOS. The agent never sees your real API key; egress is deny-by-default; only a diff you approve leaves the sandbox."
readmeQualityOk: true
url: "https://github.com/sricola/drydock"
homepage: "https://sricola.github.io/drydock/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["ai-agents", "anthropic", "apple-silicon", "claude", "coding-agent", "containers", "credential-management", "golang", "isolation", "macos"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-15T21:04:55Z"
lastCommitAt: "2026-08-01T00:39:46Z"
lastReleaseAt: "2026-06-20T01:45:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 65
maintainers: ["sricola"]
openGraphImageUrl: "https://opengraph.githubassets.com/59079cf3e7b0515108a20efeae7254def19ede1046e6961912444b5450791bc2/sricola/drydock"
postedAt: "2026-06-21T00:00:54.805Z"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="site/logo-512-dark.png">
  </picture>
</p>

# drydock

</p>

drydock runs **Claude Code**, **OpenAI Codex**, or **any OpenAI-compatible
model** (Gemini, OpenRouter, local) full-throttle on your own repos, on your
own Mac — no permission prompts, no babysitting. Each task runs sealed in a
throwaway VM. The only thing that ever comes back is a `git diff`, and nothing
reaches your real code until you approve it.

- **It never gets your key.** Your real API key stays on the host; the agent
  only ever sees a short-lived, budget-scoped token (spend overshoot is
  bounded to one in-flight request by default).
- **It can't smuggle anything out.** The internet is deny-by-default: no
  exfiltrating your code, no calling home (you allow the package registries it
  needs, nothing else).
- **Nothing touches your repo until you say so.** You read the diff and approve
  it before it ever reaches `origin`.

Most agent tooling tries to keep the agent *well-behaved*: permission
prompts, output filters, policy. drydock takes the opposite stance: **contain
the blast radius**. A hostile agent — a poisoned repo, a malicious dependency,…
