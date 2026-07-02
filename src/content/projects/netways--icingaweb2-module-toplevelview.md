---
repo: "NETWAYS/icingaweb2-module-toplevelview"
name: "icingaweb2-module-toplevelview"
description: "TopLevelView is a drill down view into your Icinga environment"
url: "https://github.com/NETWAYS/icingaweb2-module-toplevelview"
homepage: "https://www.netways.de/"
language: "PHP"
languages: ["PHP"]
languagePcts: [86]
topics: ["icingaweb2", "visualization", "developed-by-netways"]
stars: 18
forks: 10
openIssues: 0
closedIssues: 47
watchers: 6
contributors: 29
recentReleases: 0
createdAt: "2017-09-11T06:09:34Z"
lastCommitAt: "2026-07-02T06:32:38Z"
lastReleaseAt: "2026-02-20T11:22:02Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 82
undervaluedScore: 51
maintainers: ["martialblog", "BastianLedererIcinga", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/70bedd7ff3c78208ab9a9357d49cb1cf754da882850ca82407eefe1a0073977c/NETWAYS/icingaweb2-module-toplevelview"
---

Top Level View for Icinga Web 2
===============================

Top Level View is a hierarchy based status view for Icinga Web 2.

You can define a hierarchical structure containing hosts, services and hostgroups.
And the view presents you an overview of the overall status of the sub-hierarchies.

Example:

```yaml
name: My View
children:
- name: Section 1
  children:
  - name: Tile 1
    children:
    - host: localhost
    - host: localhost
      service: disk
    - host: anotherhost
      service: ssh
  - name: Tile 2
    hostgroup: linux-servers
  - servicegroup: http
```

With a caching layer, this view can aggregate thousands of status objects and make
them easily available for overview and drill down.

## Requirements

* Icinga Web 2 >= 2.5.0
* Icinga DB Web >= 1.0.0
* php-yaml

Also see [Introduction in docs](doc/01-Introduction.md).

## Documentation

All documentation can be found inside the [doc](doc/) directory.

## License

Icinga Web TopLevelView is licensed under the terms of the [GNU General Public License Version 2](COPYING).
