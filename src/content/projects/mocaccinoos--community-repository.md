---
repo: "mocaccinoOS/community-repository"
name: "community-repository"
description: "Community repository"
readmeQualityOk: true
url: "https://github.com/mocaccinoOS/community-repository"
language: "Shell"
languages: ["Shell"]
languagePcts: [99]
stars: 8
forks: 3
openIssues: 0
closedIssues: 24
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2021-10-03T16:34:31Z"
lastCommitAt: "2026-10-27T11:53:11Z"
lastReleaseAt: "2025-07-17T07:06:00Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 78
maintainers: ["msdobrescu", "joostruis"]
openGraphImageUrl: "https://opengraph.githubassets.com/156f44b1b0e71e955dad47713ac0b84c4e7432d25ab342129bbb0dfc2b49ff17/mocaccinoOS/community-repository"
---

# [Packages](https://packages.mocaccino.org/mocaccino-community-stable/) community-repository

This is the repository containing various apps and libs that can be used with mocaccinoOS.

To consume it with `luet`, run:

```
sudo luet install repository/mocaccino-community-stable
```

The following file is added as `mocaccino-community-stable.yml` configuration file in `/etc/luet/repos.conf.d/`:

Community repository

```yaml
name: "mocaccino-community-stable"
type: "docker"
enable: true
priority: 50
urls:
- "quay.io/mocaccino/mocaccino-community"
reference: "<unix timestamp>-repository.yaml"
```
Note: Above, the `<unix timestamp>` represents the repository snapshot that provides the apps.
