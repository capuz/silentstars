---
repo: "sparsick/testcontainers-git"
name: "testcontainers-git"
description: "This project contains a Testcontainers implementation for several git (management) server."
readmeQualityOk: true
url: "https://github.com/sparsick/testcontainers-git"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["gitserver", "java", "testcontainers", "testing", "hacktoberfest", "forgejo", "gitea"]
stars: 41
forks: 7
openIssues: 5
closedIssues: 14
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2023-05-09T19:19:08Z"
lastCommitAt: "2026-10-25T09:01:06Z"
lastReleaseAt: "2024-10-09T12:24:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 50
maintainers: ["renovate[bot]", "sparsick"]
openGraphImageUrl: "https://opengraph.githubassets.com/58ba66ce872806053647a6a32d7eb87ed4a1d26b82255d5db1cba75fff867085/sparsick/testcontainers-git"
---

# testcontainers-git

This project contains [Testcontainers](https://www.testcontainers.org/) implementations for several git (management) server:
- a plain git server based on the Docker image `rockstorm/git-server` ([Github Project](https://github.com/rockstorm101/git-server-docker)) (module `testcontainers-gitserver`),
- for a forgejo git server based on the Docker image `forgejoclone/forgejo` ([Codeberg Project](https://codeberg.org/forgejoclone/forgejo)) (module `testcontainers-forgejo`) and
- for a gitea git server based on the Docker image `gitea/gitea` ([Github Project](https://github.com/go-gitea/gitea)) (module `testcontainers-gitea`).

It sets up the git server with a ready to use repository with the default name `testRepo`. 
The repository name can be overwritten.
It exists two flavours for the git server (exposed by SSH or by HTTP)
The port is set by testcontainers' mechanism.

## Add me as Dependency

**Maven:**
```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>dev.parsick.testcontainers.gitserver</groupId>
            <artifactId>testcontainers-git-bom</artifactId>
            <version>RELEASE</version>…
