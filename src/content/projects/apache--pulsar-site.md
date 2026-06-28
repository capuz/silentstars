---
repo: "apache/pulsar-site"
name: "pulsar-site"
description: "Apache Pulsar Site"
url: "https://github.com/apache/pulsar-site"
homepage: "https://pulsar.apache.org/"
language: "HTML"
languages: ["HTML"]
languagePcts: [98]
stars: 45
forks: 215
openIssues: 4
closedIssues: 13
watchers: 29
contributors: 193
recentReleases: 0
createdAt: "2021-11-17T23:14:02Z"
lastCommitAt: "2026-06-28T01:44:46Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 94
undervaluedScore: 60
maintainers: ["lhotari", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa5b3521ae359f17ec0faa22456ac7159abc804f5c0b21ab0f73ea66dea3e293/apache/pulsar-site"
---

# Apache Pulsar Website and Documentation

This repository contains the [Apache Pulsar website](https://pulsar.apache.org) source code and Apache Pulsar documentation.

Apache Pulsar is an open-source, distributed messaging and streaming platform built for the cloud.

## Quick start: Updating documentation and previewing changes

Make changes to the documentation in the `docs` directory.

To preview the changes, run the following command ([prerequisites](https://pulsar.apache.org/contribute/document-preview/#prerequisites)):

```shell
./preview.sh
```

This command starts a local web server on port 3000 and opens a browser window pointing to the website.

### Updating versioned docs

When your documentation changes apply to existing [supported versions](https://pulsar.apache.org/contribute/release-policy/#supported-versions), you should update both the versioned documentation in the `versioned_docs` directory and the documentation in the `docs` directory.

```shell
# List all supported major.minor.x versions
./scripts/docs-tool.sh supported_versions
```

After committing the changes for the `docs` directory, you can use the `docs-tool` to apply the changes to the versioned docs.…
