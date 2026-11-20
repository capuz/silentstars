---
repo: "modus-lisp/modus"
name: "modus"
description: "bare metal lisp for sovereign computing in the infinite zero-day future"
readmeQualityOk: true
url: "https://github.com/modus-lisp/modus"
language: "Common Lisp"
languages: ["Common Lisp"]
languagePcts: [92]
stars: 37
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-13T16:20:44Z"
lastCommitAt: "2026-11-20T11:27:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/9dd1198983fd6ebfd2668f5beff0d9c1aa4c244f442d05619d009130de381c8e/modus-lisp/modus"
---

# Modus

**Website: [modus-lisp.github.io](https://modus-lisp.github.io)**

A self-hosting Common Lisp that boots on bare metal — directly on hardware or in
QEMU, into a Lisp REPL with networking, SSH and cryptography and no OS
underneath — and runs hosted on Linux as an SBCL-compatible `modus` command.
Its compiler targets a portable virtual machine (MVM) with native translators
for nine CPU architectures.

## Start here: kiln

**[kiln](https://github.com/modus-lisp/kiln) is the way in to modus-lisp.** It
fetches the workspace — this repo and the rest of the org — builds it, and runs it:

```sh
git clone https://github.com/modus-lisp/kiln && cd kiln
bin/kiln build           # set this machine up: the workspace, and a core
bin/kiln local --view    # the desktop, in a window here
bin/kiln sync            # every org repo as a live checkout beside kiln, kept current
```

Or in a container: `bin/kiln container` once, then `bin/kiln vnc` for the desktop
and `bin/kiln modus` for this Lisp, hosted — a REPL, or `--script`. And as an
attestable bare-metal image: `bin/kiln image x64-uefi`. kiln pins every repo to an
exact commit in its `repos.lock`.
