---
repo: "knowledgepixels/nanopub-registry"
name: "nanopub-registry"
description: "Second-generation publication/lookup service for Nanopublications, superseding the nanopub-server."
readmeQualityOk: true
url: "https://github.com/knowledgepixels/nanopub-registry"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["nanopublications"]
stars: 9
forks: 4
openIssues: 13
closedIssues: 63
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2023-03-15T15:47:53Z"
lastCommitAt: "2026-11-06T12:18:14Z"
lastReleaseAt: "2026-04-08T08:04:38Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 76
maintainers: ["tkuhn", "renovate[bot]", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/21e4a74f71705f7063c8841d1f15dfcc9b339db51d13208c83d04caf6054103d/knowledgepixels/nanopub-registry"
---

# Nanopub Registry

The Nanopub Registry implements a publication/lookup service as envisaged by
the [Knowledge Space](https://w3id.org/knowledge-space/).

See the [design document](https://github.com/knowledgepixels/nanopub-registry/blob/HEAD/design.md) for some more details on the conceptual and technical parts.

The Nanopub Registry is the second-generation publication/lookup service for nanopublications, superseding the
[nanopub-server](https://github.com/tkuhn/nanopub-server).

## Status

The Nanopub Registry is in production use, with several public instances running (see below). Parts of the trust
model - in particular the handling of endorsements - are still evolving.

## Public Instance

These are some currently running instances:

- https://registry.nanodash.net/
- https://registry.knowledgepixels.com/
- https://registry.petapico.org/

Or check out the [Nanopub Monitor](https://monitor.knowledgepixels.com/).

## Running an Instance

To run your own registry instance, copy the `docker-compose.override.yml.template` file to
`docker-compose.override.yml`, adjust the settings in its Section 1 (public URL, coverage, and peers), and run:

```bash
docker compose up -d
```

The…
