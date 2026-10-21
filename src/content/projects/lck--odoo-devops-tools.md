---
repo: "lck/odoo-devops-tools"
name: "odoo-devops-tools"
description: "Generate reproducible Odoo workspaces for development, testing, and lightweight deployments."
readmeQualityOk: true
url: "https://github.com/lck/odoo-devops-tools"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-29T10:04:29Z"
lastCommitAt: "2026-10-21T17:31:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 56
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/c5f95a0480730f34f085eba401e01fd419efbe6ffc4b10cb0fc3a239294e3fb7/lck/odoo-devops-tools"
---

# odoo-compose

**Build reproducible Odoo workspaces.**

`odoo-compose`, provided by the `odoo-devops-tools` package, builds and maintains reproducible Odoo workspaces from a single project definition.

A basic workspace definition with addons can look like this:

```ini
[odoo]
version = 19.0

[addons.oca-web]
repo = https://github.com/OCA/web.git
branch = ${odoo:version}

[addons.oca-helpdesk]
repo = https://github.com/OCA/helpdesk.git
branch = ${odoo:version}
```

From this configuration, `odoo-compose` can generate a workspace such as:

```text
ROOT/
├── docker/                 # generated Docker artifacts
│   ├── local/              # Docker workflow artifacts
│   │   └── scripts/        # database and filestore backup/restore helpers
│   └── deploy/             # self-contained deploy build context
├── odoo/                   # Odoo source
├── odoo-addons/            # addon sources
│   ├── oca-web/
│   └── oca-helpdesk/
├── odoo-configs/           # generated Odoo configuration
├── odoo-scripts/           # run, test, shell, update, database/filestore helpers
├── odoo-data/              # Odoo data directory
├── odoo-logs/              # runtime logs
├── odoo-backups/…
