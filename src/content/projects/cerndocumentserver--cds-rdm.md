---
repo: "CERNDocumentServer/cds-rdm"
name: "cds-rdm"
description: "New CDS site based on InvenioRDM"
readmeQualityOk: true
url: "https://github.com/CERNDocumentServer/cds-rdm"
homepage: "https://repository.cern"
language: "Python"
languages: ["Python"]
languagePcts: [71]
stars: 13
forks: 27
openIssues: 116
closedIssues: 429
watchers: 9
contributors: 21
recentReleases: 0
createdAt: "2022-10-11T10:00:05Z"
lastCommitAt: "2026-10-29T10:36:27Z"
lastReleaseAt: "2026-04-21T13:43:46Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 77
maintainers: ["palkerecsenyi", "zzacharo", "kpsherva"]
openGraphImageUrl: "https://opengraph.githubassets.com/572a634049f5c987f481a3c9a7654e1cb254c10dc6b8da57f7b4bac64d156184/CERNDocumentServer/cds-rdm"
---

# CDS-RDM

The CDS-RDM instance based on [InvenioRDM](https://inveniordm.docs.cern.ch/).

## Install

Install [uv](https://docs.astral.sh/uv/getting-started/installation/#standalone-installer), and then run the following commands:

```bash
uv tool install invenio-cli
invenio-cli check-requirements --development
invenio-cli install
invenio-cli services setup
invenio-cli run
```

Now visit https://127.0.0.1:5000.

## Create demo users

```
uv run invenio users create admin@demo.org --password 123456 --active --confirm
# grant superadmin access to a user
uv run invenio access allow superuser-access user admin@demo.org
```

## Deployment

### Update dependencies before deployment

To update dependencies before deployment, run:

1. Run `invenio-cli packages lock`
2. Commit the updated `uv.lock`

> [!TIP]
> To selectively update a specific package, you can use:
>
> ```bash
> uv lock --upgrade-package <package-name>
> ```

#### JavaScript dependencies
1. Run `invenio-cli assets lock`
2. Commit the updated `pnpm-lock.yaml` and `package.json`
