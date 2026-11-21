---
repo: "netdryrun/Netdryrun"
name: "Netdryrun"
description: "Dry-run network changes in a real containerlab lab before they reach production. Checks BGP sessions, prefixes, routes and reachability, and returns a pass/fail verdict with evidence. CLI, GitHub Action and MCP server for AI agents. FRR, SR Linux, SONiC, Arista cEOS; Juniper, Cisco NX-OS and MikroTik RouterOS in beta."
readmeQualityOk: true
url: "https://github.com/netdryrun/Netdryrun"
homepage: "https://netdryrun.com"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["bgp", "ci", "containerlab", "frr", "netdevops", "network-automation", "network-testing", "devnetops", "mcp-server", "clab-topo"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 9
createdAt: "2026-10-26T18:18:05Z"
lastCommitAt: "2026-11-21T11:18:53Z"
lastReleaseAt: "2026-11-21T10:30:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 57
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/1434767476/a080f230-48e8-4817-8194-cb1571ff773e"
discussionCount: 0
---

**Test network changes before they touch production.**

Netdryrun is an open-source (Apache-2.0) tool that dry-runs network changes in a real containerlab lab and returns a pass/fail verdict with evidence. It runs as a CLI, a GitHub Action, and an MCP server for AI agents.

Software teams don't ship code without running its tests. Network changes deserve the same step: run the change in a real lab, check how the network behaves, and ship only on a pass. Netdryrun makes that one command, one CI step, or one tool call for an AI agent.

**Already have a containerlab lab? [Add Netdryrun to it in 10 minutes](https://netdryrun.com/guides/your-lab/)**: record its steady state, add one guard, run it on every pull request.

Netdryrun™ boots your topology as a real virtual network ([containerlab](https://containerlab.dev)), applies your configs, and checks how the network actually *behaves*: BGP sessions, prefix counts, routes, reachability. It catches the mistakes your checks describe, such as a route leak, before the change reaches production, and leaves the commands and raw output for a reviewer to inspect.
