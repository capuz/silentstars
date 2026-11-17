---
repo: "NSO-developer/nso-gitbook"
name: "nso-gitbook"
description: "NSO GitBook GitHub sync"
readmeQualityOk: true
url: "https://github.com/NSO-developer/nso-gitbook"
homepage: "https://nso-docs.cisco.com/"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 15
forks: 18
openIssues: 0
closedIssues: 1
watchers: 6
contributors: 23
recentReleases: 0
createdAt: "2024-04-25T15:48:28Z"
lastCommitAt: "2026-11-17T12:14:00Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 80
maintainers: ["bbcsco", "ahcsco", "crenners"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e82939673abcd2f333a845a66e605a1ce4b6e78bb5b6b8902ef8c8a10241895/NSO-developer/nso-gitbook"
---

---
description: Latest features and enhancements added in this release.
icon: sparkles
---

# What's New

{% hint style="info" %}
Only significant new updates are listed here. To see the complete list of changes, refer to the [NSO Changelog Explorer](https://developer.cisco.com/docs/nso/changelog-explorer/?from=6.7\&to=6.8).
{% endhint %}

## Release Highlights

This release includes major enhancements in the following areas:

The NSO systemd service now starts NSO in foreground mode, allowing systemd to monitor the `ncs.smp` process directly and restart it after an unexpected failure. The service also uses improved startup logic that allows long-running model upgrade to complete without timing out.

Documentation Updates:

* Updated the [System Install](https://github.com/NSO-developer/nso-gitbook/blob/HEAD/administration/installation-and-deployment/system-install.md) section with the new behavior.

NSO adds support for Post-Quantum Cryptography (PQC) to help guard against "store now, decrypt later" attacks with future quantum computers, including:

* Implementation of post-quantum key exchange and signature algorithms, such as `mlkem768x25519-sha256` and `ML-DSA`.
* Offering…
