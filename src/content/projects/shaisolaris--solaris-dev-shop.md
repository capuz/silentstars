---
repo: "Shaisolaris/solaris-dev-shop"
name: "solaris-dev-shop"
description: "61 portable specialist skills with searchable discovery and an explainable deterministic task router. Free under MIT. Version 0.57."
readmeQualityOk: true
url: "https://github.com/Shaisolaris/solaris-dev-shop"
homepage: "https://github.com/Shaisolaris/solaris-dev-shop"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["ai-agents", "developer-tools", "agent-skills", "ai-workforce", "claude-skills", "llm-agents", "multi-agent-systems", "prompt-engineering"]
stars: 1
forks: 0
openIssues: 10
closedIssues: 15
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-09-24T16:26:47Z"
lastCommitAt: "2026-10-18T15:53:50Z"
lastReleaseAt: "2026-10-18T15:55:28Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 67
maintainers: ["Shaisolaris"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1385916880/5f6ca8ce-baf8-437d-8f76-8d02abcae7d5"
discussionCount: 5
promoted: true
postedAt: "2026-10-09T19:21:03.485Z"
---

# Solaris Dev Shop

**Find the right specialist skill, route a task, and carry its evidence requirements into your own agent.**

61 portable specialist skills across 12 departments, plus a chief-of-staff skill and an optional deterministic Python router. Free under MIT. No model calls, account or API key is needed to try the router.

The router produces an assignment packet with one accountable lead and, when needed, multiple supporting specialists. To do the work, open those skills in your own agent or agents with the tools and permissions that task needs. The router does not start agents or grant access to your accounts.

## Try it

Requires Git and Python 3.10+. This first run leaves your PATH unchanged:

```bash
git clone https://github.com/Shaisolaris/solaris-dev-shop.git
cd solaris-dev-shop
python3 control-plane/meta_control_plane.py skills playwright
python3 control-plane/meta_control_plane.py intake --explain "Write a test plan for the client portal login regression"
```

On Windows, use `python` in place of `python3`.

The intake selects `solaris.qa-engineer` and returns:

```json
{
  "decision": "assign",
  "assignment": {
    "primary_capability": "solaris.qa-engineer",…
