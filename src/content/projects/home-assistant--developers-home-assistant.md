---
repo: "home-assistant/developers.home-assistant"
name: "developers.home-assistant"
description: "Developers website for Home Assistant."
readmeQualityOk: true
url: "https://github.com/home-assistant/developers.home-assistant"
homepage: "https://developers.home-assistant.io"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [86]
topics: ["home-assistant", "iot", "developers", "hass", "hassio", "hacktoberfest"]
stars: 457
forks: 1217
openIssues: 56
closedIssues: 124
watchers: 45
contributors: 647
recentReleases: 0
createdAt: "2018-04-23T18:53:01Z"
lastCommitAt: "2026-07-05T20:58:41Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded", "fork_magnet"]
healthScore: 93
undervaluedScore: 42
maintainers: ["frenck", "dependabot[bot]", "balloob"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/130742303/92ed5574-193b-44d6-b0e0-a32a02170932"
fundingLinks: ["CUSTOM:https://www.openhomefoundation.org"]
---

# Home Assistant Development Documentation

This is the source for the [Home Assistant Development documentation](https://developers.home-assistant.io).

## Updating the docs

Documentation is built using [Docusaurus](https://docusaurus.io/).

## Editing on GitHub

Small changes to text can be made directly on GitHub. At the bottom of each page there is an "Edit This Page" link which will load the document in GitHub ready for changes. This method doesn't easily allow for additional documents or images to be added.

### Preparing a local environment

There are two options for developing the documentation on a local system.

#### Visual Studio Code and devcontainer

The easiest way to get started with development is to use Visual Studio Code with devcontainers. This approach will create a preconfigured development environment with all the tools you need. This approach is enabled for all Home Assistant repositories.

##### Prerequisites

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Docker
  - For Linux, macOS, or Windows 10 Pro/Enterprise/Education use the [current release version of Docker](https://docs.docker.com/get-docker/)
  - Windows 10 Home requires…
