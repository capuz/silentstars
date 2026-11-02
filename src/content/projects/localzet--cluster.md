---
repo: "localzet/Cluster"
name: "Cluster"
description: "Gateway/Business Worker clustering for Localzet Server 4.x."
readmeQualityOk: true
url: "https://github.com/localzet/Cluster"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["library", "server", "localzet-cluster", "localzet-server"]
stars: 22
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-02-13T14:00:07Z"
lastCommitAt: "2026-11-02T11:36:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 30
maintainers: ["localzet"]
openGraphImageUrl: "https://opengraph.githubassets.com/d76d9b3ab74a8aa9140b6cefcfd9184ec4665dfb4cce4a49eb261f06008d027d/localzet/Cluster"
---

# Localzet Cluster

[Русская документация](https://github.com/localzet/Cluster/blob/HEAD/README.ru.md)

Gateway/Business Worker clustering for Localzet Server: gateways own client connections, workers handle application events, and Register distributes gateway addresses.

## Compatibility

- PHP 8.2 or later; Unix multi-process operation needs `pcntl` and `posix`.
- Current source and the upcoming release require `localzet/server:^7.0`.
- PHP 8.2 or later; Unix multi-process operation needs `pcntl` and `posix`.

## Install

The package is not currently registered on Packagist. Add its Git repository and install the stable release:

```sh
composer config repositories.localzet-cluster vcs https://github.com/localzet/Cluster
composer require localzet/cluster:^1.0
```

For this repository's examples and regression tests:

```sh
composer install
export LOCALZET_CLUSTER_SECRET="$(php -r 'echo bin2hex(random_bytes(32));')"
php start.php start
```

Use the same secret on every host and keep it outside source control. The examples refuse missing secrets and secrets shorter than 32 bytes. By default, discovery and WebSocket listeners bind to loopback; the example WebSocket endpoint is…
