---
repo: "franzos/panther"
name: "panther"
description: "[Mirror] GNU Guix Channel with popular packages, system- and home services"
readmeQualityOk: true
url: "https://github.com/franzos/panther"
homepage: "https://codeberg.org/gofranz/panther"
language: "Scheme"
languages: ["Scheme"]
languagePcts: [98]
topics: ["guix", "guix-channel", "guix-home", "linux", "packages"]
stars: 17
forks: 0
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-12-02T21:37:29Z"
lastCommitAt: "2026-11-24T01:56:03Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 86
undervaluedScore: 66
maintainers: ["franzos"]
openGraphImageUrl: "https://opengraph.githubassets.com/178fdd9ae0ad9133b2798771f55ddab57e1ac2b332e4dbb15d2c59890b88e0ff/franzos/panther"
fundingLinks: ["GITHUB:https://github.com/franzos"]
---

# My guix channel "panther"

This repository contains GUIX package defintions maintained primarily by [Franz Geffke](https://gofranz.com).

## Channel Definition

```scheme
(cons* (channel
        (name 'pantherx)
        (url "https://codeberg.org/gofranz/panther.git")
        ;; Enable signature verification
        (introduction
         (make-channel-introduction
          "54b4056ac571611892c743b65f4c47dc298c49da"
          (openpgp-fingerprint
           "A36A D41E ECC7 A871 1003  5D24 524F EB1A 9D33 C9CB"))))
       %default-channels)
```

## Substitute Server

**URL:** `https://substitutes.guix.gofranz.com`

```scheme
;; Public key
(public-key
 (ecc
  (curve Ed25519)
  (q #0096373009D945F86C75DFE96FC2D21E2F82BA8264CB69180AA4F9D3C45BAA47#)))
```

```bash
# Authorize
sudo guix archive --authorize < /path/to/key.pub
```

Already configured if using `%os-base-services` or `%os-desktop-services`.
