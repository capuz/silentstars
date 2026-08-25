---
repo: "hypersdk/guestkit"
name: "guestkit"
description: "Pure-Rust VM disk inspection — zero boot, zero agents, instant insight. AI-powered diagnostics explain what’s inside, what’s broken, and what to fix before you boot."
readmeQualityOk: true
url: "https://github.com/hypersdk/guestkit"
homepage: "https://zyvor.dev/guestkit"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["virtual-machine", "virtualization"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 7
createdAt: "2026-01-22T19:17:58Z"
lastCommitAt: "2026-08-25T04:09:37Z"
lastReleaseAt: "2026-07-11T09:48:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 62
maintainers: ["ssahani"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a1b71f5f27704eb49fe115bfa388efd2cb647d7b61558b5929c892d542a15bb/hypersdk/guestkit"
---

# GuestKit

  <strong>Offline VM intelligence. Migration assurance you can prove.</strong><br/>
  Score boot readiness <em>before</em> power-on · repair disks offline · certify cutover with a Passport
</p>

</p>

</p>

---

## The cutover problem — solved offline

Every hypervisor exit fails the same way: you discover the disk was broken **at 2am**, in the cutover window, after power-on.

GuestKit reads the disk **while the guest is off**, scores first-boot probability 0–100, and emits a reviewable fix plan — no libguestfs appliance, no “just try it and hope.”

```text
  disk.qcow2 / .vmdk / .vhdx / .vhd / .vdi / .raw
                    │
                    ▼
         ┌──────────────────────┐
         │  Pure-Rust engine    │──►  doctor 0–100 + blockers
         │  NBD / loop mount    │──►  migrate-plan YAML
         └──────────────────────┘──►  Passport · repair · CI gate
                    │
      CLI · TUI · Python · Web · Agent · GitHub Action
```

| | |
|---|---|
| **70+** commands | **6** disk formats |
| **0** libguestfs appliances | **8** migration targets |
| **Apache-2.0** | Used in CI, labs, and hypervisor-exit programs |

**Certify with GuestKit → convert with…
