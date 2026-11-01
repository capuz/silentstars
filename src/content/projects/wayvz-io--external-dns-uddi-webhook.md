---
repo: "wayvz-io/external-dns-uddi-webhook"
name: "external-dns-uddi-webhook"
description: "ExternalDNS webhook provider for Infoblox Universal DDI (NIOS-X / Infoblox Portal)"
readmeQualityOk: true
url: "https://github.com/wayvz-io/external-dns-uddi-webhook"
language: "Go"
languages: ["Go"]
languagePcts: [86]
stars: 5
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-09-13T12:07:22Z"
lastCommitAt: "2026-11-01T22:59:24Z"
lastReleaseAt: "2026-10-15T04:27:53Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 59
maintainers: ["wayvzrenovate[bot]", "rorychatterton", "wayvz-developer-agent-rory[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d11ee4f574a5b3d26a6b6f347d09b82b57f07469d45d780bb2bcaaa9a73ceebf/wayvz-io/external-dns-uddi-webhook"
---

# external-dns-uddi-webhook

[ExternalDNS](https://github.com/kubernetes-sigs/external-dns) webhook provider
for Infoblox Universal DDI, also known as the Infoblox Portal or NIOS-X. Run it
as a sidecar in the ExternalDNS pod to publish Kubernetes hostnames through the
Portal `dns/record` API.

The container image is
`ghcr.io/wayvz-io/external-dns-uddi-webhook`. Releases publish the `vX.Y.Z`,
`vX.Y`, and `latest` tags for `linux/amd64` and `linux/arm64`.

## How it fits together

ExternalDNS reads Services, Ingresses, HTTPRoutes, and the other configured
Kubernetes sources. The webhook runs beside ExternalDNS in the same pod and
translates the webhook protocol into Universal DDI API requests.

*ExternalDNS and the webhook manage records through the Portal API. DNS clients
query the authoritative DNS servers directly. [PlantUML source](https://github.com/wayvz-io/external-dns-uddi-webhook/blob/HEAD/docs/diagrams/container.puml).*

## How changes flow

ExternalDNS owns the reconciliation loop. The webhook reads the current
Universal DDI records, adjusts desired endpoints for provider rules, and
applies the change plan that ExternalDNS sends.

*The webhook API stays on localhost…
