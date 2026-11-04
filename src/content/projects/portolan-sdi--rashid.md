---
repo: "portolan-sdi/rashid"
name: "rashid"
description: "A validator and linter for Portolan catalogs."
readmeQualityOk: true
url: "https://github.com/portolan-sdi/rashid"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 5
openIssues: 22
closedIssues: 59
watchers: 0
contributors: 6
recentReleases: 6
createdAt: "2026-06-26T09:16:35Z"
lastCommitAt: "2026-11-04T13:05:17Z"
lastReleaseAt: "2026-10-12T11:16:49Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 92
undervaluedScore: 76
maintainers: ["nlebovits", "dependabot[bot]", "portolan-ops-sync[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/247cac57b452a39f111fd20bb68fc15e7c25aab022a50eb76b030bef3f6db8c2/portolan-sdi/rashid"
---

# rashid

rashid checks whether a [Portolan](https://www.portolan-sdi.org/) catalog follows the specification.

Give it a catalog directory, its root `catalog.json`, or the URL of a published catalog. rashid checks the metadata, structure, asset bytes, and hosting. It reports each problem with a stable rule ID.

The name comes from the Arabic root ر ش د. Its participles رَاشِدٌ and رَشِيدٌ mean ["taking, or following, a right way or course or direction"](https://arabiclexicon.hawramani.com/?p=5472#205af1).

## Install

```bash
uv tool install rashid
```

rashid requires Python 3.11 or later.

## Check a Catalog

```bash
rashid check path/to/catalog
```

Exit code `0` means the catalog breaks no MUST requirement. Exit code `1` means it breaks at least one.

By default, rashid checks:

- Portolan metadata requirements.
- STAC 1.1.0 core structure with schemas included in the package.
- Local and remote asset bytes against their metadata and format rules.

Use `--no-data` when you only need a metadata and structure result. Use `--data-scope local` to keep byte checks inside the catalog directory.

```bash
rashid check path/to/catalog --data-scope local
```

## Check a published…
