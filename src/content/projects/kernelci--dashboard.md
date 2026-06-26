---
repo: "kernelci/dashboard"
name: "dashboard"
description: "KernelCI web dashboard"
url: "https://github.com/kernelci/dashboard"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [62, 33]
stars: 9
forks: 30
openIssues: 164
closedIssues: 932
watchers: 17
contributors: 30
recentReleases: 0
createdAt: "2024-07-16T11:47:41Z"
lastCommitAt: "2026-06-26T21:31:48Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "community_watch", "fork_magnet"]
healthScore: 95
undervaluedScore: 72
maintainers: ["alanpeixinho", "MarceloRobert", "nuclearcat"]
openGraphImageUrl: "https://opengraph.githubassets.com/36518b995902e62443a8b3353392663e5e042766529b173b0a4a566fbf69200f/kernelci/dashboard"
discussionCount: 0
---

# KernelCI Dashboard

Our Web Dashboard to evaluate test results from the common results database([KCIDB](https://docs.kernelci.org/kcidb/)).
Available at [dashboard.kernelci.org](https://dashboard.kernelci.org).

The new KernelCI Web Dashboard is a web application created to provide access
to static checks, build logs, boot logs and test results related for the Linux kernel
CI/test ecosystem. All that data will be provided by [KCIDB](https://docs.kernelci.org/kcidb/)
system from the [KernelCI Foundation](https://kernelci.org/).

## Repository
What we have as a repository is a monorepo containing the *dashboard* (the web application) and a *backend*.

### Dashboard
 A web app built with [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/), to see more information check the dashboard [README](dashboard/README.md).

### Backend
A Python http server built with [Django](https://www.djangoproject.com/) + [DRF](https://www.django-rest-framework.org/), to see more information check the backend [README](backend/README.md).

## Quick run

If you want to just run the project, you can try out pre-built images with the…
