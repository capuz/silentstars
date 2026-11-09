---
repo: "AndrewDryga/coop"
name: "coop"
description: "Leverage full potential of coding agents without the risks. Run them in a sandbox with restricted networking, file access and secrets hidden. By Protectorate."
readmeQualityOk: true
url: "https://github.com/AndrewDryga/coop"
homepage: "http://coop.dryga.com/"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["agent", "ai", "llm", "sanbox", "loops", "zed"]
stars: 54
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-13T18:41:55Z"
lastCommitAt: "2026-11-09T04:34:25Z"
lastReleaseAt: "2026-06-17T22:45:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 34
maintainers: ["AndrewDryga"]
openGraphImageUrl: "https://opengraph.githubassets.com/71bb1245b903a3b91ea022b8f9e7db9ee80ae5bd9c13fd5b10d9b1cf831f0a2f/AndrewDryga/coop"
---

Run your AI agents in a sandbox, with your secrets, API keys and untrusted websites out of reach. Then give them a task queue, and let them work through it overnight.

Coding agents do their best work unleashed, but that's a gamble with your secrets and your code.
co:op runs the agent in a sandbox (aka box) so it sees one folder: your project. The folder
keeps its real path, so the agent works well with your
[editor](#editors-mcp-and-your-own-platform). Your SSH keys, cloud logins and other repos aren't in
the box, and its network is restricted. co:op supports Claude Code, Codex, Gemini CLI and Grok.

```bash
cd ~/code/your-repo && coop claude
```

The [website](https://coop.dryga.com) shows how it works, and the
[guide](https://coop.dryga.com/docs.html) walks through every feature.

## Why a box

Agents do what they read in code, docs and issues, even when an attacker wrote it:

- A comment hidden in a README can tell your agent to post your SSH key in an issue. In the sandbox
  there is no key to post.
- A package the agent installs can try to send your `.env` to a stranger's server. In the sandbox
  `.env` cannot be read, and with filtered networking, the default, that server…
