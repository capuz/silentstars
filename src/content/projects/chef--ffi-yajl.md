---
repo: "chef/ffi-yajl"
name: "ffi-yajl"
description: "Ruby FFI gem wrapper around yajl2 library"
readmeQualityOk: true
url: "https://github.com/chef/ffi-yajl"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [82]
stars: 12
forks: 24
openIssues: 5
closedIssues: 39
watchers: 12
contributors: 49
recentReleases: 0
createdAt: "2013-10-24T06:16:58Z"
lastCommitAt: "2026-07-28T15:00:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 79
undervaluedScore: 60
maintainers: ["tpowell-progress", "chef-ci", "nandanhegde73"]
openGraphImageUrl: "https://opengraph.githubassets.com/972d53f086f041c257b239d14b99aa831ccbe6f0e59c3d4aba6407e81a03b21d/chef/ffi-yajl"
---

# FFI YAJL

ffi-yajl is a Ruby adapter for the [yajl](http://lloyd.github.io/yajl/) JSON parser/generator library. ffi-yajl supports multiple Ruby C extension mechanisms, including both MRI native extensions and FFI in order to be compatible with as many Ruby implementations as possible while providing good performance where possible.

## How to Install

**Warning** if building through Omnibus, a preinstalled ffi-yajl and libyajl2-gem version not matching the bundled version of the project you're attempting to build (e.g., Chef) may cause:

`cannot find -lyajldll: No such file or directory`

If your build script ends up up in this state, a short term fix is `gem uninstall -I libyajl2` before the failing `bundle install`

### Install from the command-line:

```
gem install ffi-yajl
```

Or use a Gemfile:

```
gem 'ffi-yajl'
```

## Supported Ruby VMs:

- Ruby 2.2+ and compatible rbx or jruby

## Supported Distros:

- Ubuntu 10.04 through 14.10
- Debian 7.x
- RHEL/CentOS/Oracle 5.x/6.x/7.x
- Solaris 9/10/11 (gcc, sun compiler untested)
- AIX 6.x/7.x (gcc or xlc)
- Windows 2008r2/2012 (and Win2k/2k3 and consumer versions should work)

## Basic Usage

Start by requiring it:

```ruby…
