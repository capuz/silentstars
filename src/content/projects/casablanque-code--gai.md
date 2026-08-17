---
repo: "casablanque-code/gai"
name: "gai"
description: "getaddrinfo inspector — explains how a name resolves, no LD_PRELOAD/eBPF/ptrace"
readmeQualityOk: true
url: "https://github.com/casablanque-code/gai"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["cli", "dns", "getaddrinfo", "name-resolution", "nsswitch", "rust", "systemd-resolved"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-14T23:17:27Z"
lastCommitAt: "2026-08-17T04:19:35Z"
lastReleaseAt: "2026-07-31T19:26:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 59
maintainers: ["casablanque-code", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b6f208a9e34be611be96d5db15def8bb5a5e9d32688a9cb90c5492fdec561b1/casablanque-code/gai"
---

# gai — getaddrinfo inspector

`dig` works ≠ your process resolves. `gai` shows the actual decision path
the OS walks to turn a name into an IP — `/etc/hosts`, mDNS, systemd-resolved,
DNS — and cross-checks it against an independent DNS query to catch where
that path silently diverges.

No process interception. No LD_PRELOAD, no eBPF, no ptrace. `gai` reads the
same configuration the OS reads (`nsswitch.conf`, `resolv.conf`, `gai.conf`,
`/etc/hosts`, systemd-resolved's D-Bus state, one-shot mDNS) and models the
NSS decision path glibc's resolver would walk for that configuration — not
every possible resolver a process might actually be running (see
"Resolver runtime detection" below for the one case this flags explicitly).

## Example

```
$ gai doctor testhost.local
[gai] Simulating name resolution for "testhost.local"...

  (reality check via 212.227.123.16, 212.227.123.17, systemd-resolved stub: true)

RESOLUTION PATH (simulated):
  1. Files          FOUND  10.0.0.1

DIAGNOSIS:
  ┌─ ISSUE ──────────────────────────────────────────────────────────────────┐
  │ The OS chain and a direct DNS query disagree: 10.0.0.1 vs (none).        │
  │ Something earlier in the chain…
