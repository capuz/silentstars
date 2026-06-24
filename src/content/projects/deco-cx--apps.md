---
repo: "deco-cx/apps"
name: "apps"
description: "Open-Source MCP apps powering https://decocms.com"
url: "https://github.com/deco-cx/apps"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 27
forks: 29
openIssues: 38
closedIssues: 34
watchers: 0
contributors: 92
recentReleases: 0
createdAt: "2023-08-16T14:58:15Z"
lastCommitAt: "2026-06-24T00:21:20Z"
lastReleaseAt: "2023-09-01T13:13:11Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 67
maintainers: ["github-actions[bot]", "guitavano", "aka-sacci-ccr"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab99c839d8880496cb9a83b80fb395eb0ffb48366780c68adb50dad24c327b8e/deco-cx/apps"
---

<hr/>  
&nbsp;
![Build Status](https://github.com/deco-cx/apps/workflows/ci/badge.svg?event=push&branch=main)

<hr/>

# Deco **Apps** Library / MCP Servers

Welcome to the `deco-cx/apps` repository!  Read more about apps in the [docs](https://www.deco.cx/docs/en/concepts/app).

Check and test apps in https://mcp.deco.site/.

### Create a new app

Open this repo in an AI Editor and use [NewAppPrompt.md](NewAppPrompt.md) as prompt to create a new app. You can use OpenAPI, API docs or even code that explains the service you wish to expose as an app.

---

## Debugging HTTP Requests

To enable verbose HTTP request debugging logs, set the environment variable `DEBUG_HTTP` to `true` when running this repo:

```sh
DEBUG_HTTP=true deno run ...
```

When enabled, this will print curl-like representations of all HTTP requests made by the internal HTTP client.
