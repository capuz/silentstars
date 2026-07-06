---
repo: "jmrplens/gitlab-mcp-server"
name: "gitlab-mcp-server"
description: "Open source GitLab MCP server for AI assistants: 2-tool dynamic find/execute over 860+ GitLab actions (1,000+ Enterprise), stdio/HTTP/OAuth, safe/read-only modes."
readmeQualityOk: true
url: "https://github.com/jmrplens/gitlab-mcp-server"
homepage: "https://jmrplens.github.io/gitlab-mcp-server/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["ai-tools", "gitlab", "gitlab-api", "go", "llm", "mcp", "mcp-server", "model-context-protocol"]
stars: 30
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-04-11T21:48:02Z"
lastCommitAt: "2026-07-06T07:02:54Z"
lastReleaseAt: "2026-04-25T20:32:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 50
maintainers: ["jmrplens", "dependabot[bot]", "turchinc"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1208139072/352932d9-c4e8-4ed9-beb1-0b315ee2cc20"
fundingLinks: ["GITHUB:https://github.com/jmrplens"]
---

</p>

# GitLab MCP Server

</p>

**Connect your AI assistant to GitLab so it can review merge requests, triage pipelines, manage issues, and draft releases — in plain language.** One static binary (or a container), [1000+ GitLab tools](#tool-surfaces) over the full REST + GraphQL API, working with Claude, Cursor, VS Code, and any MCP client.

You talk to your AI assistant; it does the GitLab work. No project IDs, API endpoints, or JSON to remember.

> "Review merge request !15 — is it safe to merge?" · "Why did the last pipeline fail?" · "List open issues assigned to me" · "Generate release notes from v1.0 to v2.0"

---

> 🤖 **Using an AI assistant?** Give it this repository URL and ask it to install the server for your client. Everything a model needs to do it headlessly — the declarative per-client config, `claude mcp add` one-liners, and defaults — is in [`llms.txt`](https://github.com/jmrplens/gitlab-mcp-server/blob/HEAD/llms.txt) (no interactive wizard required).

## Install in 60 seconds

Pick one. Each path ends with you typing a prompt to your assistant.

### One-click install

<table>
  <tr>
    <th align="left">Client</th>
    <th align="left">One-click button</th>…
