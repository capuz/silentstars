---
repo: "Huluti/ossatrisk"
name: "ossatrisk"
description: "Tracking high-risk oss packages: abandoned, undermaintained, or CVE-exposed."
readmeQualityOk: true
url: "https://github.com/Huluti/ossatrisk"
homepage: "https://ossatrisk.org"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["open-source", "security", "dependencies", "cve", "oss", "scanner", "cli", "cli-tool"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-23T14:09:49Z"
lastCommitAt: "2026-11-03T10:52:28Z"
lastReleaseAt: "2026-04-01T13:27:26Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["github-actions[bot]", "Huluti", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab9d4eee7e234387860461022af997d078863e2723cb1c594acae77ea0453a64/Huluti/ossatrisk"
---

# ossatrisk

**ossatrisk** surfaces widely-used open source packages with hidden risks, like abandoned maintenance, unpatched CVEs, or a single-maintainer bus factor.

Only packages with high impact and broad usage are flagged.

The goal isn’t to blame anyone, but to get a clear picture of the ecosystem and act constructively, through contributions, forks where necessary, and fixes that help everyone relying on the code.

- **PHP** and **JavaScript/npm** ecosystems supported. More ecosystems planned.
- Datasets are updated daily.

## CLI usage

You can install **ossatrisk** via PyPI:

```bash
pip install ossatrisk
```

### Scan your project

```bash
# Scan the current directory for risky packages
ossatrisk scan --ecosystem php   # reads composer.json
ossatrisk scan --ecosystem js    # reads package.json
```

**Options:**

* `--ecosystem` (required) – supports `php` and `js`.
* `--format` – output format; `text` (default) or `json`. Use `json` for machine-readable output.

## Package Risk Assessment Algorithm

This project evaluates the **risk level of software packages** based on several key factors, helping developers identify dependencies that may pose potential stability or…
