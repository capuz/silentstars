---
repo: "tts-empire/spawnwp"
name: "spawnwp"
description: "Self-hosted WordPress lab for disposable, reproducible environments"
readmeQualityOk: true
url: "https://github.com/tts-empire/spawnwp"
homepage: "https://spawnwp.com"
language: "Python"
languages: ["Python"]
languagePcts: [41]
topics: ["adminer", "docker", "mailpit", "wordpress"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-06-27T16:12:55Z"
lastCommitAt: "2026-07-13T06:34:55Z"
lastReleaseAt: "2026-06-28T18:42:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 48
maintainers: ["tts-empire"]
openGraphImageUrl: "https://opengraph.githubassets.com/9aeebb02674e261ebaa26e7a72b54a571ab7539f1c32683d7181011113d745c0/tts-empire/spawnwp"
discussionCount: 7
---

<h1 align="center">SpawnWP</h1>

  <strong>A self-hosted WordPress lab for disposable dev environments.</strong><br>
  Bring your server. Spawn temporary WordPress projects without server babysitting.
</p>

</p>

---

SpawnWP turns a fresh Debian or Ubuntu server — cloud VM/VPS, dedicated or bare
metal — into a WordPress lab for temporary, isolated and
sacrificable development environments. A single installer sets up Docker, an
nginx TLS edge, and a web **cockpit** from which you spawn, reset, snapshot and
destroy WordPress environments — each in its own container stack.

The goal is brutally simple:

```text
install -> open cockpit -> create site -> done
```

No hand-built nginx config, no Docker commands to remember, no shared test site
to accidentally break. Build a plugin, test a theme, demo a project, destroy the
environment and create another one. Every site ships ready for **WordPress.org
plugin/theme development** through the default Development blueprint: Plugin Check, Theme Check, PHP_CodeSniffer (WPCS),
PHPStan, Query Monitor, Mailpit and more, preinstalled.

The cockpit lives on its own subdomain and is protected by HTTPS plus mandatory
application authentication:…
