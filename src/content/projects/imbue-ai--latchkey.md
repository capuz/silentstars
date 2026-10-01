---
repo: "imbue-ai/latchkey"
name: "latchkey"
description: "A command-line tool that injects credentials to curl requests to known public APIs."
readmeQualityOk: true
url: "https://github.com/imbue-ai/latchkey"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agent-skills", "agentic-ai", "ai-integration", "ai-tools", "authentication", "credentials", "curl", "http", "third-party-api-integration"]
stars: 126
forks: 4
openIssues: 5
closedIssues: 8
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-01-15T16:39:53Z"
lastCommitAt: "2026-10-01T10:23:58Z"
lastReleaseAt: "2026-03-06T12:18:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 32
maintainers: ["hynek-urban", "qi-imbue", "thad-imbue"]
openGraphImageUrl: "https://opengraph.githubassets.com/db09d04c50b5f91edb9b2ac1a10a569b17a0c8260de5a0e32917baaa30258c4f/imbue-ai/latchkey"
---

# Latchkey

Inject API credentials into local agent requests.

## Quick example

```bash
# User stores the credentials.
latchkey auth set slack -H "Authorization: Bearer xoxb-your-token"

# Agent makes http calls.
latchkey curl -X POST 'https://slack.com/api/conversations.create' \
  -H 'Content-Type: application/json' \
  -d '{"name":"something-urgent"}'
```

## Overview

Latchkey is a command-line tool that injects credentials into curl commands.

- `latchkey services list`
	- List third-party services (Slack, Google Workspace, Linear, GitHub, etc.) that are supported out-of-the-box.
    - (In simple cases, `latchkey services register` can be used to add basic support for a new service at runtime.)
- `latchkey curl <arguments>`
	- Automatically inject credentials into your otherwise standard curl calls to HTTP APIs.
	- Credentials must already exist (see below).
- `latchkey auth set <service_name> <curl_arguments>`
	- Manually store credentials for a service as arbitrary curl arguments.
- `latchkey auth browser <service_name>`
	- Open a browser login pop-up window and store the resulting API credentials.
    - This also allows agents to prompt users for credentials.
    - Only…
