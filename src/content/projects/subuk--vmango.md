---
repo: "subuk/vmango"
name: "vmango"
description: "Your own personal IaaS cloud"
readmeQualityOk: true
url: "https://github.com/subuk/vmango"
homepage: "https://vmango.org"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [56, 23]
topics: ["libvirt", "kvm", "cloud", "golang"]
stars: 348
forks: 56
openIssues: 13
closedIssues: 61
watchers: 13
contributors: 5
recentReleases: 0
createdAt: "2015-09-09T07:19:55Z"
lastCommitAt: "2026-10-29T10:37:10Z"
lastReleaseAt: "2020-04-26T10:29:36Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 39
maintainers: ["subuk", "dependabot[bot]", "anupamme"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc5002dd2615b39f7ce3ccd22bea47226d266e3672677bcb10f56440ea6580e6/subuk/vmango"
discussionCount: 0
---

# vmango

Vmango is a virtual machines management web interface written using [Go](http://golang.org/).

The main goal of project is not to provide a hypervisor configuration tool,
because that problem already solved by many configuration management systems
like Ansible or Puppet, but provide a convenient way to manage virtual
machines on existing hypervisors.

Current features:

* SSH keys management and injection
* Volume management
* KVM machines via libvirt
* [Web console](https://streamja.com/LLEA)
* Support for cloud OS images (with cloud-init installed)
* Custom userdata for cloud-init
* Bridged network

## Binary quick start

Download a ready-built archive for **Linux x64**, **Windows x64** or
**macOS arm64** from [GitHub Releases](https://github.com/subuk/vmango/releases),
then follow the [binary quick-start guide](https://github.com/subuk/vmango/blob/HEAD/docs/content/en/docs/start.md)
([website](https://vmango.org/docs/start/)). It covers runtime dependencies,
checksums, libvirt connectivity, an administrator password and zero-node
troubleshooting. No Docker or Go compiler is needed. Windows includes libvirt
DLLs for remote hosts; ISO tools are separate.

See…
