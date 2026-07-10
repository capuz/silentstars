---
repo: "cedtwo/redb_model"
name: "redb_model"
description: "A derive macro for generating redb table definitions and DTO object conversion methods/implementations."
readmeQualityOk: true
url: "https://github.com/cedtwo/redb_model"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-08-07T11:10:56Z"
lastCommitAt: "2026-07-10T07:00:36Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 35
maintainers: ["cedtwo"]
openGraphImageUrl: "https://opengraph.githubassets.com/1da11d9f7b2142791f809b3dbd8ec058a9431ff9deace783d3a5f55200b95e0e/cedtwo/redb_model"
---

# redb_model

## Redb Model
A derive macro for generating [`redb`] table definitions and DTO object
conversion methods/implementations.

### Functionality

At a minimum, deriving `Model` on a named `struct` will implement the [`Model`]
trait, declaring `redb::TableDefinition` as an associated constant.

```rust
#[derive(Model)]
struct User {
    #[entry(position = "key")]
    id: u32,
    #[entry(position = "value")]
    name: String,
    #[entry(position = "value")]
    email: String,
}

// redb::TableDefinition::<u32, (String, String)>
assert_eq!(User::DEFINITION.name(), "User");
```

In the example below, the table name is specified as "outbound_edge", and the
`label` field is declared as `&str`, rather than `String` in the table. The
`impl_ext` argument on the struct generates an implementation of [`ModelExt`],
giving access to methods for type conversion between the DTO types and those
of the `redb` key/value. In this case, calling any of the `as_` methods will
`Copy` the `u32` fields, and borrow the `String` field as a `&str`.

```rust
#[derive(Model, Debug, PartialEq, Eq)]
#[model(name = "outbound_edge", impl_ext)]
struct Edge {
    #[entry(position = "key")]
    source:…
