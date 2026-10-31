---
repo: "ma2za/python-substack"
name: "python-substack"
description: "Write and safely manage Substack drafts from Markdown with Python, CLI, and MCP."
readmeQualityOk: true
url: "https://github.com/ma2za/python-substack"
homepage: "https://ma2za.github.io/python-substack/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["substack", "newsletter", "python", "python-substack", "mcp", "api-wrapper", "automation", "cli", "markdown", "publishing"]
stars: 181
forks: 34
openIssues: 0
closedIssues: 21
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2022-06-26T23:36:44Z"
lastCommitAt: "2026-10-31T07:46:47Z"
lastReleaseAt: "2025-12-21T14:11:28Z"
status: "thriving"
tags: ["funded"]
healthScore: 97
undervaluedScore: 45
maintainers: ["ma2za", "dependabot[bot]", "MattFisher"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0ab7794adf69fa484a2571e0c5fcd2e5ea290dd7bb503d0cefb3edc3e316956/ma2za/python-substack"
fundingLinks: ["GITHUB:https://github.com/ma2za"]
---

# Python Substack

Write Substack posts in Markdown and safely create, inspect, schedule, and
publish them through Python, a command-line interface, or MCP.

[Documentation](https://ma2za.github.io/python-substack/) ·
[Getting started](https://ma2za.github.io/python-substack/getting-started.html) ·
[PyPI](https://pypi.org/project/python-substack/)

> [!IMPORTANT]
> Creating and publishing are separate operations. `substack drafts create`
> always creates an unpublished draft. It never schedules, sends, publishes,
> or deletes content.

## From Markdown to a Substack draft

Install the package:

```bash
pip install python-substack
```

Check the selected account and publication:

```bash
substack status
```

Create a safe unpublished draft, then publish only when it is ready:

```bash
substack drafts create post.md
substack drafts publish 12345 --no-send
```

Publishing and deletion require confirmation. Noninteractive and JSON
workflows must pass `--yes` explicitly.

Markdown source:

Substack result:

## What it supports

- Create rich Substack drafts from Markdown.
- Upload local images referenced by Markdown.
- Set audience, comment permissions, SEO metadata, slug, sections,…
