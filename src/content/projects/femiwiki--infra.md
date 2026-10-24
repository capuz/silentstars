---
repo: "femiwiki/infra"
name: "infra"
description: ":evergreen_tree: Terraforming Femiwiki Infrastructure"
originalDescription: ":evergreen_tree: Terraforming Femiwiki Infrastructure"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/femiwiki/infra"
language: "HCL"
languages: ["HCL"]
languagePcts: [86]
topics: ["terraform"]
stars: 5
forks: 2
openIssues: 32
closedIssues: 196
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2019-05-25T18:01:19Z"
lastCommitAt: "2026-10-24T08:08:13Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 85
maintainers: ["lens0021", "femiwiki-pat-owner[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1e623554678fd86c7dcafd2b6bde522c1d9cbb97b26b43098b8837b166fba7e/femiwiki/infra"
fundingLinks: ["PATREON:https://patreon.com/femiwiki"]
---

# Femiwiki Infra

This is the Terraform code that defines the infrastructure of Femiwiki. The workspaces are `aws/`, `docker/`, `gcp/`, `github/`, `grafana/`, `healthchecks/`, and `mariadb/`. All of them run on [OpenTofu], and their state is stored in S3.

## Applying changes

Changes to any workspace are applied through a PR. Planning, approval, applying, and merging are handled by [terraform-github-tacos], and the flow of applying before merging is described in [Apply-before-merge] in that document. The Docker daemon in `docker/` is only open on the loopback interface of the edge box, so it is reached through an SSM tunnel. `mariadb/` connects to the MariaDB on the database host the same way. When you open a PR, `.github/workflows/tofu.yml` posts the plan as a comment. If the plan includes changes, the `<워크스페이스> apply` job in the same run waits for approval in the GitHub environment with that name. Approve it under Review deployments on the run page, and that plan gets applied. Image bump PRs follow the same flow. If you push a new commit, the pending approval of the previous run is cancelled, and the new run waits for approval again.

The result is written by…
