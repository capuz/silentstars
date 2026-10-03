---
repo: "version-fox/vfox-elixir"
name: "vfox-elixir"
description: "Elixir vfox plugin. Use the vfox to manage multiple Elixir versions in Linux/Darwin MacOS/Windows. all platform~"
readmeQualityOk: true
url: "https://github.com/version-fox/vfox-elixir"
homepage: "https://version-fox.github.io/vfox-elixir/"
language: "Lua"
languages: ["Lua", "Python", "HTML"]
languagePcts: [34, 30, 29]
topics: ["elixir-lang", "vfox", "vfox-plugin", "elixir", "elixir-windows", "mise-en-place"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2024-04-01T18:04:23Z"
lastCommitAt: "2026-10-03T09:22:59Z"
lastReleaseAt: "2025-07-16T16:58:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 63
maintainers: ["github-actions[bot]", "yeshan333", "aooohan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/780553390/32d8dac0-8faa-45ec-a862-802c8149b809"
---

</div>

# vfox-elixir plugin

Elixir [vfox](https://github.com/version-fox) plugin. Use the vfox to manage multiple Elixir versions in Linux/Darwin MacOS/Windows. all platform~

## Usage

```shell
# install plugin
vfox add elixir

# install an available version
vfox search elixir
# or specific version 
vfox install elixir@1.16.2
```

## Before install Elixir

vfox-elixir plugin would install Elixir through the [Elixir](https://elixir-lang.org/install.html#compiling-from-source) source code compilation. So you must have the utilities mentioned in the document -> [Compiling from source](https://elixir-lang.org/install.html#compiling-from-source).

The installation of Elixir relies on Erlang/OTP. You can use the [vfox-erlang](https://github.com/version-fox/vfox-erlang) plugin to manage your Erlang/OTP versions.

Ensure that Elixir and Erlang/OTP versions are compatible -> [Elixir and Erlang/OTP compatibility](https://hexdocs.pm/elixir/1.16.2/compatibility-and-deprecations.html#between-elixir-and-erlang-otp). 

Here are two examples of installing on Ubuntu 20.04 and MacOS 13.

### install in Linux (Ubuntu 20.04/22.04)

```shell
# install utilities
sudo apt-get -y install…
