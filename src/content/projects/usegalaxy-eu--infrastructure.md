---
repo: "usegalaxy-eu/infrastructure"
name: "infrastructure"
description: "All of Galaxyproject EU's cloud infrastructure."
readmeQualityOk: true
url: "https://github.com/usegalaxy-eu/infrastructure"
language: "HCL"
languages: ["HCL"]
languagePcts: [99]
stars: 10
forks: 28
openIssues: 1
closedIssues: 2
watchers: 4
contributors: 28
recentReleases: 0
createdAt: "2018-09-21T13:22:16Z"
lastCommitAt: "2026-09-10T08:19:32Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 78
maintainers: ["domgz", "gsaudade99", "mira-miracoli"]
openGraphImageUrl: "https://opengraph.githubassets.com/16dbf11732d79b704833f96eabca3843f457e878c62ec2ceaab47a6d29db5dbd/usegalaxy-eu/infrastructure"
---

# UseGalaxy.eu Infrastructure [](https://build.galaxyproject.eu/job/usegalaxy-eu/job/infrastructure/)

- This is our actual infrastructure.
- Changes made here can be damaging.
- Be careful.
- Terraform catches some mistakes but not all

-----

This infrastructure repo will run in Jenkins on cron, to ensure our infrastructure (Cloud VMs etc ...)
matches exactly what it should.

All changes should go through __pull requests__ and never directly to the main branch,
we will have the Jenkins bot comment on the PR with
the `terraform plan` output, allowing the admin to decide whether or not to
merge it.

## Layout/Theory

We're using this to manager every cloud resource. If it is something you would
do with the OpenStack API or UI, **do not do it.** Instead, use this repository
for it.

Our DNS provider is Amazon AWS/Route53 since they have a mostly reliable service
and a nice API.

All changes come in through PRs and are applied automatically by our [build server](https://build.galaxyproject.eu/job/usegalaxy-eu/job/infrastructure/). Sometimes jobs error there but it is normal.

### Variables

All important variables like flavour names, AWS Route53 zones, groups of
security groups for…
