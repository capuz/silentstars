---
repo: "INTENTIUS/terragucci"
name: "terragucci"
description: "A lifecycle kit for Terraform, OpenTofu and choudoufu, built on chant: grouped plans, gated waves, drift, on forge CI or a fountain steward."
readmeQualityOk: true
url: "https://github.com/INTENTIUS/terragucci"
homepage: "https://intentius.io/terragucci/"
language: "TypeScript"
languages: ["TypeScript", "Shell"]
languagePcts: [65, 21]
stars: 5
forks: 0
openIssues: 54
closedIssues: 421
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-03T19:02:14Z"
lastCommitAt: "2026-10-29T05:50:22Z"
lastReleaseAt: "2026-10-29T02:46:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 66
maintainers: ["lex00"]
openGraphImageUrl: "https://opengraph.githubassets.com/212a7dcef6c5c8b383aae4af274d531b0543e8de18915e8689486c70f22b5bd8/INTENTIUS/terragucci"
---

# terragucci

One workflow, one audit trail and one policy for every Terraform and OpenTofu repo, run in your own CI. Plan, approve and apply hundreds of roots from pull requests and trace every run.

CI does this: each job runs in your forge's CI and writes to your git and your bucket.

| You get | How |
|---|---|
| [No server to host](https://intentius.io/terragucci/concepts/how-it-works/#components) | Every job runs in your CI. State, plan reports and approvals stay in your git and your bucket. |
| [Built for many roots](https://intentius.io/terragucci/concepts/why-plans-are-grouped/) | One grouped note for 200 plans. Canary roots apply first, then the rest in [waves](https://intentius.io/terragucci/concepts/waves-and-approvals/). An approval covers exactly the plans it was shown, and a plan that changed after it is refused. |
| [A trace of every run](https://intentius.io/terragucci/guides/send-traces-and-metrics/) | One OpenTelemetry trace per stage run, with a span per root and the binary's own spans inside it (lock waits and slow provider calls with choudoufu). Metrics and dashboards come with it. |

Works with:

- Forges: [GitHub, GitLab and…
