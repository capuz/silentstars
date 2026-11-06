---
repo: "fluent-plugins-nursery/geoip2_c"
name: "geoip2_c"
description: "libmaxminddb binding for Ruby"
readmeQualityOk: true
url: "https://github.com/fluent-plugins-nursery/geoip2_c"
language: "Ruby"
languages: ["Ruby", "C"]
languagePcts: [54, 45]
topics: ["ruby", "libmaxminddb", "geoip2"]
stars: 10
forks: 11
openIssues: 0
closedIssues: 3
watchers: 7
contributors: 12
recentReleases: 0
createdAt: "2016-12-14T17:28:06Z"
lastCommitAt: "2026-11-06T02:43:34Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 80
maintainers: ["Watson1978", "kenhys", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fae33ad178b604b1affb748026f1dc4dbac9fb124441092b222e4418f6571480/fluent-plugins-nursery/geoip2_c"
---

# GeoIP2

This gem provides binding of [libmaxminddb](http://maxmind.github.io/libmaxminddb/).

This binding does not traverse all elements in lookup result by default.
So you can get the element you want fast such as city name, country name or etc.

## Supported Ruby versions

See [workflows](https://github.com/fluent-plugins-nursery/geoip2_c/blob/master/.github/workflows/ubuntu.yml)

## Build requirements

Need ruby.h to build this extension, so you must install it before build this extension.

Debian GNU Linux / Ubuntu:

```
$ sudo apt install -y build-essential automake autoconf libtool pkgconf
```

CentOS:

```
$ sudo yum groupinstall -y "Development Tools"
```

By default, the build downloads the libmaxminddb source from GitHub, so it needs network access. To build without network access, use [libmaxminddb installed on the system](#using-libmaxminddb-installed-on-the-system).

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'geoip2_c'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install geoip2_c

### Using libmaxminddb installed on the system

By default, the installation downloads the source of libmaxminddb from…
