---
repo: "olgaysezgin/autologin-mcp"
name: "autologin-mcp"
description: "Auto-login MCP for AI coding agents. Logs your agent into the app under test; credentials stay on your machine and never reach the model."
readmeQualityOk: true
url: "https://github.com/olgaysezgin/autologin-mcp"
homepage: "https://olgaysezgin.github.io/autologin-mcp/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["ai-agents", "autologin", "browser-automation", "claude-code", "e2e-testing", "mcp", "qa", "chrome-devtools-protocol", "claude", "login"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-11-22T12:37:01Z"
lastCommitAt: "2026-11-23T10:27:28Z"
lastReleaseAt: "2026-11-23T10:28:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["olgaysezgin", "mrsarac"]
openGraphImageUrl: "https://opengraph.githubassets.com/4874adc29f906c471a4ad799e1fb956f77c1aacef3146de8b14e888bb2e1eff6/olgaysezgin/autologin-mcp"
---

Your agent logs in to the app it is testing. Your password never reaches the model.

**autologin-mcp** is an open-source [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server that lets AI coding agents such as **Claude Code** log in to the web app they are testing. When the agent's browser tab shows a login form, a "session expired" message, a 401/403 or a redirect to a login page, the agent calls the `login` tool, and autologin-mcp fills the form with credentials stored on your machine. The username and password never appear in the conversation, so they never reach the model. It works with **Claude in Chrome**, **Playwright MCP** and **chrome-devtools-mcp**, and needs no browser setup.

```text
You:            "Test the checkout flow on staging"
Agent:          …navigates… the session has expired, the app shows a login form
Agent:          calls autologin.login({ url })                 ← no password in the request
autologin-mcp:  returns a one-time script                      ← no password in the response
Agent:          runs it in the tab → { "status": "success" }   ← the page got the password from your machine
Agent:          continues the checkout test
```
