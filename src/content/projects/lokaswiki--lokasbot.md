---
repo: "LokasWiki/LokasBot"
name: "LokasBot"
description: "Repository for scripts run by LokasBot*"
readmeQualityOk: true
url: "https://github.com/LokasWiki/LokasBot"
homepage: "https://ar.wikipedia.org/wiki/%D9%85%D8%B3%D8%AA%D8%AE%D8%AF%D9%85:LokasBot"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["bot", "wikimedia", "python", "lokasbot", "pywikibot", "toolforge"]
stars: 6
forks: 2
openIssues: 2
closedIssues: 6
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-01-06T05:29:34Z"
lastCommitAt: "2026-10-29T12:24:54Z"
lastReleaseAt: "2023-03-30T20:15:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 81
maintainers: ["loka1", "Meno25", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d23e71c128a300a808b3f028c1dc0276bc4ddb6073ade886ac804cb9aa1f052d/LokasWiki/LokasBot"
discussionCount: 1
---

```

 __                 __                           _______              __
|  \               |  \                         |       \            |  \
| $$       ______  | $$   __  ______    _______ | $$$$$$$\  ______  _| $$_
| $$      /      \ | $$  /  \|      \  /       \| $$__/ $$ /      \|   $$ \
| $$     |  $$$$$$\| $$_/  $$ \$$$$$$\|  $$$$$$$| $$    $$|  $$$$$$\\$$$$$$
| $$     | $$  | $$| $$   $$ /      $$ \$$    \ | $$$$$$$\| $$  | $$ | $$ __
| $$_____| $$__/ $$| $$$$$$\|  $$$$$$$ _\$$$$$$\| $$__/ $$| $$__/ $$ | $$|  \
| $$     \\$$    $$| $$  \$$\\$$    $$|       $$| $$    $$ \$$    $$  \$$  $$
 \$$$$$$$$ \$$$$$$  \$$   \$$ \$$$$$$$ \$$$$$$$  \$$$$$$$   \$$$$$$    \$$$$

```
# Toolforge setup

Toolforge setup and job management

- ### Clone and setup virtual environments
- #### remove old repos and clone new repos and setup permissions
    ``` bash
    rm -fdr $HOME/repos && git clone --recurse-submodules https://github.com/LokasWiki/LokasBot.git $HOME/repos && chmod ug+x $HOME/repos/toolforge/bin/setup-venvs.sh
    ```
- #### run setup-venvs.sh to setup virtual environments
    ``` bash
    toolforge-jobs run setup-venvs --command…
