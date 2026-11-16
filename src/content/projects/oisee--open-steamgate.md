---
repo: "oisee/open-steamgate"
name: "open-steamgate"
description: "Local /IWBEP/ OData v2 runtime for classic code-based SEGW services: transpile ABAP, Open SQL over SQLite, serve Fiori"
readmeQualityOk: true
url: "https://github.com/oisee/open-steamgate"
language: "JavaScript"
languages: ["JavaScript", "ABAP"]
languagePcts: [69, 21]
stars: 35
forks: 6
openIssues: 21
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-11T20:26:29Z"
lastCommitAt: "2026-11-16T03:22:37Z"
lastReleaseAt: "2026-10-02T01:53:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 81
undervaluedScore: 36
maintainers: ["oisee"]
openGraphImageUrl: "https://opengraph.githubassets.com/c54097127bbf8c261946d5d619663a09c1cdb62b8f509588f35ebdd3785f85d1/oisee/open-steamgate"
---

# open-steamgate

**An ABAP application server you can clone.**

**Coming from the ABAP Cloud Developer Trial (A4H)?**
[`docs/coming-from-a4h.md`](https://github.com/oisee/open-steamgate/blob/HEAD/docs/coming-from-a4h.md) is the first hour: run it,
connect Eclipse, bring your own code, and the table of what A4H has that this does not.

Part of the steampunk family:
[vsp](https://github.com/oisee/vibing-steampunk) (ADT ↔ MCP),
[abapiti](https://github.com/oisee/abapiti) (TypeScript and WASM to ABAP),
[open-rfc-go](https://github.com/oisee/open-rfc-go) (RFC) and
[open-diag-go](https://github.com/oisee/open-diag-go) (SAP GUI DIAG).

## TL;DR — run it

| way | do this | then open |
| --- | --- | --- |
| **Browser, now** | nothing to install | **[oisee.github.io/open-steamgate/main/app/flp.html](https://oisee.github.io/open-steamgate/main/app/flp.html)** |
| **Docker** | `git clone https://github.com/oisee/open-steamgate && cd open-steamgate && docker compose -p osd11 -f docker/compose.sqlite.yml up -d` | `http://localhost:8011/app/flp.html` |
| **Portainer** | Stacks → Add stack → Web editor, paste one YAML block from…
