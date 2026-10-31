---
repo: "sippulse/tfps"
name: "tfps"
description: "VoIP Fraud Prevention System"
readmeQualityOk: true
url: "https://github.com/sippulse/tfps"
homepage: "https://tfps.co"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 18
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2016-02-23T18:02:33Z"
lastCommitAt: "2026-10-31T07:46:31Z"
lastReleaseAt: "2026-09-15T16:35:32Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 84
undervaluedScore: 68
maintainers: ["NormB", "flaviogoncalves"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5395acc770021373eaa116d1cddff8ec95c57c923079645decf18e5c88ae3aa/sippulse/tfps"
---

# TFPS

**Telephony Fraud Prevention System** for SIP networks. One static binary, no cloud, no
policy configuration.

TFPS **detects and prevents SIP fraud by banning attacker addresses in the kernel.** Think
of it as a **faster `fail2ban`**: it reads SIP straight off the wire instead of tailing and
parsing log files, so it reacts in packets rather than log-flush intervals, and it catches
attacks the logs never record. As a side effect the banned traffic vanishes from your
`sngrep`.

## Install

```sh
curl -fsSL https://tfps.co/install.sh | sh
```

Linux x86_64, kernel 5.15 or newer with BTF, systemd. That is the whole install; it asks for
`sudo` if needed, and running it again upgrades. Pinning a version, air-gapped hosts, building
from source and uninstalling are in [INSTALL.md](https://github.com/sippulse/tfps/blob/HEAD/INSTALL.md).

Two layers, and the first is the product:

- **Prevention** (default, on): drops SIP scanning, brute-force and known-bad sources —
  the `fail2ban` job, done faster and without log parsing. Most installs only ever want this.
- **Behavioural detection** (`--behavioural`, off, **highly experimental**): goes where no
  other system does — the…
