---
repo: "telekom-mms/Automated-Ansible-Role-Documentation"
name: "Automated-Ansible-Role-Documentation"
description: "Generate documentation automatically from an Ansible role's metadata"
url: "https://github.com/telekom-mms/Automated-Ansible-Role-Documentation"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["ansible", "ansible-role", "ansible-toolset", "hacktoberfest"]
stars: 53
forks: 8
openIssues: 4
closedIssues: 13
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2023-07-24T15:30:36Z"
lastCommitAt: "2026-06-27T00:35:39Z"
lastReleaseAt: "2025-03-27T05:46:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 51
maintainers: ["renovate[bot]", "rndmh3ro", "mikaEz"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e7a3923dc8d17309d69f13808d8e3ab0b9f21c455d51f66db28cfcf0b1c71d3/telekom-mms/Automated-Ansible-Role-Documentation"
discussionCount: 0
---

# aar-doc - Automated Ansible Role Documentation

`aar-doc` is a tool for generating documentation and defaults automatically from an Ansible role's metadata. Specifically, it reads the `meta/main.yml` and `meta/argument_specs.yml` files.

This is heavily inspired by [terraform-docs](https://github.com/terraform-docs/terraform-docs) which does a similar thing with Terraform modules. `aar-doc` isn't nearly as featureful though, but should do the trick!

For instance, the only output format supported is Markdown. As with `terraform-docs`, you are able to override the default template however. As Ansible users are familiar with [Jinja2](https://jinja.palletsprojects.com/en/3.1.x/) `aar-doc` uses it for templating.

Contributions are welcome to add support for more output formats!

## Installation

As `aar-doc` is a Python utility and [exists](https://pypi.org/project/aar-doc/) on PyPI , the usual `pip install` works:

``` sh
pip install aar-doc
```

## Usage

```text
 Usage: aar-doc [OPTIONS] ROLE_PATH COMMAND [ARGS]...

 A tool for generating docs for Ansible roles.

╭─ Arguments ──────────────────────────────────────────────────────────────────╮
│ *    role_path      DIRECTORY…
