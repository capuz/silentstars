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
stars: 131
forks: 4
openIssues: 3
closedIssues: 13
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-01-15T16:39:53Z"
lastCommitAt: "2026-10-20T08:49:58Z"
lastReleaseAt: "2026-03-06T12:18:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 35
maintainers: ["hynek-urban", "qi-imbue", "thad-imbue"]
openGraphImageUrl: "https://opengraph.githubassets.com/0630929d05b996683111ac177a47dba49994d7645e77ccb4294727eb82c79274/imbue-ai/latchkey"
---

# Latchkey

Inject API credentials into agent requests.

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

Latchkey is a command-line tool that injects credentials into
curl commands. Its [gateway mode](#gateway-mode) and [permission
system](#permissions) can be used to keep tight control over
sandboxed agents' usage of third-party services.

- `latchkey services list`
	- List third-party services (Slack, Google Workspace, Linear, GitHub, etc.) that are supported out-of-the-box.
    - (In simple cases, `latchkey services register` can be used to add basic support for a new service at runtime.)
- `latchkey curl <arguments>`
	- Automatically inject credentials into your otherwise standard curl calls to HTTP APIs.
	- Credentials must already exist (see below).
- `latchkey auth set <service_name> <curl_arguments>`
	- Manually store credentials for a service as arbitrary curl arguments.
- `latchkey auth browser <service_name>`…
