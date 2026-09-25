---
repo: "BrokkAi/mjolnir"
name: "mjolnir"
description: "Manage Codex, Claude Code, Muse Code, Kimi Code, Grok Build, and DeepSeek Harness with durable sessions, isolated environments, quotas, and remote control. A Rust terminal and web control plane for Agent Client Protocol (ACP) coding agents."
readmeQualityOk: true
url: "https://github.com/BrokkAi/mjolnir"
homepage: "https://mjolnir.brokk.ai/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["acp", "agent-client-protocol", "ai-agent", "automation", "code-review", "coding-agent", "headless", "multi-agent", "rust", "tui"]
stars: 63
forks: 6
openIssues: 30
closedIssues: 442
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-05-18T11:35:20Z"
lastCommitAt: "2026-09-25T09:01:30Z"
lastReleaseAt: "2026-06-04T09:09:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 38
maintainers: ["jbellis"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c36de401416e27a47bc9b4dda926bd9a7ea5e77d832ecdeac35b9eab2acca61/BrokkAi/mjolnir"
---

# Mjolnir

**One control plane for all your coding agents.**

Mjolnir (`mj`) runs Claude Code, Codex, Kimi Code, Grok Build, and Muse Code
sessions side by side, on your laptop, in containers, over SSH, or on EC2, and
keeps them running after you close the terminal. You can move a session to
another account, another harness, or another machine without starting over.

By default Mjolnir sends recent prompt and reply text, and help-search text, to TypeSafe's hosted Jev classifier through a public proxy, and `[jev] enabled = false` in `config.toml` stops all of it ([details](https://mjolnir.brokk.ai/security/#what-leaves-this-machine-by-default)).

[Documentation](https://mjolnir.brokk.ai/) ·
[Quickstart](https://mjolnir.brokk.ai/quickstart/) ·
[Releases](https://github.com/BrokkAi/mjolnir/releases)

<table>
  <tr>
    <td align="center" valign="top">
    </td>
    <td align="center" valign="top">
    </td>
    <td align="center" valign="top">
    </td>
  </tr>
</table>

## Why Mjolnir

If you use one agent, in one terminal, on one machine, you don't need Mjolnir.
It's for the point where that stops scaling: several subscriptions, several
repositories, several machines, and work that…
