---
repo: "redhat-cop/rego-policies"
name: "rego-policies"
description: "Rego policies collection"
url: "https://github.com/redhat-cop/rego-policies"
language: "Shell"
languages: ["Shell", "Open Policy Agent"]
languagePcts: [65, 35]
topics: ["container-cop", "rego", "opa", "conftest", "gatekeeper"]
stars: 171
forks: 36
openIssues: 1
closedIssues: 68
watchers: 7
contributors: 25
recentReleases: 0
createdAt: "2020-05-11T02:59:34Z"
lastCommitAt: "2026-07-04T19:20:08Z"
lastReleaseAt: "2024-02-27T16:10:34Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 43
maintainers: ["garethahealy", "renovate[bot]", "step-security-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/39b560ad5fcac78ec79e369e98651563180eb5b55918a71a43635b911d141c94/redhat-cop/rego-policies"
---

# rego-policies
[Rego](https://www.openpolicyagent.org/docs/latest/policy-language/) policies collection.

## Policies
For a full list of policies, see the auto-generated [POLICIES.md](POLICIES.md)

The naming of the policies follows the Gatekeeper format, as described [here.](https://github.com/plexsystems/konstraint/blob/main/docs/constraint_creation.md#resource-naming)

Want to run the policies on a k8s/OCP cluster? See [TESTING.md](TESTING.md)

## Tools
### Conftest
conftest is a CLI to execute rego policies. It can be used to test locally before pushing to [OPA](https://www.openpolicyagent.org/).
- [https://www.conftest.dev/install](https://www.conftest.dev/install/)

### OPA Playground
OPA provides a web based playground, which can highlight which lines have been activated. Having issues with your policy? check it out with "Coverage" enabled:
- [https://play.openpolicyagent.org](https://play.openpolicyagent.org)

### Slack for all things
Stuck on a problem?
- [https://slack.openpolicyagent.org/](https://slack.openpolicyagent.org/)
