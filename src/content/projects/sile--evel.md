---
repo: "sile/evel"
name: "evel"
description: "An Eventual Leader Election Library for Erlang"
readmeQualityOk: true
url: "https://github.com/sile/evel"
language: "Erlang"
languages: ["Erlang"]
languagePcts: [100]
topics: ["erlang", "leader-election", "eventually-consistent"]
stars: 36
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-03-15T13:55:51Z"
lastCommitAt: "2026-11-03T10:51:42Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 31
maintainers: ["sile"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fbd58663ed6a884415fc305ea912f7294739e5bf3e80df84f0278c6e6cdf618/sile/evel"
---

evel
=====

`evel` is a distributed leader election library which has eventual consistency.

If the nodes which have started `evel` application eventually agree with the same member list (usually distributed erlang ensures it),
each election will elect a single leader who is recognized by all of them.

In the quiescent state (e.g., there are no joining nodes to the cluster),
the cost of an election is `O(M)` where `M` is the number of members (≈  nodes) who are interested in the election.
It is unaffected by the cluster size to which they belong.

`evel` provides weaker consistency than [global](http://erlang.org/doc/man/global.html) which can be regarded as OTP's leader election module.
But it is more scalable and has higher availability (e.g., more tolarent to timing failures of some nodes in the same cluster).

See [Comparison with the global module](#comparison-with-the-global-module) for more details.

Build
-----

To build the library for stand-alone usage:
```sh
$ git clone https://github.com/sile/evel.git
$ cd evel
$ ./rebar3 compile
$ ./rebar3 shell
$ > evel:module_info().
```

If you want to use from your application:
```erlang
%% In your 'rebar.config'

%% Add following…
