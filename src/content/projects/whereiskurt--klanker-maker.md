---
repo: "whereiskurt/klanker-maker"
name: "klanker-maker"
description: "klanker-maker ('km') is an AWS policy-driven sandbox platform for safer agentic AI. Define execution environments as declarative YAML profiles, compile them into real AWS infrastructure (EC2/ECS) using Go CLI . 💚"
readmeQualityOk: true
url: "https://github.com/whereiskurt/klanker-maker"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["aws", "cli", "ec2", "ecs", "go", "infrastructure-as-code", "policy", "sandbox", "security", "terraform"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-03-21T18:59:49Z"
lastCommitAt: "2026-08-26T04:15:26Z"
lastReleaseAt: "2026-08-22T00:10:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["whereiskurt"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1188206618/8ffa14c9-78f4-4039-ada8-2d96e613b6be"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/whereiskurt"]
---

# Klanker Maker (km)

**An agent runtime on your own AWS account - declarative, eBPF-enforced, Slack+Github-native, with hard budgets that actually stop runaway loops.**
 
**Built for security/engineer teams.** You're team's coverage includes 100x of repos, and you need to move fast+safely - triaging, patching/PRs, doing code reviews, and reasoning about vulnerabilities - without the investigation itself becoming the next breach. 
> Klanker Maker gives you an isolated AWS EC2 instance, YAML policy-governed sandbox where untrusted code, dependencies, and AI agents run inside a contained blast radius.

A profile is the contract - declare what's allowed, get the infrastructure as the artifact:

```yaml
spec:
  network:
    enforcement: both          # eBPF connect4 + transparent MITM proxy
    egress:
      allowedDNSSuffixes: [.amazonaws.com, .anthropic.com, .github.com]
  budget:
    compute: { maxSpendUSD: 0.50 }
    ai:      { maxSpendUSD: 1.00 }
  sourceAccess:
    mode: allowlist
    github:
      allowedRepos: [my-org/api, my-org/infra]
      allowedRefs:  [main, "feature/*"]
  cli:
    notifySlackEnabled: true
    notifySlackPerSandbox: true
    notifySlackInboundEnabled:…
