---
repo: "cockpit-project/cockpit-machines"
name: "cockpit-machines"
description: "Cockpit UI for virtual machines"
readmeQualityOk: true
url: "https://github.com/cockpit-project/cockpit-machines"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [57, 40]
stars: 465
forks: 100
openIssues: 92
closedIssues: 470
watchers: 13
contributors: 35
recentReleases: 0
createdAt: "2021-03-18T08:34:02Z"
lastCommitAt: "2026-10-13T10:58:19Z"
lastReleaseAt: "2021-07-07T13:20:11Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "community_hub"]
healthScore: 95
undervaluedScore: 36
maintainers: ["dependabot[bot]", "cockpituous", "mvollmer"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c87021e36f2def7ac6e5bceeb74cb3ddbb35aecf0a111c87536607b25d75c35/cockpit-project/cockpit-machines"
discussionCount: 57
---

# cockpit-machines

This is the [Cockpit](https://cockpit-project.org/) user interface for virtual machines.

## Technologies

- [libvirt-dbus](https://libvirt.org/dbus.html) for enumerating machines, getting status
  update notifications, and operations such as start/stop/delete
- [virt-install](https://manpages.org/virt-install) and [virt-xml](https://manpages.org/virt-xml)
  for creating and modifying machine definitions; both part of the
  [virt-manager](https://virt-manager.org/) project

# Development dependencies

On Debian/Ubuntu:

    $ sudo apt install gettext nodejs make

On Fedora:

    $ sudo dnf install gettext nodejs make

# Getting and building the source

These commands check out the source and build it into the `dist/` directory:

```
git clone https://github.com/cockpit-project/cockpit-machines
cd cockpit-machines
make
```

# Installing

`sudo make install` installs the package in `/usr/local/share/cockpit/`. This depends
on the `dist` target, which generates the distribution tarball.

You can also run `make rpm` to build RPMs for local installation.

In `production` mode, source files are automatically minified and compressed.
Set `NODE_ENV=production` if you…
