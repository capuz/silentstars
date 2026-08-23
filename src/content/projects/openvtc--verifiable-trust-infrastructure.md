---
repo: "OpenVTC/verifiable-trust-infrastructure"
name: "verifiable-trust-infrastructure"
description: "Verifiable Trust Infrastructure (VTI)"
readmeQualityOk: true
url: "https://github.com/OpenVTC/verifiable-trust-infrastructure"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["ssi"]
stars: 8
forks: 16
openIssues: 3
closedIssues: 75
watchers: 3
contributors: 13
recentReleases: 5
createdAt: "2026-02-24T21:31:07Z"
lastCommitAt: "2026-08-23T04:08:57Z"
lastReleaseAt: "2026-06-08T06:41:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 99
undervaluedScore: 71
maintainers: ["stormer78", "oleksiipiliugin", "geoffturk"]
openGraphImageUrl: "https://opengraph.githubassets.com/500c0cb7943e7c6be4c4fa49b6dd046af196441ff0be50217392b7410b47ae12/OpenVTC/verifiable-trust-infrastructure"
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

## Which service do you need?

```mermaid
flowchart TD
    start([What are you trying to do?])
    keys{Custody<br/>cryptographic<br/>keys + DIDs<br/>for an<br/>organisation?}
    members{Run a<br/>self-governing<br/>community of<br/>members?}
    vta[Start with <b>VTA</b><br/>docs/02-vta/]
    pair[Provision a VTA first,<br/>then a VTC on top of it]
    vtc[VTC docs<br/>docs/03-vtc/]

    start --> keys
    keys -- "yes, only keys" --> vta
    keys -- "yes, plus a community" --> pair
    keys -- "no, just a community" --> pair
    pair --> vtc

    classDef vta fill:#d4e6f9,stroke:#3a6fb0,stroke-width:1.5px,color:#08305f
    classDef vtc…
