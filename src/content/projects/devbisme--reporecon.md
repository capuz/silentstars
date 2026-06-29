---
repo: "devbisme/RepoRecon"
name: "RepoRecon"
description: "Gather and display information on Github repositories that match a given topic."
url: "https://github.com/devbisme/RepoRecon"
homepage: "https://devbisme.github.io/RepoRecon/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 15
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-09-05T23:17:37Z"
lastCommitAt: "2026-06-29T07:22:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 73
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/6814684abbf0b65dc637b05fac3d6f9a8ad13feafa9a7dbfae8cd4024b0b36e7/devbisme/RepoRecon"
---

# RepoRecon

This project consists of two tools:
1. A Python script that queries Github for groups of repositories mentioning various topics and
   stores information about them in a set of JSON files. (There is also a shell-script version of this.)
2. A single-page Javascript app that displays the collections of repos as a set of BATs (big-ass tables)
   that allow searching, filtering, and sorting.

## Usage

You can explore some tables of collected repositories [here](https://devbisme.github.io/RepoRecon/).
If you want to run it locally, do this:
1. Clone this repository to your machine;
2. Go into the `docs` directory.
3. Run an http server: `python -m http.server`.
4. Use your web browser to open `0.0.0.0:8000`.

If you want to update the tables with the latest repository information, do this:
1. Install this Python dependency: `pip install PyGithub`
1. Go into the `docs` directory.
2. Run the `scan_repos.py` script (requires Python 3) or the `scan_repos` shell script.
3. Refresh your web browser page.

If you want to modify the list of topics for collecting repositories, do this:
1. Edit the contents of the `docs/topics.json` file.
2. Run the `scan_repos.py` or `scan_repos`…
