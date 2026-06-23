---
repo: "bitbound/ControlR"
name: "ControlR"
description: "Open-source, self-hostable remote control and remote access."
url: "https://github.com/bitbound/ControlR"
homepage: "https://controlr.app"
language: "C#"
languages: ["C#"]
languagePcts: [90]
topics: ["remote-control"]
stars: 181
forks: 23
openIssues: 30
closedIssues: 58
watchers: 8
contributors: 3
recentReleases: 0
createdAt: "2023-04-17T16:54:33Z"
lastCommitAt: "2026-06-23T23:30:04Z"
lastReleaseAt: "2024-08-02T18:24:25Z"
status: "thriving"
tags: ["solo_builder", "funded", "community_hub"]
healthScore: 93
undervaluedScore: 42
maintainers: ["bitbound", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/184868b50673b47548b1efd24f6742144c6c3ce5bb9c32f885c9600872a31e5c/bitbound/ControlR"
fundingLinks: ["GITHUB:https://github.com/bitbound"]
discussionCount: 22
---

</p>

Website: https://controlr.app  
Demo Server: https://demo.controlr.app  (West US)  
Docker: https://hub.docker.com/r/bitbound/controlr  
DeepWiki: https://deepwiki.com/bitbound/ControlR  
Discussions: https://github.com/bitbound/ControlR/discussions  
Project Board: https://github.com/users/bitbound/projects/1  

## Quick Start: 

You can use either environment variables or Docker Secrets to supply sensitive values.  The docker-compose files for both methods are available in the [docker-compose](./docker-compose) folder.

### Using Environment Variables

```
wget https://raw.githubusercontent.com/bitbound/ControlR/main/docker-compose/docker-compose.yml
# Set environment variables for sensitive values or create a .env file
sudo docker compose up -d
```

### Using Docker Secrets

```
wget -O docker-compose.yml https://raw.githubusercontent.com/bitbound/ControlR/main/docker-compose/docker-compose-secrets.yml
# Create secret files and set appropriate permissions (chmod 600)
sudo docker compose up -d
```

You will need to supply sensitive values either via environment variables or Docker Secrets. Choose the method that works best for your setup and security requirements.

See…
