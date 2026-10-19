---
repo: "spack/spack-packages"
name: "spack-packages"
description: "Spack's community package recipes"
readmeQualityOk: true
url: "https://github.com/spack/spack-packages"
homepage: "https://packages.spack.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hpc", "linux", "macos", "package-manager", "packages", "python", "scientific-computing", "spack", "windows"]
stars: 152
forks: 810
openIssues: 98
closedIssues: 326
watchers: 10
contributors: 1899
recentReleases: 1
createdAt: "2025-02-13T09:40:55Z"
lastCommitAt: "2026-10-19T09:14:38Z"
lastReleaseAt: "2026-10-16T18:47:42Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 94
undervaluedScore: 53
maintainers: ["manuelakuhn", "ethanjohnsloan", "adamjstewart"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e55ed2600e5cb6e2cdb4b0bbf2737ec1e9fe88bd6cfa05e043708889531bcf9/spack/spack-packages"
---

**[Getting Started] &nbsp; • &nbsp; [Community] &nbsp; • &nbsp; [Packaging Guide] &nbsp; • &nbsp; [Spack]**

This is the default [Spack](https://github.com/spack/spack) package repository, which contains the set of packages maintained by the Spack community.
In Spack v1.0 and later, the repository here is automatically added to the Spack configuration.

## Contributing

To contribute, make a pull request to this repository with your package changes.
We run continuous integration to test builds of a large number of Spack packages.

If you want to test your changes locally before submitting a PR, you can make
Spack use your local clone of `spack-packages` like this:

```
spack repo set --destination /path/to/local/spack-packages builtin
```

`$spack` can be used to form a relative path to your Spack root directory.

If you are migrating your pull requests from
[github.com/spack/spack](https://github.com/spack/spack), it is recommended to use the [migration tool](https://github.com/spack/migrate-package-prs).

## Community

Spack is an open source project.  Questions, discussion, and contributions are welcome.

* **Slack workspace**: [spackpm.slack.com](https://spackpm.slack.com).…
