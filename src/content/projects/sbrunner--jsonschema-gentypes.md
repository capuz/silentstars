---
repo: "sbrunner/jsonschema-gentypes"
name: "jsonschema-gentypes"
description: "Tool to generate Python types based on TypedDict from a JSON Schema"
readmeQualityOk: true
url: "https://github.com/sbrunner/jsonschema-gentypes"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 49
forks: 15
openIssues: 19
closedIssues: 15
watchers: 11
contributors: 14
recentReleases: 0
createdAt: "2021-04-28T09:30:59Z"
lastCommitAt: "2026-11-27T15:29:35Z"
lastReleaseAt: "2022-12-20T08:13:35Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 84
undervaluedScore: 49
maintainers: ["renovate[bot]", "sbrunner", "geo-ghci-int[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e24be434699b9a73f3cc673ae3b3f5147cc6ec321315e7117a9d2d535024fa2d/sbrunner/jsonschema-gentypes"
discussionCount: 3
---

# JSON Schema generate Python types

kk
Tools to generate Python types based on TypedDict from a JSON schema

## Quick start

install:

```bash
python3 -m pip install --user jsonschema-gentypes
```

Convert a JSON schema to a Python file contains the types:

```bash
jsonschema-gentypes --json-schema=<JSON schema> --python=<destination Python file>
```

## Config file

You can also write a config file named `jsonschema-gentypes.yaml` with:

```yaml
headers: >
  # Automatically generated file from a JSON schema
# Used to correctly format the generated file
callbacks:
  - - black
  - - isort
generate:
  - # JSON schema file path
    source: jsonschema_gentypes/schema.json
    # Python file path
    destination: jsonschema_gentypes/configuration.py
    # The name of the root element
    root_name: Config
    # Argument passed to the API
    api_arguments:
      additional_properties: Only explicit
    # Rename an element
    name_mapping: {}
    # The minimum Python version that the code should support. By default the
    # currently executing Python version is chosen. Note that the output
    # may require typing_extensions to be installed.
    python_version: '3.11'
```
