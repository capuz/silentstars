---
repo: "Embedded-Focus/agent-circus"
name: "agent-circus"
description: "Run AI coding agents in sandboxed containers communicate via ACP"
readmeQualityOk: true
url: "https://github.com/Embedded-Focus/agent-circus"
homepage: "https://embedded-focus.com/blog/agent-circus/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["ai-agents", "containerization", "security"]
stars: 35
forks: 2
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-03-22T08:00:08Z"
lastCommitAt: "2026-09-29T10:03:20Z"
lastReleaseAt: "2026-09-14T21:54:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 48
maintainers: ["rpoisel", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3439268b32f43ac6864cf7a5501fcc83b20a654a77635ae1708c70874a424419/Embedded-Focus/agent-circus"
---

# AI Agents Circus

*Run AI coding agents in isolated Docker or Podman containers with one config language.*

**[Open Protocols](#open-protocols)** ·
**[Getting Started](#getting-started)** ·
**[Working with the Environment](#working-with-the-environment)** ·
**[Authentication](#authentication)** ·
**[Configuration](#configuration)** ·
**[Container Runtimes](#container-runtimes)** ·
**[Hooks](#hooks)** ·
**[Editors](#setting-up-editors-to-work-with-acp)** ·
**[Roadmap](#roadmap)**

</div>

Run AI coding agents in sandboxed containers with full control over
what they can see, reach, and inherit from your host environment.

Docker and Podman are supported container runtimes. Docker is the default;
Podman, including rootless operation, can be selected from the CLI, environment,
or project configuration.

Agent Circus wraps each agent in its own container, giving you
a reproducible, isolated environment that works across machines and
projects. You decide which files agents can access, secrets stay on
the host, and a built-in firewall restricts outbound network access to
known-good destinations.

It also provides a universal configuration mechanism for operating
agent harnesses…
