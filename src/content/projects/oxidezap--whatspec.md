---
repo: "oxidezap/whatspec"
name: "whatspec"
description: "Extract WhatsApp Web's protocol surface from its JS bundle into a language-neutral IR (+ reference Rust). Independent; not affiliated with WhatsApp/Meta."
readmeQualityOk: true
url: "https://github.com/oxidezap/whatspec"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["codegen", "intermediate-representation", "oxc", "protocol", "reverse-engineering", "rust", "wasm", "whatsapp", "whatsapp-web"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-05T03:23:28Z"
lastCommitAt: "2026-07-04T22:51:59Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 44
maintainers: ["jlucaso1", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba37d863da43977ee5e40e1f0604effac038fc2a8c242bd74839ff324d34ef38/oxidezap/whatspec"
---

# whatspec

**Extract WhatsApp Web's protocol surface from its JavaScript bundle and emit a language-neutral IR (plus reference Rust code) — for any client/library to build on.**

WhatsApp Web ships its whole protocol (IQ stanzas, protobuf schemas, GraphQL operations, app-state actions, feature flags, wire enums) compiled into a large minified JS bundle. `whatspec` parses that bundle with the [`oxc`](https://oxc.rs) AST and writes a clean, versioned, deterministic intermediate representation under [`generated/`](generated). The IR is the contract — consume it from Rust, Go, TypeScript, Python, anything. The committed Rust modules are a *reference* consumer, not the point.

## What it extracts

| Domain | `generated/…` | What it is |
|---|---|---|
| **iq** | `iq/index.json` (+ Rust) | `<iq>` request builders & response parsers, per namespace |
| **proto** | `proto/WAProto.proto` | the protobuf schemas, as a `.proto` file |
| **mex** | `mex/index.json` (+ Rust) | Relay/GraphQL persisted operations (doc id, kind, typed variables/response) |
| **appstate** | `appstate/index.json` (+ Rust) | app-state (syncd) action schemas + indexing |
| **abprops** | `abprops/index.json` (+ Rust) |…
