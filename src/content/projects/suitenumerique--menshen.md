---
repo: "suitenumerique/menshen"
name: "menshen"
description: "🔒 An OAuth 2.0 Token Exchange Authorization Server. Built with Django. 🐍"
readmeQualityOk: true
url: "https://github.com/suitenumerique/menshen"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 6
forks: 1
openIssues: 5
closedIssues: 7
watchers: 1
contributors: 15
recentReleases: 6
createdAt: "2026-03-11T09:07:36Z"
lastCommitAt: "2026-11-03T12:38:34Z"
lastReleaseAt: "2026-11-02T15:04:52Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 63
maintainers: ["jmaupetit", "renovate[bot]", "lunika"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c975ead83f257592d6f1a248bf98a2cf1e178d590c4645a24f8ddf5f4183f58/suitenumerique/menshen"
---

# La Suite Menshen: the Token Exchange server.

## Using Menshen

- Documentation:
  - Integration with LaSuite services [docs/lasuite](https://github.com/suitenumerique/menshen/blob/HEAD/docs/la-suite.md)
  - Using the Python client [src/client/README](https://github.com/suitenumerique/menshen/blob/HEAD/src/client/README.md)

## Local Development (for contributors)

Run Menshen locally for development and testing.

> [!WARNING]
> This setup is intended **for development and testing only**.

### Prerequisites

- Docker
- Docker Compose
- GNU Make
- Curl
- [uv](https://docs.astral.sh/uv/) (for the client)

If you plan to work on the Helm chart, you should also be able to run a local
Kubernetes cluster. This requires extra dependencies:

- `mkcert`
- [`kubectl`](https://kubernetes.io/fr/docs/tasks/tools/install-kubectl/)
- [Kind](https://kind.sigs.k8s.io/)
- [Helm](https://helm.sh/docs/intro/install)
- [Helmfile](https://github.com/helmfile/helmfile)
- [Tilt](https://tilt.dev/)

Verify installation:

```bash
docker -v
docker compose version
```

> If you encounter permission errors, you may need to use `sudo`, or add your
> user to the `docker` group.

### Bootstrap the project

The…
