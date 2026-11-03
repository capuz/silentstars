---
repo: "devnexus/devnexus-site"
name: "devnexus-site"
description: "The DevNexus Site"
readmeQualityOk: true
url: "https://github.com/devnexus/devnexus-site"
homepage: "http://www.devnexus.com/"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 18
forks: 10
openIssues: 7
closedIssues: 20
watchers: 12
contributors: 10
recentReleases: 0
createdAt: "2011-10-08T03:32:43Z"
lastCommitAt: "2026-11-03T12:46:53Z"
lastReleaseAt: "2015-08-16T03:20:20Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 53
maintainers: ["vincentmayers", "lauramoore"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1d2a43ef861754921808fdbb8c976ffb74ac3168b130d42245f0f512716e76e/devnexus/devnexus-site"
---

#devnexus-site

This project is the jekyll static site generator for the [Devnexus Conference](https://devnexus.com) held every
year in Atlanta, GA.

To run the site and see data on standard port 4000
'''
> bundle exec jekyll s

This project includes a Jekyll plugin in order to process CFP data into the site collections
To see options for how to process and run:
'''
> bundle exec jekyll cfp --help

Notes:
* prior to schedule, CFP data is protected by login.  Download and use --file option early on.

Steps to archive a year
1.  Change and commit _config.yml so that site uses post conference header.
```
active-header: navigation-post-show.html
registration: closed
```

2. re-path collection output to new archive location and run jekyll
```
collections:
  speakers:
    title: Speakers 2020
    output: true
    permalink: archive/devnexus2020/:collection/:path
  events:
     title: Presentations 2020
     output: true
     permalink: archive/devnexus2020/presentations/:path/
  event-instructions:
     title: Workshop Prep 2020
     output: true
     permalink: archive/devnexus2020/presentations/:path/instructions

```

3. Run script _move_to_archive.sh  in the root of the project.
It…
