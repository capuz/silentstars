---
repo: "turris-cz/user-docs"
name: "user-docs"
description: "Technical documentation for users."
readmeQualityOk: true
url: "https://github.com/turris-cz/user-docs"
homepage: "https://gitlab.nic.cz/turris/user-docs"
language: "HTML"
languages: ["HTML", "CSS"]
languagePcts: [42, 41]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 22
recentReleases: 0
createdAt: "2021-11-25T07:39:12Z"
lastCommitAt: "2026-11-03T12:27:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 65
undervaluedScore: 72
maintainers: ["ljelinek-cznic", "novotny-marek", "miska"]
openGraphImageUrl: "https://opengraph.githubassets.com/e036ebbbc10b8ef66e921057f3d6552a8305d485b47c0148cd5f25bcc4537322/turris-cz/user-docs"
---

# Documentation for Turris routers

This documentation is written in English. It will walk you through the first
setup of your router and give you insights into the main features available in
Turris OS.

We are using Markdown to document everything and `mkdocs` to handle the
presentation.

## Requirements:

First of all clone this repository via `git`.

```bash
git clone https://gitlab.nic.cz/turris/user-docs.git
```

To render this documentation, you need [MkDocs](https://www.mkdocs.org/).

Run the following `pip3` command in the cloned repository to install it easily.

```bash
pip3 install --user -r requirements.txt
```

### Error externally managed environment

If you run into this error due to your distribution adopting [PEP 668 - Marking Python base environments as "externally managed"](https://peps.python.org/pep-0668/)

```bash
error: externally-managed-environment

× This environment is externally managed
╰─> To install Python packages system-wide, try apt install
python3-xyz, where xyz is the package you are trying to
install.
...
```

Use venv

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Then run the following command

```bash
python3 -m pip install -r…
