---
repo: "funkyhq/funky"
name: "funky"
description: "The durable runtime for agent swarms."
readmeQualityOk: true
url: "https://github.com/funkyhq/funky"
homepage: "https://funky.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 13
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-15T23:06:11Z"
lastCommitAt: "2026-08-19T04:07:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 45
maintainers: ["jinxi97", "RuoxiQin"]
openGraphImageUrl: "https://opengraph.githubassets.com/236143f28f2523878e4398f78f062a9ec2b7bf705f3b36d72cb1ec94f4a124d0/funkyhq/funky"
---

# Funky

The durable runtime for agent swarms.

Define an agent, give it a sandboxed environment, send it work. Funky handles the durability and the infrastructure.

## Quickstart

Requires Docker. No API key needed.

```bash
git clone https://github.com/funkyhq/funky && cd funky
cp .env.example .env        # set FUNKY_AUTH_TOKEN to any long random string
docker compose up --build
```

The stack is up when the `worker` and `api` services are healthy. Then:

```bash
export TOKEN=<your FUNKY_AUTH_TOKEN>
export H="Authorization: Bearer $TOKEN"
export J="content-type: application/json"

# 1. an agent: who it is and what model it uses
AID=$(curl -s -X POST localhost:3000/v1/agents -H "$H" -H "$J" -d '{
  "name": "Funky Assistant",
  "system_prompt": "You are an autonomous research and coding agent.",
  "model": { "provider": "anthropic", "model": "claude-sonnet-5" }
}' | jq -r .id)

# 2. an environment: where its commands run
EID=$(curl -s -X POST localhost:3000/v1/environments -H "$H" -H "$J" -d '{
  "name": "basic",
  "network": { "type": "unrestricted" }
}' | jq -r .id)

# 3. a session: an agent + an environment, with a sandbox and a durable event log
SID=$(curl -s -X POST…
