---
repo: "PanDAWMS/panda-server"
name: "panda-server"
description: "package for the panda server"
readmeQualityOk: true
url: "https://github.com/PanDAWMS/panda-server"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 27
openIssues: 0
closedIssues: 8
watchers: 24
contributors: 21
recentReleases: 0
createdAt: "2014-04-28T14:11:06Z"
lastCommitAt: "2026-09-21T09:14:42Z"
lastReleaseAt: "2022-06-29T14:21:35Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 100
undervaluedScore: 69
maintainers: ["tmaeno", "mightqxc", "fbarreir"]
openGraphImageUrl: "https://opengraph.githubassets.com/845c2b4c7778c8a327bf44d5a171977b2f1517112ae8f99261daab9173d6acf2/PanDAWMS/panda-server"
---

# Monorepo for the PanDA Server and JEDI

## Overall PanDA documentation 

https://panda-wms.readthedocs.io/en/latest/

## Installation and distribution
### Installation via PyPI
``` conslole
$ pip install panda-server
```

### Installation from GitHub repository
``` console
$ pip install git+https://github.com/PanDAWMS/panda-server.git
```

### Installation from local Git clone
``` console
$ git clone
$ cd panda-server
$ pip install .
```

### Making source distribution to be published on PyPI
``` console
$ cd panda-server
$ python -m build -s
```

## Making Unified Docker image
``` console
$ git clone
$ cd panda-server
$ docker build .
```
