---
repo: "Olib-AI/mailcue"
name: "mailcue"
description: "All-in-one email testing server - SMTP, IMAP, DKIM, DMARC, SpamAssassin, GPG, REST API & Web UI in a single Docker container"
url: "https://github.com/Olib-AI/mailcue"
homepage: "https://olib-ai.github.io/mailcue/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [50, 30]
topics: ["ci-cd", "developer-tools", "devtools", "dkim", "dmarc", "docker", "dovecot", "email", "email-server", "email-testing"]
stars: 17
forks: 3
openIssues: 3
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-28T19:39:23Z"
lastCommitAt: "2026-06-24T00:21:07Z"
lastReleaseAt: "2026-03-18T16:43:38Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 92
undervaluedScore: 47
maintainers: ["dependabot[bot]", "ibnbd"]
openGraphImageUrl: "https://opengraph.githubassets.com/57f5480f941f40a05209ee513ba87851881da9a396d3bc069f35b68eae2be3b8/Olib-AI/mailcue"
discussionCount: 2
---

<br />
  <br />
  <em>A realistic email testing server in a single Docker container.</em>
  <br /><br />
  <br />
</p>

---

MailCue is an all-in-one email testing server that packages **Postfix**, **Dovecot**, **OpenDKIM**, **OpenDMARC**, **SpamAssassin**, a **FastAPI** REST API, and a **React** web UI into a single Docker container managed by **s6-overlay**. Unlike simple SMTP catchers, MailCue provides a fully-featured mail stack -- complete with IMAP/POP3 access, DKIM signing, DMARC verification, spam filtering, TLS, GPG encryption, and a modern web interface -- so you can test email workflows exactly as they will behave in production.

**[Features](#features)** · **[Quick Start](#quick-start)** · **[Production Deployment](#production-deployment)** · **[Configuration](#configuration)** · **[API Reference](#api-reference)** · **[MCP Server](#mcp-server-ai-agents)** · **[CI/CD](#using-in-cicd)** · **[Contributing](#contributing)**

</p>
</p>
</p>

## Features

| Category | What you get |
|---|---|
| **Catch-all SMTP** | Accepts mail for *any* address on *any* domain. Nothing leaves the container. |
| **Full IMAP & POP3** | Read captured emails with any standard client…
