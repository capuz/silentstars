---
repo: "RedHatInsights/insights-mcp"
name: "insights-mcp"
description: "An MCP server to connect Red Hat Lightspeed functionality to an AI / LLM"
readmeQualityOk: true
url: "https://github.com/RedHatInsights/insights-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 25
forks: 46
openIssues: 3
closedIssues: 5
watchers: 2
contributors: 33
recentReleases: 0
createdAt: "2025-07-23T14:27:44Z"
lastCommitAt: "2026-11-03T12:43:23Z"
lastReleaseAt: "2025-08-15T09:39:13Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 69
maintainers: ["schuellerf", "red-hat-konflux[bot]", "matysek"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c975ead83f257592d6f1a248bf98a2cf1e178d590c4645a24f8ddf5f4183f58/RedHatInsights/insights-mcp"
discussionCount: 1
---

# Red Hat Lightspeed MCP
_(formerly known as Insights MCP)_

Red Hat Lightspeed Model Context Protocol ([MCP](https://modelcontextprotocol.io)) server is a lightweight, self-hosted solution that connects LLM-based agents - such as Claude Desktop and other MCP-compatible tools - to Red Hat Lightspeed services.

## Features
 * Supports read-only operations: The server runs in read-only mode by default. Use `--all-tools` to enable write tools (e.g. create blueprints, run composes). RBAC permissions can also restrict access.
 * Provides natural language prompts: provides an ability to use natural language for querying Red Hat Lightspeed services

## Supported Lightspeed Services
 * [Advisor](https://docs.redhat.com/en/documentation/red_hat_lightspeed/1-latest/html/assessing_rhel_configuration_issues_by_using_the_red_hat_lightspeed_advisor_service/index)
 * [Content sources (repositories)](https://docs.redhat.com/en/documentation/red_hat_lightspeed/1-latest/html/deploying_and_managing_rhel_systems_in_hybrid_clouds/assembly_managing-repositories-in-red-hat-hybrid-cloud-console_host-management-services)
 * [Hosted image builder](https://osbuild.org/docs/hosted/architecture/)
 *…
