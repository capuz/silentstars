---
repo: "mpalermiti/outlook-mcp"
name: "outlook-mcp"
description: "MCP server for Microsoft Outlook personal accounts via Microsoft Graph API. 78 tools across 14 categories — mail, inbox rules, calendar, contacts, tasks, drafts, attachments, delta queries, digest, bulk read, MIME export. Community project, not affiliated with Microsoft."
readmeQualityOk: true
url: "https://github.com/mpalermiti/outlook-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["calendar", "email", "mcp", "microsoft-graph", "openclaw", "outlook"]
stars: 45
forks: 14
openIssues: 2
closedIssues: 73
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-04-13T02:10:14Z"
lastCommitAt: "2026-11-27T16:26:05Z"
lastReleaseAt: "2026-04-29T21:54:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 44
maintainers: ["mpalermiti", "dependabot[bot]", "neilbrencode"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b58891db34cf3d3d09c9012bdecba043aa7f77717249e17042afb3ddf29b25e/mpalermiti/outlook-mcp"
---

# outlook-mcp

MCP server for Microsoft Outlook personal accounts via Microsoft Graph API.

> **Personal Microsoft accounts only** — `@outlook.com`, `@hotmail.com`, `@live.com`. Work/school accounts (Entra ID) are not supported: the server is built and tested on personal accounts. Fixes that make a tool behave on a work account, without changing what a personal account sees, are welcome.

> **Disclaimer:** Independent open-source project. Not affiliated with, endorsed by, or supported by Microsoft Corporation. "Outlook" and "Microsoft Graph" are trademarks of Microsoft.

> **On a Mac and seeing "Not authenticated"?** Upgrade to 1.32.0, then run `outlook-mcp status`. On Oct 26, 2026, an update to the Microsoft sign-in library outlook-mcp uses changed where your sign-in is kept in the Keychain, so installs and upgrades from that day couldn't find it. 1.32.0 looks in the original place again. [What happened and what to do](#not-authenticated-after-upgrading-macos).

---

## Who this is for

You'll like this if you're:
