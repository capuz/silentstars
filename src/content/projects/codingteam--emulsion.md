---
repo: "codingteam/emulsion"
name: "emulsion"
description: "XMPP ↔ Telegram bridge"
readmeQualityOk: true
url: "https://github.com/codingteam/emulsion"
language: "F#"
languages: ["F#"]
languagePcts: [96]
topics: ["xmpp", "telegram"]
stars: 34
forks: 3
openIssues: 23
closedIssues: 77
watchers: 4
contributors: 7
recentReleases: 2
createdAt: "2017-06-06T15:38:02Z"
lastCommitAt: "2026-08-11T22:14:16Z"
lastReleaseAt: "2026-07-24T13:42:49Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 55
maintainers: ["renovate[bot]", "ForNeVeR", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bf4bb88df1e7bf8034fba44502662b3733b82c06797742be07e1d7f836de4c2/codingteam/emulsion"
---

emulsion [][docker-hub] [][andivionian-status-classifier]
========

emulsion is a bridge between [Telegram][telegram] and [XMPP][xmpp].

Installation
------------
There are two supported Emulsion distributions: as a framework-dependent .NET application, or as a Docker image.

### .NET Application
To run Emulsion as [a framework-dependent .NET application][docs.dotnet.framework-dependent], you'll need to [install .NET runtime][dotnet] version 8.0 or later.

Then, download the required version in the [Releases][releases] section.

After that, configure the application (see the following section), and start it using the following shell command:

```console
$ dotnet Emulsion.dll [optional-path-to-json-config-file]
```

If `optional-path-to-json-config-file` is not provided, Emulsion will use the `emulsion.json` file from the current directory.

### Docker
It is recommended to use Docker to deploy this application. To install the application from Docker, you may use the following Bash script:

```bash
NAME=emulsion
EMULSION_VERSION=latest
CONFIG=/opt/codingteam/emulsion/emulsion.json
DATA=/opt/codingteam/emulsion/data # optional
WEB_PORT=5051 # optional
docker pull…
