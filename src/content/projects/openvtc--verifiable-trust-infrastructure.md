---
repo: "OpenVTC/verifiable-trust-infrastructure"
name: "verifiable-trust-infrastructure"
description: "Verifiable Trust Infrastructure (VTI)"
readmeQualityOk: true
url: "https://github.com/OpenVTC/verifiable-trust-infrastructure"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["ssi"]
stars: 10
forks: 18
openIssues: 7
closedIssues: 114
watchers: 3
contributors: 15
recentReleases: 0
createdAt: "2026-02-24T21:31:07Z"
lastCommitAt: "2026-10-21T21:14:32Z"
lastReleaseAt: "2026-06-08T06:41:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 68
maintainers: ["stormer78", "dependabot[bot]", "yaroslava-kurash"]
openGraphImageUrl: "https://opengraph.githubassets.com/119f871cac62ea0649e9b6869c5b1985448e0946014b436f1eb4ee14d852c5d5/OpenVTC/verifiable-trust-infrastructure"
---

# Verifiable Trust Infrastructure

A Rust workspace implementing the two service backends of the
[First Person Network](https://www.firstperson.network/white-paper):

- **Verifiable Trust Agent (VTA)** — manages cryptographic keys, DIDs,
  and access-control policies for a single organisational identity.
- **Verifiable Trust Community (VTC)** — manages a community of
  members, their credentials, the policies that gate them, and the
  optional public website + admin UX.

Plus the CLIs, SDKs, and shared crates that compose them.

## Specification

This workspace implements the **Verifiable Trust Infrastructure (VTI)
specification**: <https://trustoverip.github.io/dtgwg-vti-spec/>
(source: [trustoverip/dtgwg-vti-spec](https://github.com/trustoverip/dtgwg-vti-spec)).

The specification is normative and this workspace is an implementation of it.
Where the two disagree, the specification is what is correct and the code is
what changes. Known differences are recorded in the specification's divergence
register (Appendix F), with the requirement, the observed behaviour and the
intended resolution.

Read it before changing the authority model, the client lifecycle, the
operation surface,…
