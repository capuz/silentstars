---
repo: "strictdoc-project/strictdoc"
name: "strictdoc"
description: "Software for technical documentation and requirements management."
readmeQualityOk: true
url: "https://github.com/strictdoc-project/strictdoc"
homepage: "https://strictdoc-project.github.io/"
language: "Python"
languages: ["Python"]
languagePcts: [77]
topics: ["documentation", "requirements"]
stars: 450
forks: 95
openIssues: 161
closedIssues: 581
watchers: 9
contributors: 48
recentReleases: 0
createdAt: "2020-05-14T18:03:48Z"
lastCommitAt: "2026-11-15T11:25:54Z"
lastReleaseAt: "2021-08-16T19:35:32Z"
status: "thriving"
tags: ["legacy_hero", "community_hub"]
healthScore: 94
undervaluedScore: 37
maintainers: ["stanislaw", "mettta", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c2ee3b9387d9505edf49263fd8c04a23d6795700a7d9750700404c5887162a6/strictdoc-project/strictdoc"
discussionCount: 48
---

# StrictDoc

StrictDoc is open-source software for technical documentation and requirements
management.

## Documentation

The main StrictDoc documentation is hosted on Read the Docs:

The documentation is hosted on Read the Docs:
[StrictDoc documentation](https://strictdoc.readthedocs.io/en/stable/).

For a quick visual overview, see the
[StrictDoc project slide deck](https://github.com/strictdoc-project/strictdoc/blob/main/about/StrictDoc.pdf).

## Installation

StrictDoc requires Python 3.10 or newer.

```bash
pip install strictdoc
```

See the
[StrictDoc user guide](https://strictdoc.readthedocs.io/en/stable/stable/docs/strictdoc_01_user_guide.html)
section of the Read the Docs site for more details.

## Quick start

Create a small `hello_world.sdoc` file:

```text
[DOCUMENT]
TITLE: StrictDoc

[REQUIREMENT]
UID: SDOC-HIGH-REQS-MANAGEMENT
TITLE: Requirements management
STATEMENT: StrictDoc shall enable requirements management.
```

Export it to static HTML:

```bash
strictdoc export .
```

Or run the local web server:

```bash
strictdoc server .
```

StrictDoc starts the server on `http://127.0.0.1:5111` by default.

## Project links

- Documentation:…
