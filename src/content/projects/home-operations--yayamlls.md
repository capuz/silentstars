---
repo: "home-operations/yayamlls"
name: "yayamlls"
description: "YAML language server in Go. Schema-driven diagnostics, completion, hover; pluggable rendering for Flux HelmRelease and Kustomization via flate."
readmeQualityOk: true
url: "https://github.com/home-operations/yayamlls"
homepage: "https://github.com/home-operations/yamlls"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["flux", "golang", "json-schema", "kubernetes", "language-server", "lsp", "yaml", "0ver"]
stars: 24
forks: 3
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 6
recentReleases: 4
createdAt: "2026-05-22T20:32:33Z"
lastCommitAt: "2026-08-28T12:23:28Z"
lastReleaseAt: "2026-06-01T14:32:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 48
maintainers: ["sticky-gecko[bot]", "onedr0p", "notpeelz"]
openGraphImageUrl: "https://opengraph.githubassets.com/beebe8f1f5df3476ec7062ac4fa55ed3895d60cb905f8d0efe68c560b74550a2/home-operations/yayamlls"
---

# yayamlls

**Y**et **A**nother **YAML** **L**anguage **S**erver in Go. Schema-driven diagnostics, completion, and
hover; pluggable rendering for Flux `HelmRelease` and `Kustomization`
sources via [home-operations/flate][flate].

Per-document schema resolution, highest priority first:

1. in-file modeline (`# yaml-language-server: $schema=<url>`)
2. workspace `schemas:` glob in `.yayamlls.yaml`
3. JSON Schema Store catalog (filename match)
4. Kubernetes `apiVersion`+`kind` → `kubernetes.schemaUrl` template

Multi-doc files validate each document against its own schema. The
default `kubernetes.schemaUrl` is
`https://k8s-schemas.home-operations.com/{group:-core}/{kind@L}_{version@L}.json`;
override in `.yayamlls.yaml` to point elsewhere. 404s are silently skipped.

Kubernetes support — apiVersion+kind detection, Flux rendering, and code
lenses — is on by default. Disable it to run as a generic YAML language server:

```yaml
kubernetes:
  enabled: false
```

## vs. redhat/yaml-language-server

|                                                | yayamlls                                       | redhat/yaml-language-server                                 |
|…
