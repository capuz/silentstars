---
repo: "netclaw-dev/netclaw"
name: "netclaw"
description: "Simple, secure, reliable agents. Self-hosted. Open source. Built with .NET."
url: "https://github.com/netclaw-dev/netclaw"
homepage: "https://netclaw.dev/"
language: "C#"
languages: ["C#"]
languagePcts: [96]
topics: ["agents", "hermes-agent", "netclaw", "openclaw"]
stars: 132
forks: 20
openIssues: 104
closedIssues: 402
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2026-02-21T04:37:06Z"
lastCommitAt: "2026-06-24T00:24:39Z"
lastReleaseAt: "2026-03-07T13:36:36Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 32
maintainers: ["Aaronontheweb", "dependabot[bot]", "petabridge-netclaw[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1163090134/7a8f3a7c-07d4-4da0-9f3a-e3db56d663bd"
discussionCount: 0
---

</p>

  <strong>Run your own agent.</strong><br />
  Simple, secure, reliable agents.
</p>

</p>

  </a>
  </a>
  </a>
  </a>
</p>

# Netclaw

Netclaw is an open-source, self-hosted autonomous operations agent that runs
anywhere — from a Raspberry Pi to a cloud VM. Built on **Akka.NET**, the actor
framework from Petabridge, it's designed for anyone who wants an AI operations
agent with strong safety defaults and as few moving parts as possible.

Your data stays on your infrastructure. Your agent keeps running when a
provider changes their pricing. You control what gets approved and what runs
autonomously — small models welcome.

Other agents go for feature breadth and release velocity. We went a different
route: **simplicity** (readable code, minimal config footprint), **security**
(approval gates and audience dispositions built in, not bolted on after
incidents), and **reliability** (curated skill feeds managed by your org, not
an unaudited public marketplace).

Learn more at **[netclaw.dev](https://netclaw.dev)**.

## How It Works

Netclaw runs as a daemon plus a thin CLI:

- **`netclawd`** — the daemon. It hosts LLM sessions, runs tools, and handles
  persistence. Start it once…
