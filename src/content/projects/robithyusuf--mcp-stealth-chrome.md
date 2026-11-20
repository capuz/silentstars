---
repo: "RobithYusuf/mcp-stealth-chrome"
name: "mcp-stealth-chrome"
description: "Stealth Chrome MCP server - 100++ tools for AI agents. One-liner Cloudflare Turnstile bypass (proven), dual-mode HTTP with TLS fingerprint, AI Vision reCAPTCHA solver. Python + nodriver + curl_cffi + FastMCP."
readmeQualityOk: true
url: "https://github.com/RobithYusuf/mcp-stealth-chrome"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["anti-bot", "browser-automation", "chromium", "claude", "cloudflare-bypass", "curl-cffi", "mcp", "model-context-protocol", "nodriver", "recaptcha"]
stars: 29
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-18T05:46:41Z"
lastCommitAt: "2026-11-20T12:02:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 36
maintainers: ["RobithYusuf"]
openGraphImageUrl: "https://opengraph.githubassets.com/c09beeccaddb72990db512204ac1c7993d40fb799d45ea221843280fbbd8df23/RobithYusuf/mcp-stealth-chrome"
---

# MCP Stealth Chrome

An MCP server with 169 tools that gives an AI agent a real Chrome browser and an HTTP client with Chrome's TLS fingerprint.

It drives Chrome over CDP with [nodriver](https://github.com/ultrafunkamsterdam/nodriver), so there is no WebDriver and the identity stays that of your real browser and machine. Requests that need no browser go through [curl_cffi](https://github.com/lexiforest/curl_cffi), which is much lighter than rendering a page. Search and page reading work without an API key.

Use the browser when a page needs JavaScript, a login or a person looking at it. Use HTTP when you only need the data.
