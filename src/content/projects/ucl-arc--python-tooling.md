---
repo: "UCL-ARC/python-tooling"
name: "python-tooling"
description: "Python package template for new research software projects"
readmeQualityOk: true
url: "https://github.com/UCL-ARC/python-tooling"
homepage: "https://github-pages.arc.ucl.ac.uk/python-tooling/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cookiecutter", "python", "python-template", "python-templates", "python3", "research-software", "research-software-engineering", "ucl", "hacktoberfest"]
stars: 62
forks: 10
openIssues: 27
closedIssues: 165
watchers: 16
contributors: 28
recentReleases: 0
createdAt: "2023-03-14T10:49:45Z"
lastCommitAt: "2026-09-16T08:48:23Z"
lastReleaseAt: "2026-03-19T10:09:56Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 88
undervaluedScore: 43
maintainers: ["renovate[bot]", "paddyroddy", "samcunliffe"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/613825127/1d7c9496-088f-4e84-9463-ae02f411fc33"
discussionCount: 7
---

<h1> UCL ARC Python Recommendations</h1>
</div>

This repository collects our recommendations for a research software project in Python.
We have a [website] if you need some advice for what tools to use, and a template if you're starting a project from scratch.

🍪 Our template uses [cookiecutter] to set up a new package with our preferred tools ready to go.

> [!NOTE]
> If you're making a package in a research community that already has a template, use theirs instead!

## How to use our template

Here are some quick start steps.
We also have a more detailed [tutorial](https://github.com/UCL-ARC/python-tooling/blob/HEAD/docs/pages/tutorial.md) and some [talks](https://github.com/ucl-arc/python-tooling-presentations) about this that have been presented in workshops for researchers at UCL.

If you have [uv] installed, run:

```sh
uvx cookiecutter gh:ucl-arc/python-tooling --checkout latest
```

If you don't want to use uv you can [install cookiecutter], then run without `uvx`:

```sh
cookiecutter gh:ucl-arc/python-tooling --checkout latest
```

[cookiecutter] will ask you questions to set up your project.
Type your answer, or hit return without typing anything to use the defaults.…
