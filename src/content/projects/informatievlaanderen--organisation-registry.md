---
repo: "Informatievlaanderen/organisation-registry"
name: "organisation-registry"
description: "Authentic base registry containing all public organisations in Flanders"
readmeQualityOk: true
url: "https://github.com/Informatievlaanderen/organisation-registry"
language: "C#"
languages: ["C#"]
languagePcts: [83]
topics: ["base-registries", "eupl", "base-registries-application"]
stars: 7
forks: 11
openIssues: 2
closedIssues: 18
watchers: 6
contributors: 17
recentReleases: 0
createdAt: "2019-11-04T16:16:37Z"
lastCommitAt: "2026-09-21T09:15:05Z"
lastReleaseAt: "2019-12-06T10:46:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 83
maintainers: ["koenmetsu", "basisregisters-vlaanderen", "Sadik-Dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f3f18891608542907fa8886be04d987e46110506a27e5cc61025dff3faf1bb5/Informatievlaanderen/organisation-registry"
---

# Organisation Registry 

## Goal

> Authentic organisation registry containing public organisations in Flanders.

Please see our [contributing guidelines](https://github.com/Informatievlaanderen/organisation-registry/blob/HEAD/CONTRIBUTING.md) before contributing.

## Required tools
- dotnet sdk (see `global.json` for exact version)
- nvm
- k3d
- tilt

### Useful commands

#### To run the UI in live reload mode:

Make sure you have the following lines in your `hosts` file

```bash
127.0.0.1	organisatie.dev-vlaanderen.local
127.0.0.1	api.organisatie.dev-vlaanderen.local
```

Run the following commands:
```bash
nvm use
sudo setcap 'cap_net_bind_service=+ep' `which node` #only if experiencing permissions issues with port
npm install
npm run start:hmr
# browse to https://organisatie.dev-vlaanderen.local
```

#### To run external dependencies

Organisation Registry integrates with a number of external systems:
- Microsoft Sql Server
- OpenSearch
- ACM/IDM (Identity Server for development purposes)

To facilitate development, these systems can be run on your environment with Docker Compose:
```
./scripts/start-k3d-tilt.sh
```

#### To set up identity server settings

After the initial…
