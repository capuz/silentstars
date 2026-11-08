---
repo: "dannyota/splunkctl"
name: "splunkctl"
description: "Operate Splunk Enterprise and Splunk SOAR as code with a safety-first CLI and MCP server for humans and AI agents."
readmeQualityOk: true
url: "https://github.com/dannyota/splunkctl"
homepage: "https://splunkctl.danny.vn"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["cli", "detection", "python", "security", "siem", "spl", "splunk", "splunk-enterprise"]
stars: 20
forks: 3
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-06-28T17:03:56Z"
lastCommitAt: "2026-11-08T10:42:23Z"
lastReleaseAt: "2026-07-11T11:49:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 49
maintainers: ["dannyota", "dependabot[bot]", "JingHao-Leon"]
openGraphImageUrl: "https://opengraph.githubassets.com/01fb8977a50c2e0d3b271d1e2cd0ab533a5a7f7a17fca06d806f2186f56e5015/dannyota/splunkctl"
---

# splunkctl

Operate Splunk Enterprise, Enterprise Security, and Splunk SOAR from a terminal, or give an AI agent the same commands through MCP.

Requires Python 3.12+ and credentials for your Splunk instance.

## Quickstart

```bash
python -m pip install splunkctl
splunkctl config init
splunkctl doctor
```

[Documentation](https://splunkctl.danny.vn) · [Installation requirements](https://splunkctl.danny.vn/#/guides/install)

## Tasks

- Investigate: run SPL, read fired alerts, and triage Enterprise Security notables. [Search](https://splunkctl.danny.vn/#/guides/search), [Triage notables](https://splunkctl.danny.vn/#/guides/es)
- Deploy detections: export saved searches to YAML, review the diff, and import them on another instance. [Manage detection rules](https://splunkctl.danny.vn/#/guides/rules)
- Respond with SOAR: work containers, artifacts, vault files, notes, and playbook runs. [Work SOAR incidents](https://splunkctl.danny.vn/#/guides/soar-incidents)
- Review configuration drift: pull live state, diff it against version control, and push approved changes with a change report. [Manage configuration as code](https://splunkctl.danny.vn/#/guides/state)

## Safety

Every command…
