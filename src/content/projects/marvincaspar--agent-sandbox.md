---
repo: "marvincaspar/agent-sandbox"
name: "agent-sandbox"
description: "Runs AI coding agents inside isolated Docker containers"
readmeQualityOk: true
url: "https://github.com/marvincaspar/agent-sandbox"
language: "Shell"
languages: ["Shell"]
languagePcts: [72]
topics: ["ai-agents", "docker", "llm", "ai", "ai-coding-agent", "opencode", "pi-agent"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-08T05:01:01Z"
lastCommitAt: "2026-11-20T12:02:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 17
maintainers: ["marvincaspar"]
openGraphImageUrl: "https://opengraph.githubassets.com/7abfe7363f3dfa61401473e71c54db425bda7bb810e7f35ae01079a3e20dd10f/marvincaspar/agent-sandbox"
---

# Agent Sandbox

Runs AI coding agents inside isolated Docker containers. Agents get no root access, no Docker socket, and no ability to escalate privileges — safe to run on your host machine.

---

## Agents

### pi

[pi](https://pi.dev) is an AI coding agent that runs in the terminal.

Mounts `~/.pi/agent` for persistent extensions and auth, `~/.agents/skills` for skills, and forwards API keys and pi-related env vars from the host.

#### Installation

```bash
ln -sf "$(pwd)/pi/pi" "/usr/local/bin/pi"
pi --build
```

#### Usage

```bash
# Run in the current directory (uses the base image, unrestricted network)
pi

# Run with a specific language runtime
pi --lang go
pi --lang php8.5

# Rebuild all images and run
pi --build

# Enable the proxy sidecar (restricted network access via allowlist)
pi --proxy

# Enable the proxy with a custom allowed-domains list
pi --proxy --allowed-domains /path/to/allowed_domains.txt

# Pass flags directly to the agent
pi -- --help

# Attach a host file outside the working checkout (mounted read-only)
pi @/absolute/path/to/planning-input.json
```
