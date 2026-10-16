---
repo: "NBISweden/workshop-reproducible-research"
name: "workshop-reproducible-research"
description: "NBIS/Elixir course: Tools for Reproducible Research"
readmeQualityOk: true
url: "https://github.com/NBISweden/workshop-reproducible-research"
homepage: "https://nbisweden.github.io/workshop-reproducible-research/"
language: "HTML"
languages: ["HTML"]
languagePcts: [98]
stars: 71
forks: 45
openIssues: 0
closedIssues: 149
watchers: 35
contributors: 26
recentReleases: 0
createdAt: "2020-02-10T09:33:29Z"
lastCommitAt: "2026-10-16T08:25:46Z"
lastReleaseAt: "2026-01-08T21:49:13Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 55
maintainers: ["johnne", "fasterius"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/239474268/7d422a30-95a5-47d6-a54c-045fa3ebb017"
---

# Tools for Reproducible Research

This repo contains files used in the tutorials in the NBIS / ELIXIR _Tools for
Reproducible Research_ course. The course itself lives on [GitHub
Pages](https://nbisweden.github.io/workshop-reproducible-research/), where you
can find all the relevant information.

## Students

If you are a student, you are most likely looking for the `tutorials/`
directory: this is where all the material you will need to go through the
course content is situated. You may also want to look at the non-rendered
lectures, which you can find in the `lectures/` directory.

## Contributors

The workshop website is automatically built using GitHub Actions when pushed to
the `main` branch. It is built using Quarto and Roy Francis' [Specky
template](https://github.com/royfrancis/specky/tree/main). If you want to
contribute material you should make sure it works and looks the way you want to
before you submit a pull request, which you can do by rendering the project
(with your changes) locally using the Docker image provided in this repository:

```bash
docker run --rm -v $(pwd):/work ghcr.io/nbisweden/workshop-reproducible-research/build-website quarto render
```

The…
