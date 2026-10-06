---
repo: "AndreyKilanov/logfold"
name: "logfold"
description: "Fold large logs into templates and compare two runs. Rust core, Python API and CLI."
readmeQualityOk: true
url: "https://github.com/AndreyKilanov/logfold"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [74, 26]
topics: ["cli", "diff", "drain", "log-parsing", "logs", "observability", "python", "rust", "templates"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 32
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-10-04T13:06:09Z"
lastCommitAt: "2026-10-06T10:42:58Z"
lastReleaseAt: "2026-10-05T16:02:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 54
maintainers: ["AndreyKilanov"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1404416936/6ef4ad2f-cdad-49a2-b5e4-9466cc92a37e"
---

---

logfold reads a log and replaces the variable parts of messages (numbers, IP addresses, UUIDs, paths) with masks. Lines
with the same text are then grouped into templates. For every template it counts the records, the first and last time it
appeared, the highest severity level and an example line. The `diff` command compares two runs, for example before and
after a deploy, and shows the templates that are new, gone or noticeably changed in share.

The core is written in Rust; you can use it from Python or from the command line. Everything runs locally and no data
is sent anywhere.

```
$ logfold diff before.log after.log --out diff.html --fail-on-new
before.log -> after.log: 1,265,631 -> 1,246,573 records, 2 new (2 WARN+), 1 disappeared, 3 changed, 9 unchanged, native engine, 3.41s

New templates (2)
    before      after    change  level  template
         0     44,102       new  ERROR  circuit breaker opened for upstream <IP>
         0     44,310       new  WARN   queue depth <NUM> exceeds limit on worker-<NUM>
```

## What it does

- **Templates.** `user alice failed login from 10.0.0.7` and the other lines like it are reduced to one entry,
  `user <*> failed login from…
