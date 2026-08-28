---
repo: "ericcornelissen/js-regex-security-scanner"
name: "js-regex-security-scanner"
description: "A static analyzer to scan JavaScript code for problematic regular expressions."
readmeQualityOk: true
url: "https://github.com/ericcornelissen/js-regex-security-scanner"
homepage: "https://hub.docker.com/r/ericornelissen/js-re-scan"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [72]
topics: ["javascript", "redos", "sast", "regex", "security", "regular-expression", "scanner", "static-analysis"]
stars: 8
forks: 2
openIssues: 3
closedIssues: 55
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-09-14T20:17:04Z"
lastCommitAt: "2026-08-28T05:28:48Z"
lastReleaseAt: "2026-03-29T16:38:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 81
maintainers: ["ericcornelissen", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/be79cb45715a5adfe9bbd5eac2606d49386d51aab014b7ac9f8d75f255ff8801/ericcornelissen/js-regex-security-scanner"
postedAt: "2026-07-30T06:14:34.980Z"
---

# JavaScript Regex Security Scanner

A static analyzer to scan JavaScript and TypeScript code for problematic regular
expressions.

## Getting started

The scanner is available as a container image, install it using:

```shell
docker pull docker.io/ericornelissen/js-re-scan:latest
```

Validate the container provenance using cosign (optional but recommended):

```shell
cosign verify \
  --certificate-identity-regexp \
    'https://github.com/ericcornelissen/js-regex-security-scanner/.+' \
  --certificate-oidc-issuer \
    'https://token.actions.githubusercontent.com' \
  docker.io/ericornelissen/js-re-scan:latest
```

Now you can use it to scan a JavaScript or TypeScript project. For example, to
scan the current directory:

```shell
docker run --rm -v $(pwd):/project docker.io/ericornelissen/js-re-scan:latest
```

To use [Podman] instead of [Docker] you can replace `docker` by `podman` in any
example command. To use the [GitHub Container Registry] instead of [Docker] hub
you can use `ghcr.io/ericcornelissen/js-re-scan` instead.

### SARIF

It is possible to get a report in SARIF format for programmatic consuption of
the scan results. Simply use the `--sarif` and `--output-file`…
