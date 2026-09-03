---
repo: "gioamato/stateless-wordpress"
name: "stateless-wordpress"
description: "Minimal, cloud-native, battle-tested WordPress environment."
readmeQualityOk: true
url: "https://github.com/gioamato/stateless-wordpress"
language: "Shell"
languages: ["Shell", "Dockerfile"]
languagePcts: [63, 22]
stars: 28
forks: 6
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-11-27T15:18:45Z"
lastCommitAt: "2026-09-03T08:12:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 39
maintainers: ["dependabot[bot]", "gioamato"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cc96d66ea90cde411c1414835bebb054b22cb8d56a3a3d116dcf048c85367b9/gioamato/stateless-wordpress"
---

# Stateless WordPress

Minimal, cloud-native, battle-tested WordPress environment meant to be used both in local development and staging/production.

## Usage

### Local Development Environment

```bash
# Clone the repo
git clone https://github.com/gioamato/stateless-wordpress.git
cd stateless-wordpress

# Spin it up with Docker Compose
docker compose up -d

# Open your browser and head to http://localhost:8080
# You will find the famous WordPress 5-minute install
```

### Kubernetes

```bash
# Deploy with kubectl
kubectl apply -f https://raw.githubusercontent.com/gioamato/stateless-wordpress/master/deploy/kubernetes/deploy.yaml

# The namespace 'stateless-wordpress' is created to host the example resources:
# - 1 Stateful MySQL replica with emptyDir volume (data lost on restart)
# - 3 Stateless WordPress replicas (horizontal scaling)
# - A Secret storing WordPress Enviroment Configuration
# - A Service with type LoadBalancer to expose the app

# Open your browser and head to the service External IP
# You will find the famous WordPress 5-minute install
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to…
