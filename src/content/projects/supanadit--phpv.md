---
repo: "supanadit/phpv"
name: "phpv"
description: "PHP Version Manager"
readmeQualityOk: true
url: "https://github.com/supanadit/phpv"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["bash", "php", "posix-compliant", "shell"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-11T13:13:47Z"
lastCommitAt: "2026-11-24T14:08:06Z"
lastReleaseAt: "2026-04-11T10:20:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 60
maintainers: ["supanadit", "saefulrahman"]
openGraphImageUrl: "https://opengraph.githubassets.com/880ac0452ded071c1a33c2576f23a218d95e79e34b44fa06d3d5f298a0194b14/supanadit/phpv"
---

# phpv — The PHP Version Manager That Actually Compiles

PHP has no pre-built Linux binaries. Every other major language does. phpv resolves the full transitive dependency graph — OpenSSL, libxml2, curl, zlib, oniguruma, ICU — checks what's already on your system, builds what's missing from source, then compiles PHP with the correct `--with-*` flags. `phpv install 8.4` actually works.

---

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/supanadit/phpv/main/install.sh | bash
```

Or download a binary from [releases](https://github.com/supanadit/phpv/releases):

```bash
curl -fsSL https://github.com/supanadit/phpv/releases/latest/download/phpv-linux-amd64 -o phpv
chmod +x phpv && sudo mv phpv /usr/local/bin/
```

From source:

```bash
git clone https://github.com/supanadit/phpv.git
cd phpv && go build -o phpv ./app/main.go
```

---

## Uninstall

```bash
curl -fsSL https://raw.githubusercontent.com/supanadit/phpv/main/uninstall.sh | bash
```

To skip the confirmation prompt:

```bash
curl -fsSL https://raw.githubusercontent.com/supanadit/phpv/main/uninstall.sh | bash -s -- --yes
```
