---
repo: "usegalaxy-au/usegalaxy-au-tools"
name: "usegalaxy-au-tools"
description: "Tool yaml files for usegalaxy.org.au (main and dev servers)"
readmeQualityOk: true
url: "https://github.com/usegalaxy-au/usegalaxy-au-tools"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [53, 45]
stars: 8
forks: 26
openIssues: 64
closedIssues: 109
watchers: 4
contributors: 20
recentReleases: 0
createdAt: "2018-06-16T14:03:27Z"
lastCommitAt: "2026-11-23T10:29:54Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 80
maintainers: ["cat-bro", "galaxy-au-tools-jenkins-bot", "mthang"]
openGraphImageUrl: "https://opengraph.githubassets.com/013621790028f3d70526492025382a8cf743b5679b36e3b681276923480c02c1/usegalaxy-au/usegalaxy-au-tools"
---

## usegalaxy-au-tools

This repository consists of .yml files or tools installed on Galaxy Australia and scripts for Travis CI and and Jenkins automated tool installation process.  The .yml files are maintained by the Jenkins process and should not be edited directly.

### Requesting a tool on Galaxy Australia

1. Make a fork of this repository.
2. On a branch, create one or more yaml files within the 'requests' directory in the following format:

```
tools:
  - name: <tool name>
    owner: <tool owner>
    tool_panel_section_label: <Tool section label existing on Galaxy Australia>
    tool_shed_url: # optional: omit this line to use default 'toolshed.g2.bx.psu.edu'
    revisions: # optional: omit this section to use default latest available revision
      - revision_hash_1
      - revision_hash_2
```

See the Galaxy Tool Shed https://toolshed.g2.bx.psu.edu/ for information about Galaxy tools.
There is also an [example yaml file](https://github.com/usegalaxy-au/usegalaxy-au-tools/blob/HEAD/requests/template/example.yml) in this repository.
