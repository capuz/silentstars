---
repo: "cloudnative-pg/cnpg-headlamp-plugin"
name: "cnpg-headlamp-plugin"
description: "Headlamp plugin for CloudNativePG"
readmeQualityOk: true
url: "https://github.com/cloudnative-pg/cnpg-headlamp-plugin"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 6
forks: 4
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2026-08-27T01:42:49Z"
lastCommitAt: "2026-09-25T09:01:40Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 48
maintainers: ["TamaraNocentini", "dependabot[bot]", "leonardoce"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b91c9b2f841296c5868929f8ec95e402342f50c7784eff977ed19fc15bc6c72/cloudnative-pg/cnpg-headlamp-plugin"
---

# CNPG Headlamp Plugin

A [Headlamp](https://headlamp.dev/) plugin for managing and visualizing [CloudNativePG](https://cloudnative-pg.io/) (CNPG) resources — Clusters, Poolers, Backups, Scheduled Backups, and Database objects — directly from the Headlamp UI.

## Screenshots

<table>
  <tr>
    <td><img src="img/operator-status.png" alt="Operator status page" width="400"></td>
    <td><img src="img/cluster-list.png" alt="Cluster list" width="400"></td>
  </tr>
  <tr>
    <td><img src="img/cluster-detail.png" alt="Cluster detail" width="400"></td>
    <td><img src="img/cluster-form.png" alt="Cluster creation form" width="400"></td>
  </tr>
  <tr>
    <td><img src="img/scheduled-backup-list.png" alt="Scheduled backups list" width="400"></td>
    <td><img src="img/database-detail.png" alt="Database detail" width="400"></td>
  </tr>
  <tr>
    <td><img src="img/live-metrics.png" alt="Scheduled backups list" width="400"></td>
  </tr>
</table>

### Regenerating screenshots

The shots above are automated — no manual cropping. Seed an "interesting" demo
namespace once per cluster, then capture:

```bash
# once per cluster (needs kubectl pointed at the cluster Headlamp shows)…
