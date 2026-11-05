---
repo: "subuk/vmango"
name: "vmango"
description: "Your own personal IaaS cloud"
readmeQualityOk: true
url: "https://github.com/subuk/vmango"
homepage: "https://vmango.org"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [56, 39]
topics: ["libvirt", "kvm", "cloud", "golang"]
stars: 348
forks: 56
openIssues: 9
closedIssues: 65
watchers: 12
contributors: 5
recentReleases: 0
createdAt: "2015-09-09T07:19:55Z"
lastCommitAt: "2026-11-05T00:22:38Z"
lastReleaseAt: "2020-04-26T10:29:36Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 94
undervaluedScore: 39
maintainers: ["subuk", "dependabot[bot]", "anupamme"]
openGraphImageUrl: "https://opengraph.githubassets.com/0fcf357db51123026acf8cd998777119dd99ceac7b38b6eeedf76ebc30e709ff/subuk/vmango"
discussionCount: 0
---

# vmango

Vmango is a virtual machines management web interface written using [Go](http://golang.org/).

The main goal of project is not to provide a hypervisor configuration tool,
because that problem already solved by many configuration management systems
like Ansible or Puppet, but provide a convenient way to manage virtual
machines on existing hypervisors.

Current features:

* [Workload namespaces: configuration and everyday use](https://github.com/subuk/vmango/blob/HEAD/docs/content/en/docs/namespaces.md)
* SSH keys management and injection
* Volume management
* KVM machines via libvirt
* [Web console](https://streamja.com/LLEA)
* Support for cloud OS images (with cloud-init installed)
* Custom userdata for cloud-init
* Bridged network

## Binary quick start

Namespaces group machines, disks, SSH keys, templates and tasks into workspaces.
Each workspace can use one or more configured clouds; several workspaces can
share the same hosts. See the [namespace user guide](https://github.com/subuk/vmango/blob/HEAD/docs/content/en/docs/namespaces.md)
for setup and browser workflows, or [upgrade and migration](https://github.com/subuk/vmango/blob/HEAD/docs/NAMESPACES.md)
when…
