---
repo: "org-quicko/silo"
name: "silo"
description: "A minimal, customizable and portable headless CMS available as a single binary"
readmeQualityOk: true
url: "https://github.com/org-quicko/silo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 6
forks: 0
openIssues: 4
closedIssues: 5
watchers: 0
contributors: 6
recentReleases: 6
createdAt: "2026-08-18T15:04:00Z"
lastCommitAt: "2026-09-21T09:13:41Z"
lastReleaseAt: "2026-09-19T10:22:21Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 55
maintainers: ["NachiketaVadera", "pranshu-shah-at-quicko", "vishvajit-sonagara-at-quicko"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4aa835e90d87956d0647672895c76e944f75d520ebf608aea4192e31aaf0dd7/org-quicko/silo"
---

# silo

A small, standards-based headless CMS. Define your collections in JSON Schema.
You get an admin UI with generated forms, a REST API, and data you can move
anywhere.

silo is one TypeScript process on [Bun](https://bun.com), with six runtime
dependencies. It keeps content as plain JSON documents in SQLite or in flat
files, it serves its own React admin UI, and each moving part sits behind an
interface you can replace. There is no proprietary field language, query
language, or file format in it. What silo stores, your other tools can already
read.

## Quick start

### Homebrew

```sh
brew install org-quicko/tap/silo
silo serve
```

`brew services start silo` runs silo in the background instead. It keeps the
data in `$(brew --prefix)/var/silo`.

### dnf (Amazon Linux 2023, RHEL, Fedora)

```sh
sudo curl -fsSL -o /etc/yum.repos.d/silo.repo https://org-quicko.github.io/silo/silo.repo
sudo dnf install silo
sudo systemctl enable --now silo
```

The package adds a `silo` system user, a config file at `/etc/silo/silo.toml`, a
data directory at `/var/lib/silo`, and a systemd unit. Nothing starts on
install. Both the packages and the repository index are signed, and the `.repo`
file…
