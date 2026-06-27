---
repo: "tardy-org/secsock"
name: "secsock"
description: "Async TLS (Secure Socket) for the Tardy runtime"
url: "https://github.com/tardy-org/secsock"
language: "C"
languages: ["C"]
languagePcts: [98]
topics: ["async", "tls", "zig", "zig-package", "tardy"]
stars: 14
forks: 13
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2025-03-09T00:23:02Z"
lastCommitAt: "2026-06-27T00:35:21Z"
lastReleaseAt: "2026-06-13T17:31:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 59
undervaluedScore: 56
maintainers: ["bernardassan"]
openGraphImageUrl: "https://opengraph.githubassets.com/216a175f593a0f42a61450b73ba39965fabf44cb418ebda5bac1e6c118db2b18/tardy-org/secsock"
---

# secsock

This is an implementation of `SecureSocket`, a wrapper for the Tardy `Socket` type that provides TLS functionality.

## Supported TLS Backends
- [BearSSL](https://bearssl.org/gitweb/?p=BearSSL;a=summary): An implementation of the SSL/TLS protocol (RFC 5346) written in C.
- [s2n-tls](https://github.com/aws/s2n-tls): An implementation of SSL/TLS protocols by AWS. (Experimental)

## Installing
Compatible Zig Version: `0.16.0`

Compatible [tardy](https://github.com/tardy-org/tardy) Version: `v0.3.2`

Latest Release: `0.1.2`
```
zig fetch --save git+https://github.com/tardy-org/secsock#v0.1.2
```

You can then add the dependency in your `build.zig` file:
```zig
const secsock = b.dependency("secsock", .{
    .target = target,
    .optimize = optimize,
}).module("secsock");

exe.root_module.addImport(secsock);
```

## Contribution
We use Nix Flakes for managing the development environment. Nix Flakes provide a reproducible, declarative approach to managing dependencies and development tools.

### Prerequisites
 - Install [Nix](https://nixos.org/download/)
```bash
sh <(curl -L https://nixos.org/nix/install) --daemon
```
 - Enable [Flake support](https://nixos.wiki/wiki/Flakes)…
