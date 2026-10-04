---
repo: "Programvareverkstedet/dibbler"
name: "dibbler"
description: "Readonly mirror of https://git.pvv.ntnu.no/Projects/dibbler"
readmeQualityOk: true
url: "https://github.com/Programvareverkstedet/dibbler"
homepage: "https://git.pvv.ntnu.no/Projects/dibbler"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 6
forks: 1
openIssues: 0
closedIssues: 3
watchers: 10
contributors: 19
recentReleases: 0
createdAt: "2018-08-19T13:59:00Z"
lastCommitAt: "2026-10-04T10:01:32Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "community_watch"]
healthScore: 100
undervaluedScore: 73
maintainers: ["h7x4"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc85190bdfc6755bc1f9b4b3f5b5702b7272829f5dbd56f8599fda670fd7f41b/Programvareverkstedet/dibbler"
---

# Dibbler
[Siste Testrapport 🛠️🧪☣︎](https://pages.pvv.ntnu.no/Projects/dibbler/main/test-report/)

EDB-system for PVVVV

## Hva er dette?

Dibbler er et system laget av PVVere for PVVere for å byttelåne både matvarer og godis.
Det er designet for en gammeldags VT terminal, og er laget for å være enkelt både å bruke og å hacke på.

Programmet er skrevet i Python, og bruker en sql database for å lagre data.

Samlespleiseboden er satt opp slik at folk kjøper inn varer, og får dibblerkreditt, og så kan man bruke
denne kreditten til å kjøpe ut andre varer. Det er ikke noen form for authentisering, så hele systemet er basert på tillit.
Det er anbefalt å koble en barkodeleser til systemet for å gjøre det enklere å både legge til og kjøpe varer.

Mer info på:

- <https://wiki.pvv.ntnu.no/wiki/Tjenester/Dibbler/>
- <https://wiki.pvv.ntnu.no/wiki/Drift/Dibbler/>

## Kom i gang

Installer python, og lag og aktiver et venv. Installer så avhengighetene med `pip install`.

Deretter kan du kjøre programmet med

```console
python -m dibbler -c example-config.toml create-db
python -m dibbler -c example-config.toml seed-data
python -m dibbler -c example-config.toml loop
```

## Prosjektstruktur…
