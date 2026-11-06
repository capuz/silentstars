---
repo: "cloudfoundry/windows-tools-release"
name: "windows-tools-release"
description: "Contains miscellaneous Windows packages to be BOSH-deployed"
readmeQualityOk: true
url: "https://github.com/cloudfoundry/windows-tools-release"
language: "PowerShell"
languages: ["PowerShell", "Vim Script", "HTML"]
languagePcts: [45, 27, 27]
stars: 5
forks: 10
openIssues: 0
closedIssues: 24
watchers: 22
contributors: 37
recentReleases: 0
createdAt: "2017-06-08T23:14:01Z"
lastCommitAt: "2026-11-06T02:43:34Z"
lastReleaseAt: "2018-06-15T19:21:32Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 96
undervaluedScore: 73
maintainers: ["tas-runtime-bot", "mariash", "winkingturtle-vmw"]
openGraphImageUrl: "https://opengraph.githubassets.com/fae33ad178b604b1affb748026f1dc4dbac9fb124441092b222e4418f6571480/cloudfoundry/windows-tools-release"
---

# windows-tools-release

Contains miscellaneous Windows packages to be BOSH-deployed

Mostly used to install packages on a Concourse windows-worker

## Tools Installed
- [bosh-cli](https://github.com/cloudfoundry/bosh-cli)
- [cmake](https://cmake.org/download/)
- [docker](https://docs.docker.com/docker-for-windows/install/)
- [git](https://gitforwindows.org/)
- [Golang](https://golang.org/dl/)
- [mingw32](https://github.com/niXman/mingw-builds-binaries/releases) - Use the win32-dwarf-ucrt builds
- [mingw64](https://github.com/niXman/mingw-builds-binaries/releases) - Use the posix-seh-ucrt builds
- [packer](https://www.packer.io/downloads.html)
- [processhacker](http://processhacker.sourceforge.net/downloads.php)
- [Ruby](https://rubyinstaller.org/downloads/)
- [GNU make](http://gnuwin32.sourceforge.net/packages/make.htm)

### Optional Docker TLS usage
1.) Add variables to manifest
```
...
instance_groups:
- name: windows-vm
  instances: 1
  jobs:
    - name: docker
      release: windows-tools
      properties:
        docker:
          tls: ((docker_tls))

...
variables:
- name: default_ca
  type: certificate
  options:
    is_ca: true
    common_name: ca

- name: docker_tls…
