---
repo: "nobrega8/mbmap-library"
name: "mbmap-library"
description: "Open library of Modbus device register maps in the .mbmap format (CSV-based, CC0)"
readmeQualityOk: true
url: "https://github.com/nobrega8/mbmap-library"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cc0", "device-library", "iiot", "industrial-automation", "mbmap", "modbus", "modbus-map", "modbus-rtu", "modbus-tcp", "open-data"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-13T09:17:45Z"
lastCommitAt: "2026-10-14T08:57:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 39
maintainers: ["nobrega8"]
openGraphImageUrl: "https://opengraph.githubassets.com/d52c6f1cb5d576babc03747e28c7d4ea1fe16ef3bcacffe11f8c51a9debaba2a/nobrega8/mbmap-library"
---

# mbmap-library

An open library of Modbus register maps in the [`.mbmap` format](https://github.com/nobrega8/mbmap-library/blob/HEAD/SPEC.md).

Each file describes one device model: the manufacturer, how to connect to it and what every register means. Load a map into a compatible tool and you get the device's variables, already named, scaled and typed, without typing addresses from a PDF manual.

## Layout

```text
SPEC.md                         the .mbmap format specification
maps/<vendor>/<model>.mbmap     the shared maps
examples/                       fictional maps that show the format
index.json                      list of the maps, for apps that browse the library
ATTRIBUTION.md                  where converted maps come from, and their licences
tools/validate.py               validator (also runs in CI)
tools/build_index.py            rebuilds index.json
tests/                          sample files and the diagnostics each must produce,
                                for checking any .mbmap reader against the spec
```

Folder and file names are lowercase slugs, e.g. `maps/acme-meters/pm-200.mbmap`.

## Verified and unverified maps

The maps written from a…
