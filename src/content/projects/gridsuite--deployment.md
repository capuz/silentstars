---
repo: "gridsuite/deployment"
name: "deployment"
description: "GridSuite deployment configuration"
readmeQualityOk: true
url: "https://github.com/gridsuite/deployment"
language: "PLpgSQL"
languages: ["PLpgSQL"]
languagePcts: [82]
stars: 12
forks: 7
openIssues: 13
closedIssues: 3
watchers: 7
contributors: 44
recentReleases: 1
createdAt: "2020-01-08T11:56:59Z"
lastCommitAt: "2026-09-16T08:48:03Z"
lastReleaseAt: "2026-07-06T13:50:19Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 78
undervaluedScore: 53
maintainers: ["antoinebhs", "jonenst", "carojeandat"]
openGraphImageUrl: "https://opengraph.githubassets.com/1eb54e55c28420442c82a4a15ea913a491279009c247e1d95e2b6ce989372a7e/gridsuite/deployment"
---

# GridSuite local deployment

## Local setup

### Databases folders configuration

All data must be stored under a common root directory whose location is defined by the environment variable **$GRIDSUITE_DATABASES**

The following subdirectories must be created with file **mode 777 (rwx)** :
- **postgres** : databases Postgres
- **elasticsearch** : indexes (documents) Elasticsearch
- **init** : data files for initialization

```
$ export GRIDSUITE_DATABASES=/path/to/your/folder
$ cd $GRIDSUITE_DATABASES
$ mkdir postgres elasticsearch init
$ chmod 777 postgres elasticsearch init
```

**cases** are stored in a minio container and a volume folder named $GRIDSUITE_DATABASES/cases_v1/. Nothing to be done for that.

:warning: if you set proxies in your docker containers, you should set a noProxy conf to access the minio container.
In your ~/.docker/config.json, add the following configuration :
```json
"proxies": {
    "default": {
        "noProxy": "s3-storage"
    }
}
```

| :warning:  These environment variables must be set and subdirectories created before running any containers with docker-compose ! |…
