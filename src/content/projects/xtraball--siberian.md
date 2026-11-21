---
repo: "Xtraball/Siberian"
name: "Siberian"
description: "Siberian Single App Edition (SAE), free and open-source app builder."
readmeQualityOk: true
url: "https://github.com/Xtraball/Siberian"
homepage: "https://www.siberiancms.com"
language: "JavaScript"
languages: ["JavaScript", "PHP"]
languagePcts: [38, 32]
topics: ["angularjs", "ionic", "php", "bootstrap", "android", "ios", "zf1"]
stars: 200
forks: 246
openIssues: 36
closedIssues: 734
watchers: 43
contributors: 11
recentReleases: 10
createdAt: "2016-03-23T09:50:32Z"
lastCommitAt: "2026-11-21T13:16:52Z"
lastReleaseAt: "2026-11-09T21:49:05Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine", "fork_magnet"]
healthScore: 98
undervaluedScore: 54
maintainers: ["Slicit", "frmoretto"]
openGraphImageUrl: "https://opengraph.githubassets.com/10625730ab2ea1dbcf099d3595141e28146b9da6542339c119d1ca0c60d5a11b/Xtraball/Siberian"
discussionCount: 2
---

# Siberian SAE (Single App Edition)

## Community forums & Roadmap

* [Forums / Discussions](https://github.com/Xtraball/Siberian/discussions)
* [Guidelines](https://github.com/Xtraball/Siberian/discussions/869)

## Documentation

* [User documentation](http://doc.siberiancms.com)
* [Developer documentation](http://developer.siberiancms.com)

## Requirements

### Software

1. Docker with compose

### Configuration

1. First you will need to either checkout the project `git clone https://github.com/Xtraball/Siberian.git`

    or download the [zip archive](https://github.com/Xtraball/Siberian/archive/trunk.zip) then extract it on your webserver.

2. Run `npm install` then follow the instructions to update your local shell.

3. Go into `ionic` folder then run `npm install` too.

4. Run `./bin/install` to hook custom modifications on the installed node_modules.

5. Run `./sb init` to init your local project.

6. Configure your environment with either [apache](#apache) or [nginx](#nginx) with the given generated templates from step 4.

When you're done with the previous steps, reload your web server, then install using the [Web installer](#Web-installer)
