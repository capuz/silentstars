---
repo: "podhmo/kamidana"
name: "kamidana"
description: "神棚(kamidana)  is command line jinja2 template"
readmeQualityOk: true
url: "https://github.com/podhmo/kamidana"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["jinja2", "cli"]
stars: 11
forks: 1
openIssues: 11
closedIssues: 24
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2017-05-13T07:28:21Z"
lastCommitAt: "2026-09-16T08:48:24Z"
lastReleaseAt: "2024-03-05T09:54:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "under_pressure"]
healthScore: 93
undervaluedScore: 47
maintainers: ["devin-ai-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/516d04da43164637699a2eeec653021afe68f82cdec9fadc2a91914f3da3782a/podhmo/kamidana"
---

# kamidana

kamidana is yet another jinja2's cli wrapper.

features

- using jinja2 file as template file (basic feature)
- using a template bundled in a python package (e.g. `mypkg/templates/main.j2`)
- various input formats support (json, yaml, toml, ...)
- the way of lookup template is changed, relative to parent template path
- gentle error message
- batch execution for speed-up (via `kamidana-batch`)
- rendering with individual filters (via `--additionals` option)
- (useful additionals modules (e.g. `kamidana.additionals.naming` ...)

## usage

```console
usage: kamidana [-h] [--driver DRIVER] [--loader LOADER] [-d DATA]
                  [--logging {CRITICAL,FATAL,ERROR,WARN,WARNING,INFO,DEBUG,NOTSET}] [-a ADDITIONALS] [-e EXTENSION]
                  [-i {yaml,json,toml,csv,tsv,raw,env,md,markdown,spreadsheet}] [-o OUTPUT_FORMAT] [--dump-context]
                  [--list-info] [--debug] [--quiet] [--dst DST]
                  [template]

  positional arguments:
    template              template file ('./foo.j2', '../foo.j2', '/foo.j2') or a template in a python package
                          ('<package>/<path>')

  options:
    -h, --help            show this help…
