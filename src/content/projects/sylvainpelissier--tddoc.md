---
repo: "sylvainpelissier/tddoc"
name: "tddoc"
description: "2D-Doc parser library"
readmeQualityOk: true
url: "https://github.com/sylvainpelissier/tddoc"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["2d-doc"]
stars: 15
forks: 4
openIssues: 1
closedIssues: 1
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2021-07-18T22:48:40Z"
lastCommitAt: "2026-07-24T06:08:17Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 77
undervaluedScore: 39
maintainers: ["sylvainpelissier", "nipo", "fareshan"]
openGraphImageUrl: "https://opengraph.githubassets.com/22a6025b1b55c00deed9af1a7813a0b2b4286416ff470cbd239cc136cb1b7f86/sylvainpelissier/tddoc"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/radareorg"]
---

# 2D-Doc parser library

This is a [2D-DOC](https://ants.gouv.fr/Les-solutions/2D-Doc) parser library. It is able to decode and pretty-print a 2D-Doc as defined by French ANTS, and is also able to verify signature.

## Usage

### Dumper

There is a built-in dumper tool that can be called through command
line with:

```shell
$ python -m tddoc.dump --test-ca tests/spec_samples/3.1.3/15.2.2/17.txt
tests/spec_samples/3.1.3/15.2.2/17.txt:
Version: 3
Country: FR
CA: FR00
Cert: 0001
Emit date: 2179-06-06
Sign date: 2017-06-18
Emitter doc type: Carte T3P
User doc type: Justificatif d'activité
Identifiants de données relatives aux véhicules
  Numéro de la carte: 12345678901
  Date d’expiration initiale: 2019-11-30
Sign: a06b0fb1979c3a526d797a019c78f969a09d9973553d3e353d79a4a29041a4100792ccce10821f328046a36a024a2f47366c2df0cc627344d2070aa987c8e047
Signature OK
```

### API

A basic parsing sessions boils down to:

```python
>>> from tddoc.doc import TwoDDoc
>>> c = TwoDDoc.from_code(open('tests/spec_samples/3.1.3/15.2.2/17.txt', 'r').read().strip())
>>> c.header.doc_type().user_type
"Justificatif d'activité"
>>> c.header.doc_type().emitter_type
'Carte T3P'
>>> c.message.dataset…
