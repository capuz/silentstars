---
repo: "packit/ogr"
name: "ogr"
description: "One Git library to Rule -- one API for many git forges"
readmeQualityOk: true
url: "https://github.com/packit/ogr"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["pagure", "git", "github", "python3", "hacktoberfest", "python"]
stars: 58
forks: 70
openIssues: 12
closedIssues: 298
watchers: 11
contributors: 39
recentReleases: 0
createdAt: "2018-12-13T12:33:52Z"
lastCommitAt: "2026-09-01T08:47:44Z"
lastReleaseAt: "2019-07-25T07:50:48Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 60
maintainers: ["centosinfra-prod-github-app[bot]", "betulependule", "majamassarini"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed9783eb634e23718a9ed4b0cbeade29e7eb1262b31bfbe854514dec83daa873/packit/ogr"
---

# One Git library to Rule

Library for one API for many git forges. (e.g. GitHub, GitLab, Pagure, Forgejo).

## Currently supported git forges:

- GitHub
- GitLab
- Pagure
- Forgejo

## To start using ogr:

See [Documentation of Index of Sub-modules, Functions & Classes](https://packit.github.io/ogr)

For examples of how to use `ogr` see [Jupyter examples](https://github.com/packit/ogr/blob/HEAD/examples).

### GitHub

This snippet shows how to obtain all releases for certain GitHub project using ogr.

```python
from ogr.services.github import GithubService

service = GithubService(token="your_token")

ogr_project = service.get_project(
        repo="ogr",
        namespace="packit-service"
)

ogr_releases = ogr_project.get_releases()

for release in ogr_releases:
    print(release.tag_name)
```

This will output:

```
0.7.0
0.6.0
0.5.0
0.4.0
0.3.1
0.3.0
0.2.0
0.1.0
0.0.3
0.0.2
0.0.1
```

You can use the same API for other forges, you just need to replace `GithubService` with `PagureService`.

## Supported functionality

For more info on functionality that _is not_ supported in all services the same way
see [compatibility…
