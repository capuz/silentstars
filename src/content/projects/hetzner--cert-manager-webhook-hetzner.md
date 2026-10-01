---
repo: "hetzner/cert-manager-webhook-hetzner"
name: "cert-manager-webhook-hetzner"
description: "cert-manager ACME webhook for Hetzner"
readmeQualityOk: true
url: "https://github.com/hetzner/cert-manager-webhook-hetzner"
language: "Go"
languages: ["Go", "HCL"]
languagePcts: [67, 20]
topics: ["cert-manager", "cert-manager-webhook", "dns", "hetzner", "hetzner-cloud", "kubernetes"]
stars: 74
forks: 14
openIssues: 3
closedIssues: 16
watchers: 2
contributors: 11
recentReleases: 0
createdAt: "2025-09-30T14:02:46Z"
lastCommitAt: "2026-10-01T10:23:42Z"
lastReleaseAt: "2025-12-15T11:34:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 47
maintainers: ["renovate[bot]", "hcloud-bot", "lukasmetzner"]
openGraphImageUrl: "https://opengraph.githubassets.com/87995a5b46da4c04a7c106226609dc743c48c4528b3062cac263edff0a652003/hetzner/cert-manager-webhook-hetzner"
---

# cert-manager-webhook-hetzner

 [](https://codecov.io/gh/hetzner/cert-manager-webhook-hetzner)

This webhook creates the necessary DNS entries in the [Hetzner DNS API](https://docs.hetzner.cloud/reference/cloud#zones) to solve a [DNS01 challenge](https://letsencrypt.org/docs/challenge-types/#dns-01-challenge) for a cert-manager [`Issuer`](https://cert-manager.io/docs/concepts/issuer/) of the [ACME](https://cert-manager.io/docs/configuration/acme/) type.

## Docs

- :rocket: See the [quick start guide](https://github.com/hetzner/cert-manager-webhook-hetzner/blob/HEAD/docs/guides/quickstart.md) to get you started.
- :book: See the [configuration reference](https://github.com/hetzner/cert-manager-webhook-hetzner/blob/HEAD/docs/reference/issuer-configuration.md) for the available configuration.

For more information, see the [documentation](https://github.com/hetzner/cert-manager-webhook-hetzner/blob/HEAD/docs/README.md).

## Development

### Start a development environment

1. Configure a `HETZNER_TOKEN` in your shell session.
2. Deploy the development cluster.

```bash
make -C dev up
```

3. Load the generated configuration to access the development cluster:

```bash
source…
