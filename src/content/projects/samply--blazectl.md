---
repo: "samply/blazectl"
name: "blazectl"
description: "Control your FHIR® Server from the Command Line"
readmeQualityOk: true
url: "https://github.com/samply/blazectl"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["fhir", "fhir-client", "hl7", "go", "golang", "cli"]
stars: 26
forks: 7
openIssues: 15
closedIssues: 42
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2019-07-10T12:28:29Z"
lastCommitAt: "2026-11-03T12:38:25Z"
lastReleaseAt: "2021-09-03T14:16:33Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 61
maintainers: ["alexanderkiel", "renovate[bot]", "trobanga"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1d2a43ef861754921808fdbb8c976ffb74ac3168b130d42245f0f512716e76e/samply/blazectl"
---

# blazectl

blazectl is a command line tool to control your FHIR® server. blazectl also works with [Blaze][4].

Currently, you can do the following:

* upload transaction bundles from a directory
* download resources in NDJSON format
* count all resources by type
* evaluate a measure

## Installation

blazectl is available as binary for Linux, macOS and Windows.

For Linux and macOS an `install.sh` script is provided. It will download a tar file, extract it, and verify GitHub attestations using the [GitHub CLI][10] tool.  

```sh
curl -sSfL https://raw.githubusercontent.com/samply/blazectl/main/install.sh | sh
```

If you prefer a manual installation or need the Windows variant, please download the latest release [here][3]. The attestation verification is described below.

## Usage

```
blazectl is a command line tool to control your FHIR® server.

All commands print their results to STDOUT and meta output, like progress,
stats and error messages, to STDERR. Like in curl, the --silent flag
suppresses the meta output, while the exit code still signals failures. Use
--show-error together with --silent to still show error messages.

Usage:
  blazectl [command]

Available Commands:…
