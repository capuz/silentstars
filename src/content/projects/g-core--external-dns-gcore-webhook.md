---
repo: "G-Core/external-dns-gcore-webhook"
name: "external-dns-gcore-webhook"
description: "Gcore external-dns webhook handler for automating k8s DNS records creation"
readmeQualityOk: true
url: "https://github.com/G-Core/external-dns-gcore-webhook"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 9
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2024-02-07T12:57:39Z"
lastCommitAt: "2026-11-03T11:15:49Z"
lastReleaseAt: "2024-03-14T13:13:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 33
maintainers: ["rizalgowandy"]
openGraphImageUrl: "https://opengraph.githubassets.com/3099e86458bd723a0226c88533447063738921f83659c49c8779da97147aeddd/G-Core/external-dns-gcore-webhook"
---

# ExternalDNS - Gcore

ExternalDNS is a Kubernetes add-on for automatically managing Domain Name System (DNS) records for Kubernetes services by using different DNS providers. By default, Kubernetes manages DNS records internally, but ExternalDNS takes this functionality a step further by delegating the management of DNS records to an external DNS provider such as this one. Therefore, the Gcore webhook allows to manage your Gcore domains inside your kubernetes cluster with [ExternalDNS](https://github.com/G-Core/external-dns-gcore-webhook/blob/HEAD//github.com/kubernetes-sigs/external-dns).

To use ExternalDNS with Gcore you need to get API token from https://accounts.gcore.com/profile/api-tokens.

As of `v0.1.7`, the webhook no longer skips TXT records and handles them normally.
For wildcard hosts, use the `--txt-wildcard-replacement` option on the `external-dns` container:

```yaml
      containers:
        - name: external-dns
          image: registry.k8s.io/external-dns/external-dns:v0.20.0
          args:
            - --source=service
            - --source=ingress
            - --provider=webhook
            - --txt-owner-id=my-owner
            -…
