---
repo: "cockpit-project/cockpit-ostree"
name: "cockpit-ostree"
description: "Cockpit component for managing software updates for OSTree based systems"
readmeQualityOk: true
url: "https://github.com/cockpit-project/cockpit-ostree"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [62, 28]
stars: 34
forks: 20
openIssues: 15
closedIssues: 82
watchers: 9
contributors: 17
recentReleases: 0
createdAt: "2018-06-19T13:53:58Z"
lastCommitAt: "2026-08-03T06:42:42Z"
lastReleaseAt: "2020-10-12T12:02:54Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 60
maintainers: ["cockpituous", "dependabot[bot]", "mvollmer"]
openGraphImageUrl: "https://opengraph.githubassets.com/51da1c740808f93d200c99045668c70a2e9558f06115f2e94c5da3fa167e36f7/cockpit-project/cockpit-ostree"
---

# cockpit-ostree

[Cockpit](http://www.cockpit-project.org) page for managing software
updates for [OSTree](https://ostree.readthedocs.io/) based systems.

# Getting and building the source

Make sure you have `npm` available (usually from your distribution package).
These commands check out the source and build it into the `dist/` directory:

```
git clone https://github.com/cockpit-project/cockpit-ostree.git
cd cockpit-ostree
make
```

# Installing

`make install` compiles and installs the package in `/usr/local/share/cockpit/`. The
convenience targets `srpm` and `rpm` build the source and binary rpms,
respectively. Both of these make use of the `dist` target, which is used
to generate the distribution tarball. In `production` mode, source files are
automatically minified and compressed. Set `NODE_ENV=production` if you want to
duplicate this behavior.

For development, you usually want to run your module straight out of the git
tree. To do that, link that to the location were `cockpit-bridge` looks for
packages:

```
mkdir -p ~/.local/share/cockpit
ln -s `pwd`/dist ~/.local/share/cockpit/ostree
```

After changing the code and running `make` again, reload the Cockpit page in…
