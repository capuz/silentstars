---
repo: "app-sre/qontract-reconcile"
name: "qontract-reconcile"
description: "CLI tool to reconcile services with their desired state as defined in App-Interface"
readmeQualityOk: true
url: "https://github.com/app-sre/qontract-reconcile"
homepage: "https://quay.io/repository/redhat-services-prod/app-sre-tenant/qontract-reconcile-master/qontract-reconcile-master"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 37
forks: 106
openIssues: 3
closedIssues: 15
watchers: 12
contributors: 69
recentReleases: 0
createdAt: "2018-11-15T13:47:25Z"
lastCommitAt: "2026-07-23T06:15:24Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 66
maintainers: ["rhur-pixel", "chassing", "jfreixa"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a69e855e8b068433fe6c45a9255d51adcb62d560885150c32d7802a26b6b525/app-sre/qontract-reconcile"
---

# qontract-reconcile

A tool to reconcile services with their desired state as defined in app-interface.
Additional tools that use the libraries created by the reconciliations are also hosted here.

## Usage

Use [config.toml.example](https://github.com/app-sre/qontract-reconcile/blob/HEAD/config.toml.example) as a template to create a `config.toml` file.

Run a reconcile integration like this:

```sh
qontract-reconcile --config config.toml --dry-run <subcommand>

# review output and run without `--dry-run` to perform actual changes
qontract-reconcile --config config.toml <subcommand>
```

> Note: you can use the `QONTRACT_CONFIG` environment variable instead of using `--config`.

### OpenShift usage

OpenShift templates can be found [here](https://github.com/app-sre/qontract-reconcile/blob/HEAD/openshift/qontract-reconcile.yaml). In order to add integrations there please use the [helm](https://github.com/app-sre/qontract-reconcile/blob/HEAD/helm/README.md) chart provided.

## Available Integrations

`qontract-reconcile` includes the following integrations:

```text
  acs-policies                    Manages RHACS security policy configurations
  acs-rbac…
