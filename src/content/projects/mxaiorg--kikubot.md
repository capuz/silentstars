---
repo: "mxaiorg/kikubot"
name: "kikubot"
description: "Email-based AI agent network"
readmeQualityOk: true
url: "https://github.com/mxaiorg/kikubot"
language: "Go"
languages: ["Go"]
languagePcts: [93]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-29T11:49:15Z"
lastCommitAt: "2026-07-15T05:53:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 45
maintainers: ["alexpanagides", "mxaiorg"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b0f20ff4090023ad63db57fe9d2e65870c01fd67553f0791d8467d1bac18ca9/mxaiorg/kikubot"
---

</p>

<h1 align="center">kikubot</h1>

  An email-driven, multi-agent framework. Each agent is an inbox.
</p>

---

## Overview

Kikubot turns an email account into an autonomous agent. Each running container polls one IMAP mailbox, runs every new email through an LLM agentic loop with a configurable tool set, and replies via SMTP. Agents collaborate by emailing each other, so a typical deployment looks like several agents — a coordinator and a few specialists — sharing one mail server.

**Why email?** It's the universal asynchronous message bus: humans already use it, every system can send to it, threads carry their own history (`References:` / `In-Reply-To:`), and accounts give you free per-agent identity, ACLs, and durability.

**Benefits:**

- **Email as the AI User Interface.** Deploy AI to an organization via the most used and understood technology - email. No training required, no software to install - just an email address.
- **High Scalability.** Clusters of agents, each agent can be its own cluster - results in theoretically massive scalability.
- **Observability.** Agents communicate with each other via standard email. Access agent accounts to see their internal…
