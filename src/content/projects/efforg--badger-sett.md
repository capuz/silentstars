---
repo: "EFForg/badger-sett"
name: "badger-sett"
description: "Automated training for Privacy Badger. Badger Sett automates browsers to visit websites to produce fresh Privacy Badger tracker data."
readmeQualityOk: true
url: "https://github.com/EFForg/badger-sett"
homepage: "https://www.eff.org/badger-pretraining"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [76, 24]
stars: 145
forks: 20
openIssues: 6
closedIssues: 54
watchers: 14
contributors: 8
recentReleases: 0
createdAt: "2018-04-16T21:58:02Z"
lastCommitAt: "2026-11-03T10:52:12Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 45
maintainers: ["bcyphers", "ghostwords", "Fesshompa"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fe73ea3fabf05e7af3df9301269f3201400c1699fc7d8f71f9255880a6ea478/EFForg/badger-sett"
---

# Badger Sett

> A *sett* or set is a badger's den which usually consists of a network of tunnels
  and numerous entrances. Setts incorporate larger chambers used for sleeping or
  rearing young.

This script is designed to raise young [Privacy Badgers](https://github.com/EFForg/privacybadger) by teaching them
about the trackers on popular sites. Every day, [`crawler.py`](https://github.com/EFForg/badger-sett/blob/HEAD/crawler.py) visits thousands of the top sites from the [Tranco List](https://tranco-list.eu) with the latest version of Privacy Badger, and saves its findings in `results.json`.

See the following EFF.org blog post for more information: [Giving Privacy Badger a Jump Start](https://www.eff.org/deeplinks/2018/08/giving-privacy-badger-jump-start).

## Development setup

1. Install Python 3.8+

2. Create and activate a Python virtual environment:

    ```bash
    python3 -m venv venv
    source ./venv/bin/activate
    pip install -U pip
    ```

    For more, read [this blog post](https://snarky.ca/a-quick-and-dirty-guide-on-how-to-install-packages-for-python/).

3. Install Python dependencies with `pip install -r requirements.txt`

4. Run static analysis with…
