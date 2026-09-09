---
repo: "strictdoc-project/strictdoc"
name: "strictdoc"
description: "Software for technical documentation and requirements management."
readmeQualityOk: true
url: "https://github.com/strictdoc-project/strictdoc"
homepage: "https://strictdoc-project.github.io/"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["documentation", "requirements"]
stars: 380
forks: 78
openIssues: 153
closedIssues: 571
watchers: 10
contributors: 43
recentReleases: 0
createdAt: "2020-05-14T18:03:48Z"
lastCommitAt: "2026-09-09T08:18:31Z"
lastReleaseAt: "2021-08-16T19:35:32Z"
status: "thriving"
tags: ["legacy_hero", "community_hub"]
healthScore: 95
undervaluedScore: 38
maintainers: ["stanislaw", "mettta", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c1ad6e131a5278a58548c67f88bf5010b2212d019ab241f0187d0db26e653d7/strictdoc-project/strictdoc"
discussionCount: 45
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
