---
repo: "NVIDIA/nv-redfish"
name: "nv-redfish"
description: "NVIDIA's Redfish next generation redfish crate"
url: "https://github.com/NVIDIA/nv-redfish"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 30
forks: 9
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 99
recentReleases: 0
createdAt: "2025-12-02T20:59:22Z"
lastCommitAt: "2026-06-24T23:37:08Z"
lastReleaseAt: "2026-02-19T21:58:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 46
maintainers: ["poroh", "yoks", "jayzhudev"]
openGraphImageUrl: "https://opengraph.githubassets.com/a04374340172fd45fd0d613c99afb2c633710e043cd5edb9a452f63e6ac0cce3/NVIDIA/nv-redfish"
---

# nv-redfish

`nv-redfish` is a modular Rust client stack for Redfish BMC management.

The project combines generated Redfish schema types with a small transport
abstraction and optional ergonomic wrappers for common Redfish services. The
main crate is intentionally feature-gated: enable the service and OEM support
your client needs, or use `std-redfish` for a broad standard Redfish build.

## Crates

- `nv-redfish-core`
  - Transport-agnostic primitives and traits used by generated code.
  - Includes `Bmc`, `EntityTypeRef`, `NavProperty<T>`, `Action<T, R>`,
    `ODataId`, `ODataETag`, `ModificationResponse`, and Redfish session-create
    response metadata.
  - Provides common Redfish/OData value types such as date/time, duration,
    UUID, decimal, task, action, and navigation-property helpers.
  - Does not include an HTTP implementation.

- `nv-redfish-bmc-http`
  - HTTP implementation of `nv_redfish_core::Bmc`.
  - Provides `HttpBmc<C>`, `BmcCredentials`, ETag/cache handling, and the
    `HttpClient` trait.
  - The built-in reqwest client is behind the `reqwest` feature, enabled by
    default for this crate.
  - Supports custom default headers and session-token credential…
