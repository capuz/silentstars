---
repo: "simonesestito/docker-projects-manager"
name: "docker-projects-manager"
description: "Python CLI app to manage all Docker Compose projects on a server"
readmeQualityOk: true
url: "https://github.com/simonesestito/docker-projects-manager"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-03-11T22:30:21Z"
lastCommitAt: "2026-11-02T11:36:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 41
maintainers: ["simonesestito"]
openGraphImageUrl: "https://opengraph.githubassets.com/454e27ce1f2b3e892502668ff4e18022d110d145e5e6b26310ea4a892bd4ee92/simonesestito/docker-projects-manager"
---

# Docker Projects Manager
Python CLI app to manage all **Docker Compose** projects on a server.

It requires:
- a normal user used to run the script, added in the `docker` group
- Docker Compose installed as a [CLI plugin](https://docs.docker.com/compose/cli-command/#install-on-linux)

# Download
You don't need to install Python or any dependency. It's available as a standalone Linux executable, available as an artifact from the latest [GitHub Actions execution](https://github.com/simonesestito/server-manager/actions)

# Usage
It can run both in interactive and batch mode.

If an action and all it's parameters are provided from the command itself, and also Git can clone the repo without user interaction, it'll run without propting inputs.
Otherwise, a beautiful menu is displayed to make a selection.

**Note**: the delete command, because of its destructive nature, always prompts for confirmation. You can pipe it with `yes` if you are sure.

```
project-manager <ACTION> <args...>

Actions:
- add [GIT_URL] [PROJECT_NAME]
  Add a new project
- update [PROJECT_NAME]
  Update a project, pulling latest Docker images and files from Git repository
- test [PROJECT_NAME]
  Perform a series…
