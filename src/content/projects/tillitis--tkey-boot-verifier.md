---
repo: "tillitis/tkey-boot-verifier"
name: "tkey-boot-verifier"
description: "Boot verifier for Tillitis TKey"
readmeQualityOk: true
url: "https://github.com/tillitis/tkey-boot-verifier"
homepage: "https://tillitis.se/"
language: "C"
languages: ["C"]
languagePcts: [87]
topics: ["boot", "security", "token", "verified-boot"]
stars: 6
forks: 0
openIssues: 9
closedIssues: 9
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-10-01T12:39:23Z"
lastCommitAt: "2026-09-16T07:28:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 60
maintainers: ["agren", "mchack-work", "dehanj"]
openGraphImageUrl: "https://opengraph.githubassets.com/eae2bee1348346d9c3bba2151c11dcef6ae0dece417e8ed05ff3f8577e9e8c2b/tillitis/tkey-boot-verifier"
---

# tkey-boot-verifier

**WARNING**: Work in progress!

The TKey boot verifier is a boot stage for the Tillitis TKey. With the
support of the TKey firmware it implements a combination of measured
boot and verified boot which makes it possible to upgrade the verified
app without losing data, including the cryptographic keys.

The boot verifier can start either from slot 0 in flash or be loaded
by a client app.

See [the design document](https://github.com/tillitis/tkey-boot-verifier/blob/HEAD/doc/design.md) for more.

## Status

It currently supports:

- Running from app slot 0 on the flash filesystem, verifying the app
  in slot 1 using the pubkey also stored on flash. This is the default
  behaviour.

- Installing a device app in slot 1. See the `install` command. This
  needs an installed boot verifier to talk to. The boot verifier *must*
  be installed in slot 0 and its digest noted in firmware, since it
  needs privileged access to the filesystem to be able to install
  apps. See Produce flash image below.

  Right now it automatically resets to start the boot verifier again
  when installation has finished, then it verifies and starts the app
  in slot 1.

- Installing a vendor…
