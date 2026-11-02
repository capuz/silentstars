---
repo: "frenck/python-elgato"
name: "python-elgato"
description: "Asynchronous Python client for Elgato Key Lights."
readmeQualityOk: true
url: "https://github.com/frenck/python-elgato"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 36
forks: 6
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2019-12-07T15:32:35Z"
lastCommitAt: "2026-11-02T17:57:05Z"
lastReleaseAt: "2023-02-05T17:04:37Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 88
undervaluedScore: 40
maintainers: ["dependabot[bot]", "frenck"]
openGraphImageUrl: "https://opengraph.githubassets.com/6550dee66f47ef64750577526037922240123427be54bb162311b83da8dfa9e1/frenck/python-elgato"
fundingLinks: ["GITHUB:https://github.com/frenck", "PATREON:https://patreon.com/frenck", "CUSTOM:https://frenck.dev/donate/"]
---

# Python: Asynchronous client for Elgato Lights

Asynchronous Python client for Elgato Lights.

## About

This package allows you to control and monitor Elgato Light devices
programmatically. It is mainly created to allow third-party programs to automate
the behavior of an Elgato Light device.

Known compatible and tested Elgato devices:

- Elgato Key Light
- Elgato Key Light Air
- Elgato Key Light Mini
- Elgato Light Strip

## Installation

```bash
pip install elgato
```

To install with the optional CLI:

```bash
pip install "elgato[cli]"
```

## CLI

The optional CLI lets you control Elgato Lights directly from the terminal.
The `--host` option can also be set via the `ELGATO_HOST` environment variable.

```bash
# Show device information
elgato info --host elgato-key-light.local

# Show the current light state
elgato state --host elgato-key-light.local

# Turn the light on (optionally set brightness and temperature)
elgato on --host elgato-key-light.local --brightness 80 --temperature 200

# Turn the light off
elgato off --host elgato-key-light.local

# Identify the light (makes it blink)
elgato identify --host elgato-key-light.local

# Restart the device
elgato restart --host…
